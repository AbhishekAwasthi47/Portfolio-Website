import React from 'react'
import { createRoot } from 'react-dom/client'
import { SplineScene } from './components/ui/splite'

const mountNode = document.getElementById('react-root')

if (mountNode) {
    const root = createRoot(mountNode)
    root.render(
        <React.StrictMode>
            <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full object-cover opacity-80"
            />
        </React.StrictMode>
    )
}
