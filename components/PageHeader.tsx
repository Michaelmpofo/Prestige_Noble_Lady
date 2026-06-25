type Props = {
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  bgImage?: string;
};

export default function PageHeader({ label, title, titleAccent, subtitle, bgImage }: Props) {
  const defaultBg = 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1920';

  return (
    <header className="relative pt-20 overflow-hidden">
      <div className="relative h-64 md:h-80 flex items-end pb-12">
        {/* BG */}
        <img
          src={bgImage || defaultBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="font-inter text-gold text-[10px] font-semibold tracking-[0.35em] uppercase mb-3">
            {label}
          </p>
          <h1 className="font-playfair text-white text-4xl md:text-5xl font-bold leading-tight">
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="text-gold">{titleAccent}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="font-inter text-white/60 text-base mt-3 max-w-xl">{subtitle}</p>
          )}
        </div>
      </div>
    </header>
  );
}
