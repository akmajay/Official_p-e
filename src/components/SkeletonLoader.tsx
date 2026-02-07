
import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonLoaderProps {
  type?: 'hero' | 'product' | 'about' | 'contact' | 'location';
}

const SkeletonLoader = ({ type = 'hero' }: SkeletonLoaderProps) => {
  const renderHeroSkeleton = () => (
    <div className="min-h-screen flex items-center py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Skeleton className="h-8 w-48 rounded-full" />
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-4/5" />
              <Skeleton className="h-16 w-3/4" />
            </div>
            <Skeleton className="h-20 w-full" />
            <div className="flex space-x-4">
              <Skeleton className="h-12 w-32 rounded-2xl" />
              <Skeleton className="h-12 w-32 rounded-2xl" />
            </div>
          </div>
          <div className="relative">
            <Skeleton className="w-full h-96 rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderProductSkeleton = () => (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="glass p-6 rounded-2xl">
              <Skeleton className="w-full h-48 rounded-xl mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAboutSkeleton = () => (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Skeleton className="h-12 w-64" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-start space-x-4">
                  <Skeleton className="w-12 h-12 rounded-2xl flex-shrink-0" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-1/2 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Skeleton className="h-56 w-full rounded-2xl" />
              <Skeleton className="h-56 w-full rounded-2xl" />
            </div>
            <Skeleton className="h-40 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactSkeleton = () => (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-48 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-12 w-full rounded-2xl" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-40 w-full rounded-2xl" />
            <Skeleton className="h-32 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderLocationSkeleton = () => (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-56 mx-auto mb-4" />
          <Skeleton className="h-6 w-80 mx-auto" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <Skeleton className="w-8 h-8 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-1/3 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <Skeleton className="h-96 w-full rounded-2xl" />
            <Skeleton className="h-32 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );

  switch (type) {
    case 'hero':
      return renderHeroSkeleton();
    case 'product':
      return renderProductSkeleton();
    case 'about':
      return renderAboutSkeleton();
    case 'contact':
      return renderContactSkeleton();
    case 'location':
      return renderLocationSkeleton();
    default:
      return renderHeroSkeleton();
  }
};

export default SkeletonLoader;
