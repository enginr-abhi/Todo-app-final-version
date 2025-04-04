const TodoItem2 = ({todoName,tododate}) =>{
  return <div class="row myrow">
  <div class="col-6">{todoName}</div>
  <div class="col-4">{tododate}</div>
  <div class="col-2"><button type="button" class="btn btn-danger myBtn">delete</button></div>
</div>
}
export default TodoItem2;