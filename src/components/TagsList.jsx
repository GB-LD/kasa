function TagsList(props) {
    const tagsList = props.tagsList;

  return (
    <ul className="tag-list">
        {tagsList.map(tag => <li key={tag + 1}>{tag}</li>)}
    </ul>
  )
}

export default TagsList