import { Field, FieldList, OptionList } from "@keybr/widget";
import { type ReactNode } from "react";
import { Book } from "./book.ts";

export function BookSelector({
  book,
  onChange,
}: {
  readonly book: Book;
  readonly onChange: (book: Book) => void;
}): ReactNode {
  return (
    <FieldList>
      <Field>Book:</Field>
      <Field>
        <OptionList
          size={24}
          options={Book.ALL.map(({ id, title }) => ({
            value: id,
            name: title,
          }))}
          value={book.id}
          onSelect={(value) => {
            onChange(Book.ALL.get(value));
          }}
        />
      </Field>
    </FieldList>
  );
}
