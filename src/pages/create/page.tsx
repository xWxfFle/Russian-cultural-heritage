import * as Form from '@radix-ui/react-form'
import { Link } from 'react-router-dom'
import { createFacility } from '@/shared/api'

const isFileInput = (input: HTMLInputElement) => input.type === 'file'

export const CreatePage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Добавление памятника</h1>
      <Form.Root
        className="w-full"
        onSubmit={(event) => {
          event.preventDefault()
          const formData = new FormData()
          Array.from(event.currentTarget.elements).forEach((element) => {
            const input = element as HTMLInputElement
            if (isFileInput(input)) {
              Array.from(input.files ?? []).forEach((file) => {
                if (file.size > 0) {
                  formData.append(input.name, file)
                }
              })
            } else if (input.value.length > 0)
              formData.append(input.name, input.value)
          })
          createFacility(formData).then(() => window.location.reload())
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
              className="appearance-none p-2 outline-none bg-neutral-200 w-full"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mt-4" name="model">
          <Form.Label className="font-medium">Модель</Form.Label>
          <Form.Control asChild>
            <input
              type="file"
              className="appearance-none p-2 outline-none bg-neutral-200 w-full"
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mt-4" name="editor_key">
          <Form.Label className="font-medium">Ключ</Form.Label>
          <Form.Control asChild>
            <input
              className="apearance-none p-2 outline-none bg-neutral-200"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className="bg-emerald-600 font-medium my-4 text-neutral-100 p-2 w-full">
            Добавить
          </button>
        </Form.Submit>
      </Form.Root>
      <Link to="/" className="text-emerald-600 font-medium">
        На главную
      </Link>
    </main>
  )
}
