import Image from 'next/image'

interface GuideImageProps {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

export function GuideImage({ src, alt, caption, width, height }: GuideImageProps) {
  return (
    <figure className="my-6">
      <div
        className="overflow-hidden rounded-xl p-2"
        style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)' }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg w-full h-auto"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <figcaption
        className="mt-2 text-center text-sm italic"
        style={{ color: 'var(--text-muted)' }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}
