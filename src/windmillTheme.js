export default {
  button: {
    danger: {
      base: "text-white bg-red-600 border border-transparent",
      active:
        "active:bg-red-600 hover:bg-red-700 focus:ring focus:ring-red-300",
      disabled: "opacity-50 cursor-not-allowed",
    },
    primary: {
      base: 'text-white bg-orange-400 border border-transparent',
      active: 'active:bg-orange-400 hover:bg-orange-700 focus:ring focus:ring-orange-300',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  modal: {
    base:
      'w-full px-6 py-6 overflow-hidden bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 ',
  },
  modalBody: {
    base: 'mb-6  max-h-96 text-sm text-gray-700 dark:text-gray-400',
  },
  modalFooter: {
    base:
      'flex justify-end flex-col items-center px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50 dark:bg-gray-800',
  },
  input: {
    
    active:
      'focus:border-orange-400 border-gray-300 dark:border-gray-600 focus:ring focus:ring-orange-300 dark:focus:border-gray-600 dark:focus:ring-gray-300 dark:bg-gray-700',
    
  },
  avatar: {
    base: 'relative rounded-md inline-block',
    size: {
      large: 'w-10 h-10',
      regular: 'w-8 h-8',
      small: 'w-6 h-6',
    },
  },
  
};
