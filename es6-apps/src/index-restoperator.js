//i want to design function which must take more args, which i dont know in advance
// variable args -  var...args

//rest operator
function  log(...message){
    console.log(message)
}
log('app')
log('app', 'error')
log('app', 'error', 'in myfile.txt')