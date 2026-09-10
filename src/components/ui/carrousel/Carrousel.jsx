import styles from './Carrousel.module.scss';
import { useRef } from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

export const Carrousel = ({ data }) => {
  const carrouselRef = useRef(null);

  // 2. Función para manejar el scroll horizontal
  const scroll = (direction) => {
    if (carrouselRef.current) {
      // Define cuántos píxeles se desplazará por cada clic
      const scrollAmount = 360;

      if (direction === 'left') {
        carrouselRef.current.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth',
        });
      } else {
        carrouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button onClick={() => scroll('left')} aria-label="Anterior" className={styles.arrow}>
          <BsArrowLeftShort size={30} />
        </button>

        <button onClick={() => scroll('right')} aria-label="Siguiente" className={styles.arrow}>
          <BsArrowRightShort size={30} />
        </button>
      </div>
      <div className={styles.carrousel} ref={carrouselRef}>
        {data?.map((item, idx) => (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={styles.slide}
          />
        ))}
      </div>
    </div>
  );
};
