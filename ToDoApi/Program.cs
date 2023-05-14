using Microsoft.EntityFrameworkCore;
using ToDoApi;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ToDoDbContext>();

//swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder => builder
     .AllowAnyOrigin()
     .AllowAnyMethod()
     .AllowAnyHeader());   

app.MapGet("/items", async (ToDoDbContext db) => await db.Items.ToListAsync());

app.MapGet("/items/{id}", async (int Id, ToDoDbContext db) =>
 await db.Items.FindAsync(Id) is Item todo ? Results.Ok(todo) : Results.NotFound());

app.MapPost("/items", async (Item item, ToDoDbContext Db) =>
{
    var todoItem = new Item
    {
        IsComplete = item.IsComplete,
        Name = item.Name
    };
    Db.Items.Add(todoItem);
    await Db.SaveChangesAsync();
    return Results.Created($"/items/{todoItem.Id}", todoItem);
});

app.MapPut("/items/{id}", async (int id, ToDoDbContext db) =>
{
    var todo = await db.Items.FindAsync(id);
    if (todo is null)
        return Results.NotFound();
    todo.IsComplete = !todo.IsComplete;
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.MapDelete("/items/{id}", async (int Id, ToDoDbContext db) =>
{
    if (await db.Items.FindAsync(Id) is Item todo)
    {
        db.Items.Remove(todo);
        await db.SaveChangesAsync();
        return Results.Ok(todo);
    }
    return Results.NotFound();
});

app.Run();
