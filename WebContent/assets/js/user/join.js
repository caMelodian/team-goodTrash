/*console.log("안녕");*/

const button = document.getElementById('submitBtn');

button.disabled = true;

function checkCheck(){
	if(checkEmailAfter==true && checkPasswordAfter==true && checkNicknameAfter==true){
		button.disabled = false;
	}
}




/* 가입 이메일 중복 확인*/ 
$("#userEmail").on("blur",function(){
	checkEmail($(this).val());
});

/* 이메일 중복이 확인 됐을때 true 로 변경하여 버틑 활성화*/
let checkEmailAfter = false;

function checkEmail(userEmail) {
	
	/* 이메일 입력칸에 공백을 입력했을 시 실행 */
	if(!userEmail){
		$("#emailResult").text("이메일을 입력하세요");
		$("#emailResult").css("color","red");
		$("#emailResult").css("font-size","10px");
		return;
	}
	
	$.ajax({
		url : "/user/checkEmail.user",
		data : {"userEmail":userEmail},
		success : function(result){
			let message , color ;
			if(result =="true"){
				message = "사용가능한 아이디 입니다."
				color="blue";
				checkEmailAfter=true;
				console.log(checkEmailAfter);
			}
			else{
				message = "사용 불가능한 아이디 입니다."
				color="red";
				console.log("3,사용 불가능 아이디",result);
			}
			$("#emailResult").css("color", color);
			$("#emailResult").css("font-size","10px");
			$("#emailResult").text(message);
			checkCheck();
			
		},
		error : function(a,b,c){
			console.log(a,b,c);
		}
	})
}

/* 가입 닉네임 중복 확인*/

$("#userNickname").on("blur",function(){
	checkNickname($(this).val());
});

/* 이메일 중복이 확인 됐을때 true 로 변경하여 버틑 활성화*/
let checkNicknameAfter = false;

function checkNickname(userNickname){
		/* 닉네임 입력칸에 공백을 입력했을 시 실행 */
	if(!userNickname){
		$("#nicknameResult").text("닉네임을 입력하세요");
		$("#nicknameResult").css("color","red");
		$("#nicknameResult").css("font-size","10px");
		return;
	}
	
	$.ajax({
		url : "/user/nicknameCheck.user",
		data : {"userNickname":userNickname},
		success : function(result){
			let message , color ;
			
			if(result =="true"){
				message = "사용가능한 닉네임 입니다."
				color="blue";
				checkNicknameAfter=true;
				console.log(checkNicknameAfter);
			}else{
				message = "사용 불가능한 닉네임 입니다."
				color="red";
				console.log("3,사용 불가능 아이디",result);
			}
			$("#nicknameResult").css("color", color);
			$("#nicknameResult").css("font-size","10px");
			$("#nicknameResult").text(message);
			checkCheck();
			
		},
		error : function(a,b,c){
			console.log(a,b,c);
		}
	})
}
/* 비밀번호 확인 검사*/


$("#password2").on("blur",function(){
	checkPassword($(this).val());
});

/* 비밀번호 확인 됐을때 true 로 변경하여 버틑 활성화*/
let checkPasswordAfter=false;	

function checkPassword(password2){
	var password1 = $("#password1").val();
	if(password2 != password1){
		$("#passwordResult").text("비밀번호를 확인해 주세요");
		$("#passwordResult").css("color","red");
		$("#passwordResult").css("font-size","10px");
	}else{
		$("#passwordResult").text("");
		checkPasswordAfter = true;
		console.log(checkPasswordAfter);
	}
	checkCheck();
}
	
function activeButton(){
	form.submit();
}

/* 체크를 체크하는 function */
function checkCheck(){
	if(checkEmailAfter==true && checkPasswordAfter==true && checkNicknameAfter==true){
		button.disabled = false;
	}
}






 


	

	

	
