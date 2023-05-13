import './styles.css'

const InputField = () => {
    return (
        <form className="input flex w-10/12 relative items-center">
            <input
                className='input__box w-full px-5 py-6 rounded-full text-2xl border-none'
                type="text" placeholder="Enter a Todo">
            </input>
            <button className="input_submit" type="submit">Go</button>
        </form>
    )
}

export default InputField