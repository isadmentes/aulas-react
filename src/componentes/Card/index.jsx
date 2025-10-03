export const Card = ({ title, children }) => {
    return (
        <div className="rounded-2xl border p-4 bg-blue-200 shadow-sm">
            <h3 className="font-semibold"> {title} </h3>

            {children}
        </div>
    )
}