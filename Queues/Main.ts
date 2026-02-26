const cola = new Queue<string>();

function agregar() {
  const input = document.getElementById("input") as HTMLInputElement;
  if (!input.value) return;

  cola.enqueue(input.value);
  actualizar();
  input.value = "";
}

function eliminar() {
  alert("Eliminado: " + cola.dequeue());
  actualizar();
}

function verFront() {
  alert("Front: " + cola.front());
}

function verRear() {
  alert("Rear: " + cola.rear());
}

function verSize() {
  alert("Size: " + cola.size());
}

function actualizar() {
  document.getElementById("cola")!.textContent =
    cola.getItems().join(" → ");
}

// hacer funciones visibles al HTML
(window as any).agregar = agregar;
(window as any).eliminar = eliminar;
(window as any).verFront = verFront;
(window as any).verRear = verRear;
(window as any).verSize = verSize;