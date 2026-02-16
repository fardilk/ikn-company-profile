import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import type { ServiceDrawerProps } from '@/types/services';

/**
 * ServiceDrawer - Vaul-based drawer for displaying service category details
 *
 * Features:
 * - Slides from bottom (mobile) / right (desktop)
 * - Displays features, technologies, and benefits
 * - Dark theme with gradient accents
 * - Keyboard accessible (Escape to close, focus trap)
 * - CTA buttons for consultation
 */
export function ServiceDrawer({ isOpen, category, onClose }: ServiceDrawerProps) {
  const navigate = useNavigate();

  if (!category) return null;

  const Icon = category.icon;

  const handleViewDetails = () => {
    // Navigate to service detail page using slug
    navigate(`/layanan/${category.slug}`);
    onClose();
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose} dismissible>
      <DrawerContent className="max-h-[90vh] bg-slate-900 border-slate-800 flex flex-col">
        <div className="overflow-y-auto flex-1">
          <DrawerHeader className="relative border-b border-slate-800">
            <DrawerClose asChild>
              <button
                className="absolute right-4 top-4 rounded-sm opacity-70
                           ring-offset-slate-900 transition-opacity
                           hover:opacity-100 focus:outline-none
                           focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                           disabled:pointer-events-none text-white/60 hover:text-white"
                aria-label="Close drawer"
              >
                <X className="h-5 w-5" />
              </button>
            </DrawerClose>

            <div className="pr-12">
              {/* Category icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 mb-3 text-blue-400">
                <Icon className="w-full h-full" />
              </div>

              {/* Category label */}
              <span className="text-sm text-blue-400 font-medium">
                {category.title}
              </span>

              <DrawerTitle className="text-3xl font-bold text-white mt-2">
                {category.title}
              </DrawerTitle>

              <DrawerDescription className="text-white/70 text-lg mt-3">
                {category.fullDescription}
              </DrawerDescription>
            </div>
          </DrawerHeader>

          <div className="p-6 space-y-8">
            {/* Features section */}
            <section>
              <h4 className="text-xl font-semibold text-white mb-4">Fitur Utama</h4>
              <ul className="space-y-3" role="list">
                {category.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technologies section */}
            <section>
              <h4 className="text-xl font-semibold text-white mb-4">Teknologi</h4>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-white
                               border border-slate-700 hover:bg-slate-750
                               transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Benefits section */}
            <section>
              <h4 className="text-xl font-semibold text-white mb-4">Manfaat</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {category.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gradient-to-br
                               from-blue-500/10 to-purple-500/10
                               border border-white/10"
                  >
                    <p className="text-white/90">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <DrawerFooter className="border-t border-slate-800">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white
                         px-4 py-3 rounded-lg font-medium transition-colors
                         flex items-center justify-center gap-2"
              onClick={handleViewDetails}
            >
              Lihat Detail
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="w-full border border-slate-700 text-white/70
                         hover:bg-slate-800 px-4 py-3 rounded-lg
                         font-medium transition-colors"
              onClick={() => {
                window.open('https://wa.me/6287887650480', '_blank');
              }}
            >
              Konsultasi Gratis
            </button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
