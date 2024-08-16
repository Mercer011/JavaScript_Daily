// loadingdata();
// collectingdata();
// approvingData();
// approved();


function loadingdata(){
  return new Promise((resolve,reject)=> {
    setTimeout(()=> {
      console.log("1)Loading data...");
      resolve();
     },4000)
    })
  }
 
function collectingdata(){
  return new Promise((resolve,reject)=> {
  setTimeout(()=> {
  console.log("2)Collecting data...");
  resolve();
},3000)
})
}
function approvingData(){
  return new Promise((resolve,reject)=> {
  setTimeout(()=>{
  console.log("3)Approving data...");
  resolve();
  },2000)
  })
}
function approved(){
  console.log("4)Approved!");
}

// loadingdata(function(){
// collectingdata(function(){
//   approvingData(function(){
//   approved();
// })
// })
// });
loadingdata().then(loadingdata).then(collectingdata).then(approvingData).then(approved);

async function Ex()
{  await loadingdata();
  await collectingdata();
  await approvingData();
  await approved();
}
Ex();