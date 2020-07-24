import Link from 'next/link'

interface IconProps {
  // 画像ソース
  src: string;
  // alt属性
  alt: string;
}

const Icon: React.FC<IconProps> = props => {
  const {src, alt} = props;
  return (
    <Link href="/">
      <img src={src} alt={alt} />
    </Link>
  )
}

export default Icon;