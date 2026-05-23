function List()
{
    const fruits = ["Apple", "Orange", "Banana", "Cherry", "Grapes"]; 

    const fruits_dict = [{id:1, name:"Apple", color:"Red", calories: 95}, 
                        {id:2, name:"Orange", color:"Orange", calories: 62}, 
                        {id:3, name:"Banana", color:"Yellow", calories: 50}, 
                        {id:4, name:"Cherry", color:"Red", calories: 4}, 
                        {id:5, name:"Grapes", color:"Purple", calories: 3}];
    
    // fruits.sort()

    // defenition of sort() method: The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
    fruits_dict.sort((a,b)=>{
        if(a.calories < b.calories) return -1;
        else if(a.calories > b.calories) return 1;
        else return 0;})

    fruits_dict.sort((a,b)=> a.name.localeCompare(b.name));
    fruits_dict.sort((a,b)=> b.name.localeCompare(a.name));

    const fruitsItem = fruits.map(item=><li>{item}</li>);
    const fuitesItem_dict = fruits_dict.map(item=><li key = {item.id}> 
            {item.name}: {item.color} &nbsp; Calories: <b>{item.calories}</b></li>);
    return (<ol>{fuitesItem_dict}</ol>);
}

export default List;