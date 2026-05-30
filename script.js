let number = document.getElementById("ip")
let btn = document.getElementById("btn")
let output = document.getElementById("output")

btn.addEventListener('click',start);

function start(){

let promise1=new Promise((resolve,reject)=>{
	if(number.value){
		resolve(Number(number.value));
	}else{
		alert('Enter a number')
	}
	
})

 
promise1.then((res)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let op=res;
			output.innerText=`Result: ${op}`
			resolve(op);
		},2000);
	})
}).then((op)=>{
  return new Promise((resolve,reject)=>{
         op=op*2;
		setTimeout(()=>{
			output.innerText=`Result: ${op}`
			resolve(op);
		},1000);
	})
}).then((op)=>{
  return new Promise((resolve,reject)=>{
	 op=op-3
		setTimeout(()=>{
			output.innerText=`Result: ${op}`
			resolve(op);
		},1000);
	})
}).then((op)=>{
  return new Promise((resolve,reject)=>{
	 op=op/2
		setTimeout(()=>{
			output.innerText=`Result: ${op}`
			resolve(op)
		},1000);
	})
}).then((op)=>{
  return new Promise((resolve,reject)=>{
	    op=op+10
		console.log(op)
		setTimeout(()=>{
			output.innerText=`Result: ${op}`
			resolve(op)
		},1000);
	})
})
};
