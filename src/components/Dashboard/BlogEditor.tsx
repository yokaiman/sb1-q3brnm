import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Save, Image, Link, List, Bold, Italic, Code } from 'lucide-react';

interface BlogEditorProps {
  initialContent?: string;
  onSave?: (content: string) => void;
}

export default function BlogEditor({ initialContent = '', onSave }: BlogEditorProps) {
  const [title, setTitle] = useState('');
  
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
  });

  const handleSave = () => {
    if (editor && onSave) {
      onSave(editor.getHTML());
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-900">
      <div className="border-b border-gray-800 p-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          className="w-full bg-gray-800 text-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="border-b border-gray-800 p-2 flex space-x-2">
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={`p-2 rounded ${
            editor?.isActive('bold') ? 'bg-gray-700' : 'hover:bg-gray-800'
          }`}
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleItalic().run()}
          className={`p-2 rounded ${
            editor?.isActive('italic') ? 'bg-gray-700' : 'hover:bg-gray-800'
          }`}
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleCode().run()}
          className={`p-2 rounded ${
            editor?.isActive('code') ? 'bg-gray-700' : 'hover:bg-gray-800'
          }`}
        >
          <Code className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded ${
            editor?.isActive('bulletList') ? 'bg-gray-700' : 'hover:bg-gray-800'
          }`}
        >
          <List className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <EditorContent
          editor={editor}
          className="min-h-[500px] bg-gray-800 rounded-lg p-4 text-gray-100"
        />
      </div>

      <div className="border-t border-gray-800 p-4 flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Save className="w-5 h-5" />
          <span>Save Draft</span>
        </button>
      </div>
    </div>
  );
}