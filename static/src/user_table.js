function add(values){
  counter+=1;
  var e = document.getElementById("select_drop");
  var index = e.value;
  var strUser = e.options[e.selectedIndex].text;

  var tr = document.createElement('tr');
  var counter_td = document.createElement('td');
  var counter_text = document.createTextNode(counter);
  counter_td.appendChild(counter_text);
  tr.appendChild(counter_td);


  var name_td = document.createElement('td');
  var name_text = document.createTextNode(values[index-1]["Name"]);
  name_td.appendChild(name_text);
  tr.appendChild(name_td);

  var price_td = document.createElement('td');
  var price_text = document.createTextNode(values[index-1]["Price"]);
  price_td.appendChild(price_text);
  tr.appendChild(price_td);




  tbody.appendChild(tr);

  total += values[index-1]["Price"];
  yearly_total = total * 12;

  var tr_total = document.createElement('tr');
  var total_td = document.createElement('td');
  var total_text = document.createTextNode(total);
  total_td.appendChild(total_text);
  tr_total.appendChild(total_td);

  var yearly_total_td = document.createElement('td');
  var  yearly_total_text= document.createTextNode(yearly_total);
  yearly_total_td.appendChild(yearly_total_text);
  tr_total.appendChild(yearly_total_td);

  tbody_total.appendChild(tr_total);
}
