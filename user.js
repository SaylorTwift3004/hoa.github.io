//Các xử lý kịch bản cho user.html

function generatePermisV1(){
	var permis = new Array();
	permis[0]='---choose---';
	permis[1]='Members';
	permis[2]='Authors';
	permis[3]='Managers';
	permis[4]='Administrators';
	permis[5]='Super Admins';
	
	let opt = '<select class="form-control" name="inputPermis"  disabled >';
	for(var i=0;i<permis.length;i++){
		opt += '<option value = "'+i+'">';
		opt += permis[i];
		opt +='</option>';
	}
	opt += '</select>';
	//Xuất cấu trúc ra màn hình
	document.write(opt);
	
}




function generatePermisV2(){
	var permis = new Array();
	permis[0]='---choose---';
	permis[1]='Members';
	permis[2]='Authors';
	permis[3]='Managers';
	permis[4]='Administrators';
	permis[5]='Super Admins';
	
	let opt = '<select class="form-control" name="inputPermis" >';
	permis.forEach((element,index) => {
		opt += '<option value = "'+index+'">';
		opt += element;
		opt +='</option>';
	});
	opt += '</select>';
	//Xuất cấu trúc ra màn hình
	document.write(opt);	
}




function outOption(element, index, array){
	document.write('<option value = "'+index+'">'+element+'</option>');
}

function generatePermisV3(){
	var permis = new Array();
	permis[0]='---choose---';
	permis[1]='Members';
	permis[2]='Authors';
	permis[3]='Managers';
	permis[4]='Administrators';
	permis[5]='Super Admins';
	
	document.write('<select class="form-control" name="inputPermis">');
	permis.forEach(outOption);
	document.write('</select>');
	//Xuất cấu trúc ra màn hình
	document.write(opt);
}

const generatePermisV4 = () =>{
	var permis = new Array();
	permis[0]='---choose---';
	permis[1]='Members';
	permis[2]='Authors';
	permis[3]='Managers';
	permis[4]='Administrators';
	permis[5]='Super Admins';
	
	let opt = '<select class="form-control" name="inputPermis" onchange="refreshPermis()">';
	permis.forEach((element, index) =>{
		opt += `<option value="${index}">${element}</option>`;
	});
	opt += '</select>';
	document.write(opt);
}


//--------- Roles ---------
const generateRoles = () =>{
	let roles = new Array();
	roles[0] = 'User'; 
	roles[1] = 'Section'; 
	roles[2] = 'Category'; 
	roles[3] = 'Article'; 
	roles[4] = 'Product System'; 
	roles[5] = 'Product Group'; 
	roles[6] = 'Product Category'; 
	roles[7] = 'Product management'; 
	roles[8] = 'Order'; 
	roles[9] = 'Customer'; 
	roles[10] = 'Log'; 
	
	var role = '';	
	roles.forEach((element, index) =>{
		if(index%3 == 0){
			role += '<div class="row py-1">';
		}
		
		role += '<div class="col-sm-4">';
		role += `<input type="checkbox" class="form-check-input" id="chk${index}" name="chks" disabled >`;
		role += `<label for="chk${index}">`;
		role += `${element} management`;
		role += '</label>';
		role += '</div>';
		
		if((index%3 == 2)||(index == roles.length-1)){
			role += '</div>';
		}
	});
	document.write(role);
	
}


//-------Check box---------
function setCheckBox(dis, check){
	//Duyệt các phần tử của form
	var fn = document.getElementById('settings');
	
	for(var i=0;i<fn.elements.length;i++){
		if((fn.elements[i].type=='checkbox')&&
		(fn.elements[i].name=='chks')){
			
			fn.elements[i].disabled = dis;
			fn.elements[i].checked = check;
		}
	}
}

function refreshPermis(){
	var fn = document.getElementById('editting');
	
	//Lấy Pemirssion
	let permis = parseInt(fn.inputPermis.value);
	
	//window.alert(permis);
	
	if((permis==4)||(permis==5)){
		this.setCheckBox(true, true);
	}else if(permis==3){
		this.setCheckBox(false, true);
	}else if(permis==2){
		this.setCheckBox(false, false);
	}else{
		this.setCheckBox(true, false);
	}
	
	document.getElementById('settings').inputPermis.value = permis;
	document.getElementById('settings').inputPermis.disabled = true;
}