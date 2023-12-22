const Container = ({ children, className }) => {
	return (
		<div className={`mx-auto md:w-10/12 w-full px-5 ${className}`}>
			{children}
		</div>
	)
}

export default Container
