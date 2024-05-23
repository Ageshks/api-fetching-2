fetch("https://fakestoreapi.com/products").then((data) => {
    console.log(data);
    return data.json(); // converted to object
}).then((objectData) => {
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values) => {
        tableData += `
            <tr>
                <td>${values.title}</td>
                <td>${values.description}</td>
                <td>${values.price}</td>
                <td><img src="${values.image}" alt="${values.title}" style="width:50px;height:50px;"></td>
            </tr>`;
    });
    document.getElementById('table-data').innerHTML = tableData;
}).catch((error) => {
    console.error('Error fetching data:', error);
});
