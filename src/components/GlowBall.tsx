interface GlowBallProps {
    size: number;
    color: string;
    className?: string;
    blur?: string;
    opacity?: string;
}

const GlowBall = ({
                      size,
                      color,
                      className = "",
                      blur = "blur-[200px]",
                      opacity = "opacity-70",
                  }: GlowBallProps) => {
    return (
        <div
            className={`absolute rounded-full ${blur} ${opacity} ${color} ${className}`}
            style={{ width: size, height: size }}
        />
    );
};


export default GlowBall;
