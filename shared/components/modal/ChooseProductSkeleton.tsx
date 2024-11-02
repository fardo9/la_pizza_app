import { DialogContent } from '../ui'

export const ChooseProductSkeleton: React.FC = () => (
  <DialogContent className="p-4 w-[1060px] max-w-[1060px] min-h-[500px] bg-gray-100 overflow-hidden">
    <div className="animate-pulse space-y-4">
      <div className="h-6 bg-gray-300 rounded w-1/3 mx-auto"></div>
      <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  </DialogContent>
)
