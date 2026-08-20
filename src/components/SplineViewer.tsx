import { lazy, Suspense } from "react"

const Spline = lazy(() => import("@splinetool/react-spline"))

const SCENE =
  "https://prod.spline.design/RY7uKqpoL3Z5dlQ7/scene.splinecode"

export function SplineViewer() {
  return (
    <div className="relative h-[280px] w-full overflow-hidden desk:h-[340px]">
      <Suspense fallback={null}>
        <Spline
          scene={SCENE}
          style={{ width: "100%", height: "100%" }}
        />
      </Suspense>
    </div>
  )
}
