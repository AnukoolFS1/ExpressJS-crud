let arr = ['let', 'const','var'];


arr.forEach((e,i)=>{
    if(e === 'let'){
        arr[i] = 'net'
    }
})

console.log(arr)