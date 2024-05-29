import * as Form from '@radix-ui/react-form'

export const CreatePage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Добавление памятника</h1>
      <Form.Root
        className="w-full"
        onSubmit={(event) => {
          event.preventDefault()
          const data = Object.fromEntries(new FormData(event.currentTarget))
          console.log(data)
        }}
      >
        <Form.Field className="grid mt-4" name="title">
          <Form.Label className="font-medium">Название</Form.Label>
          <Form.Control asChild>
            <input
              className="apearance-none p-2 outline-none bg-neutral-200"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mt-4" name="description">
          <Form.Label className="font-medium">Описание</Form.Label>
          <Form.Control asChild>
            <textarea
              className="appearance-none p-2 outline-none resize-none bg-neutral-200 h-32"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mt-4" name="images">
          <Form.Label className="font-medium">Фотографии</Form.Label>
          <Form.Control asChild>
            <input
              type="file"
              multiple
              className="appearance-none p-2 outline-none resize-none bg-neutral-200 w-fit"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mt-4" name="model">
          <Form.Label className="font-medium">Модель</Form.Label>
          <Form.Control asChild>
            <input
              type="file"
              className="appearance-none p-2 outline-none resize-none bg-neutral-200 w-fit"
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="bg-emerald-600 font-medium mt-4 text-neutral-100 p-2">
            Добавить
          </button>
        </Form.Submit>
      </Form.Root>
    </main>
  )
}
