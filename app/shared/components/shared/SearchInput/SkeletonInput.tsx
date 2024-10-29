import React from 'react'

export const SkeletonItem = () => (
  <div className="flex items-center gap-3 w-full px-3 py-2 animate-pulse">
    <div className="rounded-sm h-8 w-8 bg-gray-300" />
    <div className="h-4 w-full bg-gray-300 rounded"></div>
  </div>
)
