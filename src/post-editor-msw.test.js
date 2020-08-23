import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { Editor } from "./post-editor";
import * as apis from "./api";

import { rest } from "msw";

import { setupServer } from "msw/node";

const server = setupServer(
  rest.post("/submit/", (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
      })
    );
  })
);

beforeAll(() => {
  server.listen({ onUnhandledRequest: "warn" });
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  jest.clearAllMocks();
});

test("renders a form with title, content, tags, and a submit button", async () => {
  const spy = jest.spyOn(apis, "savePost");
  const fakeUser = { id: "user-1" };
  const { getByLabelText, getByText } = render(<Editor user={fakeUser} />);
  const fakePost = {
    title: "Test Title",
    content: "Test content",
    tags: ["tag1", "tag2"],
  };
  getByLabelText(/title/i).value = fakePost.title;
  getByLabelText(/content/i).value = fakePost.content;
  getByLabelText(/tags/i).value = fakePost.tags.join(", ");
  const submitButton = getByText(/submit/i);

  fireEvent.click(submitButton);

  expect(submitButton).toBeDisabled();
  await waitFor(() => screen.getByText(/success/i));
  // Uncomment this to fix the tests
  // expect(spy).toHaveBeenCalledWith({
  //   ...fakePost,
  //   authorId: fakeUser.id,
  // })
});
