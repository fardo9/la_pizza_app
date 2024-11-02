import { cn } from '@/shared/lib/utils'
import { IProps } from '@/app/types'

export const Container: React.FC<React.PropsWithChildren<IProps>> = ({
  className,
  children
}) => {
  return (
    <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
  )
}
