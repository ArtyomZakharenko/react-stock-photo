function Photo({ urls, alt_description, likes, user }: any) {
	return (
		<article className='photo'>
			<img src={urls.regular} alt={alt_description} />
			<div className='photo-info'>
				<div>
					<h4>{user.name}</h4>
					<p>{likes} likes</p>
				</div>
				<a href={user.portfolio_url}>
					<img src={user.profile_image.medium} alt={user.name} className='user-img' />
				</a>
			</div>
		</article>
	)
}

export default Photo;
