import { useState } from "react";
import { Editor } from "novel";
import type { SyntheticEvent } from "react";
import type { Editor as TipTapEditor } from "@tiptap/core";

const FormNewPost = () => {
  const [content, setContent] = useState<string>();

  async function handleOnSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    return;
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <p className="rounded bg-red-100 dark:bg-red-900 text-sm text-center py-2 mb-6">
        Creating a new post is disabled for this demo.
      </p>
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          className="block w-full text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          name="title"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3" htmlFor="slug">
          Slug
        </label>
        <input
          id="slug"
          className="block w-full text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          name="slug"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3">Content</label>
        <Editor
          disableLocalStorage={true}
          defaultValue={{
            type: "doc",
            content: [],
          }}
          onDebouncedUpdate={(editor?: TipTapEditor) => {
            setContent(editor?.getHTML());
          }}
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3" htmlFor="excerpt">
          Excerpt
        </label>
        <input
          id="excerpt"
          className="block w-full text-slate-900 border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          type="text"
          name="excerpt"
        />
      </div>

      <button className="inline-block rounded py-2.5 px-6 text-sm font-bold uppercase text-white bg-slate-600 hover:bg-slate-500 dark:bg-slate-500 dark:hover:bg-slate-400">
        Submit
      </button>
    </form>
  );
};

export default FormNewPost;
