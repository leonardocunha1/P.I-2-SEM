import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          handler();
        }
      }

      function handleKeyDown(event) {
        if (event.key === "Escape") {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);
      document.addEventListener("keydown", handleKeyDown, listenCapturing);

      return function () {
        document.removeEventListener("click", handleClick, listenCapturing);
        document.removeEventListener("keydown", handleKeyDown, listenCapturing);
      };
    },
    [handler, listenCapturing],
  );

  return ref;
}

/*
* No if está sendo verificado se o click foi fora do modal. Explicando mais detalhadamente: se o ref.current for diferente de null e o click não foi dentro do modal, então o modal é fechado.

* É verificado se o ref.current é diferente de null para evitar erros. Se o ref.current for null, o código ref.current.contains(event.target) vai dar erro. Por isso, é importante verificar se o ref.current é diferente de null antes de fazer a verificação. Porque dará erro? Porque o ref.current é null quando o componente é desmontado. E se o componente for desmontado e o click for fora do modal, o código ref.current.contains(event.target) vai dar erro. Por isso, é importante verificar se o ref.current é diferente de null antes de fazer a verificação.

* o listenCapturing é uma flag que indica se o evento de click deve ser escutado na fase de capturing ou na fase de bubbling. Se listenCapturing for true, o evento de click será escutado na fase de capturing. Se listenCapturing for false, o evento de click será escutado na fase de bubbling. A fase de capturing é a primeira fase do evento de click. A fase de bubbling é a segunda fase do evento de click. A fase de capturing é a fase em que o evento de click é capturado pelo elemento pai do elemento que foi clicado. A fase de bubbling é a fase em que o evento de click é propagado do elemento que foi clicado para o elemento pai do elemento que foi clicado. Se listenCapturing for true, o evento de click será escutado na fase de capturing. Se listenCapturing for false, o evento de click será escutado na fase de bubbling.
*/
