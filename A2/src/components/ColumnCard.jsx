function ColumnCard({feature}) {
    return(<>
    <div className="feature col" key={idx}>
            <div className="feature-icon bg-primary bg-gradient">{feature.icon}</div>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
            <a href="#" className="icon-link">
              Call to action <ChevronRight />
            </a>
          </div>
        </>)
}

export default ColumnCard;