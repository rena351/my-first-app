import * as React from "react"

const ScrollArea = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`relative overflow-hidden ${className}`}
    {...props}
  >
    <div className="h-full w-full rounded-[inherit] overflow-y-auto scrollbar-thin scrollbar-thumb-aura-gray scrollbar-track-transparent">
      {children}
    </div>
  </div>
))
ScrollArea.displayName = "ScrollArea"

export { ScrollArea }