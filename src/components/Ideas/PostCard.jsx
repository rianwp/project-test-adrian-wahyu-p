import formatDate from "../../utils/formatDate"

const PostCard = ({ img, publishedAt, title }) => {
	return (
		<div className="p-4 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full">
			<a href="#">
				<div className="bg-white shadow-md rounded-lg w-full h-full overflow-hidden">
					<img
						src={img}
						alt={title}
						loading="lazy"
						className="w-full aspect-video object-cover"
					/>
					<div className="p-4 flex flex-col gap-1 mt-4">
						<p className="text-gray-400 font-bold">
							{formatDate(new Date(publishedAt))}
						</p>
						<h1 className="line-clamp-3 text-black font-bold font-lg">
							{title}
						</h1>
					</div>
				</div>
			</a>
		</div>
	)
}

export default PostCard
