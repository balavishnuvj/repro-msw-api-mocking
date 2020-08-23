import React from "react";
import { savePost } from "./api";

function Editor({ user }) {
  const [isSaving, setIsSaving] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const { title, content, tags } = e.target.elements;
    const newPost = {
      title: title.value,
      content: content.value,
      tags: tags.value.split(",").map((t) => t.trim()), // comment this line. To break the test
      authorId: user.id,
    };
    setIsSaving(true);
    try {
      await savePost(newPost);
      setSuccess(true);
    } catch (error) {
        console.error(error)
    }
  }
  if (success) {
      return <div>Success</div>
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input id="title-input" name="title" />

      <label htmlFor="content-input">Content</label>
      <textarea id="content-input" name="content" />

      <label htmlFor="tags-input">Tags</label>
      <input id="tags-input" name="tags" />

      <button type="submit" disabled={isSaving}>
        Submit
      </button>
    </form>
  );
}

export { Editor };
