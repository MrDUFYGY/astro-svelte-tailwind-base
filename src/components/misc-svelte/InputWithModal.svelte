<script>
  let showModal = false;
  let inputValue = '';

  function openModal() {
    showModal = true;
  }
  function closeModal() {
    showModal = false;
  }
</script>

<div class="flex flex-col items-center gap-4">
  <input
    class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    type="text"
    placeholder="Escribe algo..."
    bind:value={inputValue}
    on:focus={openModal}
  />

  {#if showModal}
    <div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" on:click={closeModal} aria-label="Cerrar">
          &times;
        </button>
        <h2 class="text-xl font-bold mb-4 text-indigo-600">Modal de Svelte</h2>
        <p class="mb-4">El valor actual del input es:</p>
        <div class="bg-gray-100 rounded p-2 text-gray-800 mb-4">{inputValue}</div>
        <button class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700" on:click={closeModal}>
          Cerrar
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  /* El modal usa Tailwind, pero puedes agregar estilos aquí si necesitas */
</style>
