export default function FormInput({
    id,
    fieldName,
    fieldType,
    placeholder,
    required,
    className = '',
}) {
    return (
        <div className={className}>
            <label
                htmlFor={id}
                className='text-white block mb-2 text-sm font-medium'
            >
                {fieldName}
            </label>
            <input
                id={id}
                type={fieldType}
                placeholder={placeholder}
                className='block bg-gray-200 border border-gray-300 rounded-lg text-gray-900 text-sm w-full p-2.5 placeholder-slate-500'
                required={required}
            />
        </div>
    );
}
