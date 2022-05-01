import Bubble from './Bubble'

export const createBubbles = (p5, products, bubbles, video) => {
  for (let p of products) {
    p.src = p5.loadImage(p.src)
    let bubble = new Bubble(
      p?.x,
      p?.y,
      p?.width,
      p?.height,
      p?.type === 'video' ? video : p?.src,
      p?.parallex,
      p?.id,
      p5,
      p?.url,
      p?.type,
    )
    bubbles.push(bubble)
  }

  return {
    video,
    bubbles,
  }
}
