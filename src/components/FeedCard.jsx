const FeedCard = ({user}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        {user?.avatar && (
          <img
            src={user?.avatar}
            alt="Shoes"
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user?.firstName+" "+user?.lastName}</h2>
        <p>{user?.age +', '+ user?.gender}</p>
        <p>{user?.about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  )
}

export default FeedCard