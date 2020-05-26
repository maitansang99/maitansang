$().ready(function () {
  
 
  
  $("#validateJquery").validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    rules: {
      name: {
        required: true,
        maxlength: 15,
      },
      email: {
        required: true,
        minlength: 8,
      },
      password: {
        minlength: 8,
      },
    },
  });

 
});

$("#login").click(function(){
 
let arr;
let account = new Object();
account.username= $("#name").val();
account.password= $("#password").val();
console.log(account);
//   $.ajax({
//     url: "https://5ecb9da444637c0016d8cc98.mockapi.io/login",
//     contentType: "application/json",
//     dataType: 'json',
//     success: function(result){
//         arr= result;
//     // for (let i=0;i<arr.length;i++){
//     //   if((arr[i].usename == account.username) ){
//     //     $("#success").append("dang nhap thanh cong");
//     //   }
//     // }
//     let check= checkAccount(account,arr);
//     if (check==1) {
//       $("#success").html("dang nhap thanh cong");
//     } else{
//       $("#success").html("dang nhap that bai");
//     }
//     }
// })


async function doAjax(account) {
  let result;

  try {
      result = await $.ajax({
          url: "http://localhost:3001/api/login",
          type: 'POST',
          data: account
      });
      console.log(result);
      $("#success").html(result.message);
      return result;
  } catch (error) {
      console.error(error);
      $("#success").html("Login fail");
  }
}
doAjax(account);

  // $.ajax({
  //   url : "http://localhost:3001/api/login",
  //   type : "post", 
  //   data : { 
  //       "username": account.username,
  //       "password": account.password      
  //   },
  //   success : function (r){
  //       console.log(r);
  //       $('#success').html(r.message);
  //   },
  //   error: function(err){
  //     $('#success').html(err.responseJSON.message);
      
  //   }
  // });

// const checkAccount = (account, arr) =>{
//   let check=0;
//   for (let i=0;i<arr.length;i++){
//     if((arr[i].usename == account.username) && (arr[i].password == account.password) ){
//       check=1;
//     }
//   }
//   return check;
// }
});


function showSlide(slideNum) {
  let $preSlides = $("#oc-transform");
  let element = document.querySelector(".oc-slide-item");

  if (slideNum === 1) {
    $preSlides.css({
      "transition-duration": "1s",
      transform: "translateX(-50%)",
    });
    setTimeout(() => {
      console.log(element);
      $preSlides.css({
        "transition-duration": "0s",
        transform: "translateX(0%)",
      });
      $preSlides.remove(element);
	  $preSlides.append(element);
	  
	}, 1000);
	console.log(`translateX=0%`);
	console.log($preSlides.css("transform"));
  } else if (slideNum === -1) {
    if (
      $preSlides.css("transform") === "matrix(1, 0, 0, 1, 0, 0)" ||
      !$preSlides.css("transform")
    ) {
      console.log($preSlides.css("transform"));
      $preSlides.css({
        "transition-duration": "0s",
        transform: "translateX(-50%)",
      });

      $preSlides.remove(element);
      $preSlides.append(element);
    }
    setTimeout(() => {
      $preSlides.css({
        "transition-duration": "1s",
        transform: "translateX(0%)",
      });
    }, 10);
  }
}

// carousel
//   $(document).ready(function(){

//     var interval = window.setInterval(rotateSlides, 3000)

//     function rotateSlides(){
//       var $firstSlide = $('.oc-slide-container').find('div:first');
//       var width = $firstSlide.width();

//       $firstSlide.animate({marginLeft: -width}, 1000, function(){
//         var $lastSlide = $('.oc-slide-container').find('div:last')
//         $lastSlide.after($firstSlide);
//         // $firstSlide.css({marginLeft: 0})
//       })
//     }

//    })

// $('.left').click(previousSlide);
// $('.right').click(nextSlide);
// $('.slide-item').click(nextSlide);

//  function nextSlide (){
// 	var $firstSlide = $('.oc-slide-container').find('div:first');
// 	var width = $firstSlide.width();

// 	$firstSlide.animate({marginLeft: -width/2}, 1000, function(){
// 	  var $lastSlide = $('.oc-slide-container').find('div:last')
// 	  var width = $lastSlide.width();
// 		console.log($lastSlide);
// 		        $lastSlide.after($firstSlide);

// 	  $firstSlide.css({marginLeft: 0})
// 	})
//  }
// //  function previousSlide(){
// // 	var $currentSlide = $('#oc-slide-item').find('div:first');
// // 	var width = $currentSlide.width();
// // 	var $previousSlide = $('#oc-slide-item').find('div:last')
// // 	$previousSlide.css({marginLeft: -width})
// // 	$currentSlide.before($previousSlide);
// // 	$previousSlide.animate({marginLeft: 0}, 1000, function(){
// // 	  interval = window.setInterval(rotateSlides, 3000);
// // 	});
// //   }
