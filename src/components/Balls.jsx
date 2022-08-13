import { useEffect, useRef } from 'react'
import { Engine, Render, Bodies, World,MouseConstraint,Mouse,Runner,Composites,Composite,Common } from 'matter-js'

function Balls (props) {
  const scene = useRef()
  const isPressed = useRef(false)
  const engine = useRef(Engine.create())
  
  useEffect(() => {
    const cw = document.body.clientWidth
    const ch = document.body.clientHeight

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent'
      }
    })

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
    ])
    var stack = Composites.stack(20, 20, 10, 4, 0, 0, function(x, y) {
      if (Common.random() > 0.35) {
          return Bodies.rectangle(x, y, 64, 64, {
              render: {
                  strokeStyle: '#ffffff',
                  
              }
          });
      } else {
          return Bodies.circle(x, y, 46, {
              density: 0.0005,
              frictionAir: 0.06,
              restitution: 0.3,
              friction: 0.01,
              render: {
                  strokeStyle: '#ffffff',
              }
          });
      }
  });
    World.add( engine.current.world, stack)
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
    World.add( engine.current.world, mouse)
    render.mouse = mouse;
    Engine.run(engine.current)
    Render.run(render)

    return () => {
      Render.stop(render)
      World.clear(engine.current.world)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  }, [])

  const handleDown = () => {
    isPressed.current = true
  }

  const handleUp = () => {
    isPressed.current = false
  }

  const handleAddCircle = e => {
    if (isPressed.current) {
      
    }
  }

  return (
    <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
    >
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default Balls