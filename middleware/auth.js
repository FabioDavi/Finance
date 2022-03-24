/*export default (context) =>{
  console.log(context);
  console.log('entrou no middleware');
}
*/
export default ({redirect}) =>{
  const loggedIn = false;
  if(!loggedIn){
    return redirect('/')
  }
}
