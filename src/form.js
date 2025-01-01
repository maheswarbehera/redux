import { useForm } from "react-hook-form"


export default function Form() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()


//   const onSubmit = (data) => console.log(data)


//   console.log(watch("example")) // watch input value by passing the name of it


//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>


//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}


//       <input type="submit" />
//     </form>
//   )



const { register, handleSubmit } = useForm()
const onSubmit = (data) => console.log(data)

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("firstName")} />

    <br></br>
    <select {...register("gender")}>
      <option value="female">female</option>
      <option value="male">male</option>
      <option value="other">other</option>
    </select>
    <input type="submit" />
  </form>
)
}