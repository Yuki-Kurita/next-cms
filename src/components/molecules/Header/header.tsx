import Icon from '../../atoms/Icon/icon'

interface HeaderProps {
  // 画像ソース
  src: string;
  // alt属性
  alt: string;
}

const Header: React.FC<HeaderProps> = props => {
  const {src, alt} = props;
  return (
    <div>
      <Icon
        src={src}
        alt={alt}
      />
    </div>
  )
}

export default Icon;