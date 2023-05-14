using System;
using System.Collections.Generic;

namespace ToDoApi;

public partial class Item
{
    public int Id { get; set; }
    //jjj
    public string? Name { get; set; }

    public bool? IsComplete { get; set; }
}
