/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js'
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js'
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js'
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter'
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport'
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave'

class Editor extends ClassicEditor {
}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  Autoformat,
  BlockQuote,
  Bold,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  Indent,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  PasteFromOffice,
  SourceEditing,
  TextTransformation,
  Underline,
  WordCount,
  Image,
  ImageToolbar,
  ImageCaption,
  ImageStyle,
  ImageResize,
  ImageUpload,
  ImageInsert,
  GeneralHtmlSupport,
  SimpleUploadAdapter,
  Autosave
];

// Editor configuration.
Editor.defaultConfig = {
  fontSize: {
    options: [
      8, 10, 12, 14, 16, 18, 20
    ].map(val => ({
      model: val,
      title: `x${val}`,
      view: {
        name: 'span',
        styles: {
          'font-size': `${val}pt`
        }
      }
    })),
  },
  fontColor: {
    colors: [
      {
        color: 'hsl(0, 0%, 0%)',
        label: 'Black'
      },
      {
        color: 'hsl(0, 0%, 30%)',
        label: 'Dim grey'
      },
      {
        color: 'hsl(0, 0%, 60%)',
        label: 'Grey'
      },
      {
        color: 'hsl(0, 0%, 90%)',
        label: 'Light grey'
      },
      {
        color: 'hsl(0, 0%, 100%)',
        label: 'White',
        hasBorder: true
      },
      {
        color: 'rgb(35,60,132)',
        label: 'Blue LBC'
      },
      {
        color: 'rgb(231, 215, 53)',
        label: 'Yellow AF'
      },
      {
        color: 'rgb(156, 0, 6)',
        label: 'red LBC'
      }
    ]
  },
  fontBackgroundColor: {
    colors: [
      {
        color: 'hsl(0, 0%, 0%)',
        label: 'Black'
      },
      {
        color: 'hsl(0, 0%, 30%)',
        label: 'Dim grey'
      },
      {
        color: 'hsl(0, 0%, 60%)',
        label: 'Grey'
      },
      {
        color: 'hsl(0, 0%, 90%)',
        label: 'Light grey'
      },
      {
        color: 'hsl(0, 0%, 100%)',
        label: 'White',
        hasBorder: true
      },
      {
        color: 'rgb(35,60,132)',
        label: 'Blue LBC'
      },
      {
        color: 'rgb(231, 215, 53)',
        label: 'Yellow AF'
      },
      {
        color: 'rgb(156, 0, 6)',
        label: 'red LBC'
      }
    ]
  },
  toolbar: {
    items: [
      'heading',
      '|',
      'sourceEditing',
      'generalHtmlSupport',
      '|',
      'bold',
      'italic',
      'fontSize',
      'fontFamily',
      'fontColor',
      'fontBackgroundColor',
      'underline',
      'alignment',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'outdent',
      'indent',
      '|',
      'blockQuote',
      '|',
      'imageInsert',
      '|',
      'undo',
      'redo',
    ]
  },
  image: {
    toolbar: [
      'imageStyle:alignLeft',
      "imageStyle:alignCenter",
      'imageStyle:alignRight',
      'toggleImageCaption',
      'imageTextAlternative',
      'linkImage'
    ]
  },
  htmlSupport: {
    allow: [
      {
        name: /.*/,
        attributes: true,
        classes: true,
        styles: true
      }
    ],
    disallow: []
  },
  simpleUpload: {
    name: 'image',
    uploadUrl: 'http://localhost:3001/api/v1/articles/upload/image'
  },
  autosave: {
    waitingTime: 2000,
    save(editor) {
      console.log(editor.getData())
    }
  },
  language: 'fr'
};

export default Editor;
