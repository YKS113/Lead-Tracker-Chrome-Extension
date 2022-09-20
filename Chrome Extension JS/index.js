let myLeads= []
// localStorage.clear()
let leadsFromStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromStorage){ 
    //  this is to check if leadsFromStorage is truthy/non-empty
    myLeads=leadsFromStorage
    renderLeads()
}

let savein= document.getElementById("savein")
savein.addEventListener("click" , function(){
    document.getElementById("history").textContent=null
    let inputEl= document.getElementById("input").value
    myLeads.push(inputEl)
    document.getElementById("input").value=null
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    })
// renderLeads function definition
function renderLeads(){
    let j= myLeads.length
    for(let i=0 ; i<j ; i++){
        let li= document.createElement("li")
        let a = document.createElement("a")
        a.textContent= myLeads[i]
        document.getElementById("history").appendChild(li).appendChild(a).href="#"
        document.getElementById("input").value= ""
        
    }  
}
    



let del=document.getElementById("del")
del.addEventListener("click" , function(){
   myLeads.pop()
   localStorage.setItem("myLeads" , JSON.stringify(myLeads))
   document.getElementById("history").textContent=null
   renderLeads()
})


let saveTab=document.getElementById("saveTab")
saveTab.addEventListener("click" , function(){
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
   myLeads.push(tabs[0].url)
   localStorage.setItem("myLeads" , JSON.stringify(myLeads))
   document.getElementById("history").textContent=null
   renderLeads()
   })
     
})


// let saveTab= document.getElementById("saveTab")
// saveTab.addEventListener("click" , function(){
//     console.log("savedTab")
// })

// let del= document.getElementById("del")
// del.addEventListener("click" , function(){
//     console.log("delted")
// })