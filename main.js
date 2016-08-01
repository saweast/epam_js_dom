/**
 * Created by Tea on 7/31/2016.
 */
"use strict";
window.onload = function () {
    let productType = document.getElementsByClassName('pType')[0],
        productTypeValue,
        local = 0,
        newPhone = document.getElementById('newPhone'),
        button = document.getElementById('submitButton'),
        result = document.getElementById('bill');


    newPhone.addEventListener('click', function () {
        let parent = document.getElementsByClassName('orderPhones')[0],
            label = document.createElement('label'),
            input = document.createElement('input'),
            textNode = document.createTextNode('Phone number: ');
        label.setAttribute('for', 'orderPhone' + local);
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'orderPhone');
        input.setAttribute('id', 'orderPhone' + local);
        local++;
        label.appendChild(textNode);
        label.appendChild(input);
        parent.appendChild(label);
    })

    productType.addEventListener('click', function (event) {
        let target = event.target,
            radio = document.getElementsByName('productType'),
            standartBlock = document.getElementsByClassName('standart')[0],
            exclusiveBlock = document.getElementsByClassName('exclusive')[0];
        if (radio[0].checked) {
            standartBlock.style.display = 'block';
            exclusiveBlock.style.display = 'none';
            productTypeValue = 0;
        } else {
            standartBlock.style.display = 'none';
            exclusiveBlock.style.display = 'block';
            productTypeValue = 1;
        }
    });

    button.addEventListener('click', function (e) {
        e.preventDefault();
        let price = document.getElementById('price').value,
            number = document.getElementById('number').value,
            fullName = document.getElementById('orderName').value;
        if (!productTypeValue) {
            let name = document.getElementById('productNameStandart').value,
                file = document.getElementById('productFileStandart').value;
            makeStandartOrder(name, file, price, number, fullName);
        } else {
            let name = document.getElementById('productNameExclusive').value,
                file = document.getElementById('productFileExclusive').value,
                formFactor = document.getElementById('productFormFactorExclusive').selectedIndex,
                workFlow = document.getElementById('productWorkFlowExclusive').selectedIndex,
                diameter = document.getElementById('productDiameterExclusive').value,
                matherial = document.getElementById('productMatherialExclusive').selectedIndex,
                mountingBracket = document.getElementById('productMountingBracketExclusive').value,
                length = document.getElementById('productLengthExclusive').value;
                makeExOrder(name, file, formFactor, workFlow, diameter, matherial, mountingBracket, length, price, number, fullName);
        }
    });

    function makeStandartOrder(name, file, price, number, fullName) {
        let pricenew = ((number*price) <= 1000)? (number*price) : (number*price*0.93);
        result.innerHTML += '<div>' +
            '<label>Full name: <input type=/"text/" name="orderName" value='+fullName+'></label>' +
            '<label>Name: <input required type="text" name="productNameStandart" value='+name+'></label>' +
            '<label>Image: <input required type="file" name="productFileStandart" value='+file+'></label>' +
            '<label>Number: <input type="number" name="number" value='+number+' onchange="calc(this, '+price+')"></label>'+
            '<p>Price is: '+ pricenew +' $</p>'+
            '</div>';
    }
    function makeExOrder(name, file, formFactor, workFlow, diameter, matherial, mountingBracket, length, price, number, fullName) {
        let pricenew = ((number*price) <= 1000)? (number*price) : (number*price*0.93);
        result.innerHTML += '<div>' +
            '<label>Full name: <input type=/"text/" name="orderName" value='+fullName+'></label>' +
            '<label>Name: <input required type="text" name="productNameStandart" value='+name+'></label>' +
            '<label>Image: <input required type="file" name="productFileStandart" value='+file+'></label>' +
            '<label>Form factor: ' +
                '<select name="productFormFactorExclusive" id="productFormFactorExclusive">' +
                    '<option>Direct</option>'+
                    '<option>L-shaped</option>'+
                    '<option>Cartridge</option>'+
                    '<option>Ribbed</option>'+
                    '<option>Other</option>'+
                '</select>' +
            '</label>'+
            '<label>Work flow: '+
                '<select name="productWorkFlowExclusive">'+
                    '<option>Air</option>'+
                    '<option>Water</option>'+
                    '<option>Metal</option>'+
                '</select>'+
            '</label>'+
            '<label >Diameter: <input type="number" name="productDiameterExclusive" value="'+diameter+'"></label>'+
            '<label >Matherial:'+
                '<select name="productMatherialExclusive" >'+
                    '<option>Black</option>'+
                    '<option>Stainless steel</option>'+
                    '<option>12X18H10T</option>'+
                '</select>'+
            '</label>'+
            '<label >Mounting bracket:</label>'+
            '<textarea name="productMountingBracketExclusive"  cols="30" rows="10">'+mountingBracket+'</textarea>'+
            '<label >Length flexible conclusions: <input type="number" name="productLengthExclusive" value="'+length+'"></label>'+
            '<label>Number: <input type="number" name="number" value='+number+' onchange="calc(this, price)"></label>'+
            '<p>Price is: '+ pricenew +' $</p>'+
        '</div>';

    }

}

