var 
acc=["admin","minh","bla"],
pass=["admin","minh","bla"],
dataName=["admin","minh","bla"],
dataClassStudy=["ibsk1d2","ibsk1d2","bla"],
dataSex=["Male","Male","bla"],
dataEmail=["admin@gmail.com","minh@gmail.com","bla"],
dataNumbePhone=["00990099","0373","737482"],
data=[],
passData,accData,checkPassData,
name,phoneNumber,emai,sex,classStudy,
check,
id;
data.push(dataName,dataSex,dataClassStudy,dataEmail,dataNumbePhone);

// on stats 
$("p").hide();
$(".registration").hide();
$(".newInfomation").hide();
$(".menu").hide();
$(".menuButton").hide();

function showLogin() {
    $(".registration").hide();
    $(".newInfomation").hide();
    $(".menu").hide();
    $(".menuButton").hide();
    $(".login").show();
}

//  Create account !
function gotoFormCreate() {
    clear();
    $(".registration").show();
    $(".buttonLogin").hide();
}

function  createNew() {
    getAccount();
    checkPass=document.getElementById("checkPass").value;
    findDuplicates();
    // check = acc.indexOf(accData).value;
    checkPassData=document.getElementById("checkPass").value;
    if (passData == "" || accData == "" || checkPassData == "") {
        alert("Bạn chưa nhập đủ thông tin")
    }else if( check !== -1 ){
        alert("Tên tài khoản đã tồn tại!")
    } else if (passData !== checkPassData) {    
        alert("Mật khẩu nhập lại không đúng")
    } else {
        takeAcc();
        takePass();
        alert("Bạn đã đăng kí thành công");
        $(".login").hide();
        $(".registration").hide();
        $(".buttonLogin").hide();
        $(".newInfomation").show();
        
    }
}

function getAccount() {
    accData=document.getElementById("acc").value;
    passData=document.getElementById("pass").value;
}

function findDuplicates() {
    check = acc.indexOf(accData);
}

function takeAcc() {
    acc.push(accData);
}

function takePass() {
    pass.push(passData);
}

function addNewInformation() {
    getInformation();
    if (name == "" || phoneNumber == "" || email == "" ) {
        alert(" Bạn nhập thiếu thông tin!")
    } else {
        pushInformation();
        checkAccount();
        showMenuUser();
    }
}

function getInformation() {
        name=document.getElementById("name").value;
        phoneNumber=document.getElementById("phoneNumber").value;
        email=document.getElementById("email").value;
        sex=document.getElementById("sex").value;
        classStudy=document.getElementById("classStudy").value;
}

function pushInformation() {
    checkEmail();
    dataName.push(name);
    dataNumbePhone.push(phoneNumber);
    dataClassStudy.push(classStudy);
    dataSex.push(sex)
    console.log(data);
}

// function getInformation
function checkEmail() {
    let email=document.getElementById("email").value;
    let findGmail =email.indexOf("@gmail.com");
    if (findGmail !== -1) {
        dataEmail.push(email);
    } else {
        email+= "@gmail.com";
        dataEmail.push(email);
        alert("Thêm thông tin thành công!");
        $(".newInfomation").hide();
        showMenuUser();  
    }
} 

// Login acccount     
function login() {
    getAccount();
    if(accData == "" || passData == "") {
        alert("Bạn chưa nhập đủ thông tin")
    }
    checkAccount();

}

function checkAccount() {
    check = acc.indexOf(accData);
    if (check !== -1) {
        if (pass[check] == passData) {
            alert("Bạn đã đăng nhập thành công");
            $(".login").hide();
            showMenuUser();
        } else {
            alert("Mật khẩu không đúng");
        }

        // whyyy??? not a function??
        // checkPass();
    } else {
        alert("Tên đăng nhập không đúng");
    }
}

function checkPass() {
    if (pass[check] == passData) {
        alert("Bạn đã đăng nhập thành công");
        $(".login").hide();
        showMenuUser();
    } else {
        alert("Mật khẩu không đúng");
    }
   
}

// admin menu 
function showMenuUser() {
    id=check;
    $("p").show();
    $(".menu").show();
    $(".menuButton").show();
    $(".newInfomation").hide();
    document.getElementById("nameMenu").value = dataName[id];
    document.getElementById("sexMenu").value = dataSex[id];
    document.getElementById("classMenu").value = dataNumbePhone[id];
    document.getElementById("phoneMenu").value = dataClassStudy[id];
    document.getElementById("emailMenu").value = dataEmail[id];
}

function deleteAcc() {
    if (confirm("Bạn chắc chắn muốn xóa?")) {
        alert("Bạn đã xóa thành công tài khoản: " + dataName[id]);
        acc.splice(id,1);
        pass.splice(id,1);
        dataName.splice(id,1);
        dataSex.splice(id,1);
        dataEmail.splice(id,1);
        dataNumbePhone.splice(id,1);
        dataClassStudy.splice(id,1);
        clear();
        showLogin();
    } else {
        showMenuUser();
    }
}

function clear() {
    document.getElementById("name").value == "";
    document.getElementById("phoneNumber").value == "";
    document.getElementById("email").value == "";
    document.getElementById("sex").value == "";
    document.getElementById("classStudy").value == "";
    document.getElementById("acc").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("checkPass").value = "";
}

function changeInformation() {
    document.getElementsByClassName("menu").disabled = "false";
    if(confirm("Bạn có chắc muốn đổi?")) {
        undateInformation();
    } else {
        showMenuUser();
    }
        
}

function undateInformation() {
    name = document.getElementById("nameMenu").value;
    dataName[id] = name;
    phoneNumber = document.getElementById("phoneMenu").value;
    dataNumbePhone[id] = phoneNumber;
    email = document.getElementById("emailMenu").value;
    dataEmail[id] = email;
    sex = document.getElementById("sexMenu").value;
    dataSex[id] = sex;
    classStudy = document.getElementById("classMenu").value;
    dataClassStudy[id] = classStudy;
}

function logOut() {
    clear();
    showLogin();
}