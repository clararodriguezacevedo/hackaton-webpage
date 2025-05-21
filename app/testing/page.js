"use client";
import Footer from "@/components/UI/footer";
import { Button } from "@/components/UI/button";
import { Text } from "@/components/UI/text";
import { ResizableImage } from "@/components/UI/resizableImage";

const ThankYouMessage = () => {
  return (
    <div
      className="flex flex-row w-full items-center justify-between z-90 h-[20%] pt-[4%]"
      height="20%"
      pt="4%"
      zIndex={90}
    >
      <ResizableImage
        src="/images/chars-left.png"
        alt="Decoration"
        widths={["20%", "20%"]}
      ></ResizableImage>
      <div className="flex flex-col justify-center items-center wrap">
        <Text rFontSize={["lg", "xl", "2xl", "3xl", "4xl"]}>
          Muchas gracias por participar
        </Text>
        <Text rFontSize={["lg", "xl", "2xl", "3xl", "4xl"]}>
          ¡Nos vemos el año que viene!
        </Text>
      </div>
      <ResizableImage
        src="/images/chars-right.png"
        alt="Decoration"
        widths={["20%", "20%"]}
      ></ResizableImage>
    </div>
  );
};

const shadTest = () => {
  return (
    <div className="mt-20">
      hola mundo
      <Button
        variant="ingresar"
        rSize={["xs", "sm", "md", "lg", "xl"]}
        rFontSize={["xs", "sm", "md", "lg", "xl"]}
      >
        Iniciar Sesion
      </Button>
      <ThankYouMessage />
    </div>
  );
};

export default shadTest;
