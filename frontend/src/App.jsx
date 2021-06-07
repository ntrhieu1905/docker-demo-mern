import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import services from './api/services';

function App() {
  const { register, handleSubmit } = useForm();
  const [notes, setNotes] = useState(null);
  const handleSaveNote = (data) => {
    console.log(data);
    services.note.addNote(data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  const handleGetNoteList = () => {
    services.note.getNote()
      .then(res => {
        console.log(res);
        setNotes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="row-auto">
          <label className="font-medium text-lg">Note Form</label>
          <form className="m-5" onSubmit={handleSubmit(handleSaveNote)}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/12">
                <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="title">
                  Title
                  </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  name="title"
                  id="title"
                  type="text"
                  {...register('title')}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/12">
                <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="title">
                  Content
                  </label>
              </div>
              <div className="md:w-1/3">
                <textarea
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  name="content" id="content" cols="30" rows="3"
                  {...register('content')}
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm font-medium">Submit</button>
            </div>
          </form>
        </div>

        <div className="row-auto">
          <label className="font-medium text-lg">List Note</label>
          <div className="m-5">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded text-sm font-medium"
              onClick={handleGetNoteList}
            >
              Get list
              </button>
          </div>
          {
            notes &&
            notes.map((note) => (
              <div className="w-full my-4 bg-gray-50" key={note._id}>
                <AccordionNote {...note} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

function AccordionNote({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="shadow-lg">
      <header className="flex justify-between items-center p-5">
        <p className="text-medium font-medium" onClick={() => setExpanded(!expanded)}>{title}</p>
        <button className="btn-icon-plus" onClick={() => setExpanded(!expanded)}>+</button>
      </header>
      {expanded && <p className="items-center px-5 pb-2">{content}</p>}
    </article>
  );
}

export default App;
