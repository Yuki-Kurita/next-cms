interface SearchBoxProps {
  className: string;
}

const SearchBox: React.FC<SearchBoxProps> = props => {
  const { className } = props;
  return (
    <div className={className}>
      <input type="text"/>
    </div>
  )
}

export default SearchBox;