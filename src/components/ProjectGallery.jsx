import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function ProjectGallery({ media }) {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = Math.abs(page % media.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  if (!media || media.length === 0) {
      return (
          <div className="flex flex-col items-center justify-center py-12 px-4 border-2 border-dashed border-neutral-800 rounded-xl bg-neutral-900/30">
              <p className="text-neutral-500 text-center">Nenhuma imagem adicionada ainda.</p>
          </div>
      )
  }

  const currentMedia = media[imageIndex];
  const isVideo = typeof currentMedia === 'string' && currentMedia.endsWith('.mp4');

  return (
    <div className="relative w-full h-[300px] md:h-[500px] flex justify-center items-center overflow-hidden rounded-xl bg-black/50 border border-neutral-800">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          src={currentMedia}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute w-full h-full flex items-center justify-center"
        >
             {isVideo ? (
                <video 
                    src={currentMedia} 
                    controls 
                    className="w-full h-full object-contain"
                />
            ) : (
                <img 
                    src={currentMedia} 
                    alt="Project media" 
                    className="w-full h-full object-contain pointer-events-none" // pointer-events-none to prevent dragging image ghost
                />
            )}
        </motion.div>
      </AnimatePresence>
      
      {media.length > 1 && (
        <>
            <div className="next" onClick={() => paginate(1)}>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-10">
                    <FaChevronRight />
                </button>
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
                <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors z-10">
                    <FaChevronLeft />
                </button>
            </div>
        </>
      )}
      
      {/* Dots indicator */}
      {media.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {media.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                        const direction = idx > imageIndex ? 1 : -1;
                        setPage([page + (idx - imageIndex), direction]);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${idx === imageIndex ? "bg-white w-4" : "bg-white/50"}`}
                  />
              ))}
          </div>
      )}
    </div>
  );
}

export default ProjectGallery;
