import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: '-0.5px',
          fontFamily: 'sans-serif',
        }}
      >
        TD
      </div>
    ),
    { ...size },
  )
}
