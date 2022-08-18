let totalProduct = 0;
let sum = 0;
function getProductInfo(product) {
    totalProduct += 1;
    const name = product.parentNode.parentNode.children[0].innerText;
    const price = product.parentNode.parentNode.children[1].children[0].innerText;
    sum += parseFloat(price);
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <tr>
    <th>${totalProduct}</th>
    <td>${name}</td>
    <td>${price}</td>
  </tr>
    `
    const tableBody = document.getElementById('table-body');
    tableBody.appendChild(tr);

    const tableBottom = document.getElementById('table-bottom');
    console.log(tableBottom)
    tableBottom.innerHTML = '';
    const totalTr = document.createElement('tr');
    totalTr.innerHTML = `
    <tr>
    <th> </th>
    <td>Total Price</td>
    <td>${sum}</td>
  </tr>
    `;
    tableBottom.appendChild(totalTr);

    //

    document.getElementById('CartTotalProduct').innerText = totalProduct;
}