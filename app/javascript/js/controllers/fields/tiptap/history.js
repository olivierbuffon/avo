export const undo = (editor) => {
  editor.chain().focus().undo().run();
};

export const redo = (editor) => {
  editor.chain().focus().redo().run();
};
