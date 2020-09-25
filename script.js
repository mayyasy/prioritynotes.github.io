function addTask() {
	let item = document.getElementById('task').value;
	let task = document.getElementById('priorities').value;
	let newItem = document.createElement('li');
	let checkbox = document.createElement('input');
	let newLine = document.createElement('br');
	
	newItem.setAttribute('class','list-item')
	checkbox.setAttribute('type','checkbox');
	checkbox.setAttribute('id','check-box');
	newItem.textContent = item;

	if (task == 'urgent') {
		document.getElementById('urgent').appendChild(newItem);
		document.getElementById('urgent').appendChild(checkbox);
		document.getElementById('urgent').appendChild(newLine);
	} else if (task == 'medium'){
		document.getElementById('medium').appendChild(newItem);
		document.getElementById('medium').appendChild(checkbox);
		document.getElementById('medium').appendChild(newLine);
	}else if (task == 'low') {
		document.getElementById('low').appendChild(newItem);
		document.getElementById('low').appendChild(checkbox);
		document.getElementById('low').appendChild(newLine);
	} 

	document.getElementById('task').value = "";
}

function removeTask() {

	let checked_list = document.querySelectorAll('#check-box');
	let checked_list_item = document.querySelectorAll('.list-item');
	let lineBreaks = document.querySelectorAll('br');

	for (i=0; i < checked_list.length; i++) {
		if (checked_list[i].checked==true) {	  

			let checkbox_elemt = checked_list[i];
			let item = checked_list_item[i];
			let removeBreakLine = lineBreaks[i];
			let parent1 = checkbox_elemt.parentNode;
			let parent2 = item.parentNode;
			let parent3 = removeBreakLine.parentNode;

			parent1.removeChild(checkbox_elemt);
			parent2.removeChild(item);
			parent3.removeChild(removeBreakLine);

		}else {
			continue;
		}
	}
}