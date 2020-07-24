import Link from 'next/link'

interface IconProps {
  // 画像ソース
  src: string;
  // alt属性
  alt: string;
  // クラス名
  className: string;
}

const Icon: React.FC<IconProps> = props => {
  const {src, alt, className} = props;
  return (
    <div className={className}>
      <Link href="/">
        <img className="header-icon" src={src} alt={alt} />
      </Link>
    </div>
  )
}

export default Icon;