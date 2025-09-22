import Swal from 'sweetalert2'

function App() {
Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
  return (
   <h1 class="text-3xl bg-blue-300 font-bold underline">
    Hello world!
  </h1>
  )
}

export default App
