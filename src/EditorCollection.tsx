import {
  Paper,
  createStyles,
  SegmentedControl,
  Center,
  Box,
} from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import { useMemo, useState } from "react";
import { Eye } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  container: {
    width: 800,
  },
  menus: {
    width: "100%",
    borderRadius: "4px 4px 0 0"
  },
  editor: {
    width: "100%",
    borderRadius: "0 0 4px 4px",
    padding: "4px",
    border: "none"
  },
}));

const initialValue = `<h2 class="ql-align-center">Welcome to Mantine Rich Text Editor</h2><p>RichTextEditor component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. RichTextEditor is based on <a href="https://quilljs.com/" rel="noopener noreferrer" target="_blank">Quill.js</a> via <a href="https://github.com/zenoamaro/react-quill" rel="noopener noreferrer" target="_blank">react-quill</a> and supports most of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strikethrough</s></li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Image and video embeds</li><li>Text align&nbsp;</li></ul><p>But RichTextEditor is not just a wrapper for <a href="https://github.com/zenoamaro/react-quill" rel="noopener noreferrer" target="_blank">react-quill</a>, it comes with a bunch of extra features:</p><ol><li>Seamless integration with your Mantine theme – component will use font-family, font-sizes, spacing and primary color from your custom theme, defined in MantineProvider</li><li>Dark theme support – like any other Mantine component, RichTextEditor supports dark theme out of the box</li><li>Images uploading – specify upload function (S3 or anywhere else) that will be triggered when user pastes or drops image to editor</li><li>Sticky toolbar will be visible when user scrolls</li></ol><h2 class="ql-align-center">Welcome to Mantine Rich Text Editor</h2><p>RichTextEditor component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. RichTextEditor is based on <a href="https://quilljs.com/" rel="noopener noreferrer" target="_blank">Quill.js</a> via <a href="https://github.com/zenoamaro/react-quill" rel="noopener noreferrer" target="_blank">react-quill</a> and supports most of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strikethrough</s></li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Image and video embeds</li><li>Text align&nbsp;</li></ul><p>But RichTextEditor is not just a wrapper for <a href="https://github.com/zenoamaro/react-quill" rel="noopener noreferrer" target="_blank">react-quill</a>, it comes with a bunch of extra features:</p><ol><li>Seamless integration with your Mantine theme – component will use font-family, font-sizes, spacing and primary color from your custom theme, defined in MantineProvider</li><li>Dark theme support – like any other Mantine component, RichTextEditor supports dark theme out of the box</li><li>Images uploading – specify upload function (S3 or anywhere else) that will be triggered when user pastes or drops image to editor</li><li>Sticky toolbar will be visible when user scrolls</li></ol>`;

const people = [
  { id: 1, value: "Bill Horsefighter" },
  { id: 2, value: "Amanda Hijacker" },
  { id: 3, value: "Leo Summerhalter" },
  { id: 4, value: "Jane Sinkspitter" },
];

function EditorCollection() {
  const [value, setValue] = useState("react");
  const [text, setText] = useState(initialValue);
  const { classes } = useStyles();

  const mentions = useMemo(
    () => ({
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ["@"],
      source: (
        searchTerm: string,
        renderList: (arg0: { id: number; value: string }[]) => void
      ) => {
        const includesSearchTerm = people.filter((item) =>
          item.value.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderList(includesSearchTerm);
      },
    }),
    []
  );

  return (
    <Paper className={classes.container}>
      <SegmentedControl
        value={value}
        onChange={setValue}
        color="blue"
        data={[
          {
            label: (
              <Center py={5}>
                <Eye size={16} />
                <Box ml={10}>Discussion</Box>
              </Center>
            ),
            value: "discussion",
          },
          {
            label: (
              <Center py={5}>
                <Eye size={16} />
                <Box ml={10}>AMA</Box>
              </Center>
            ),
            value: "ama",
          },
          {
            label: (
              <Center py={5}>
                <Eye size={16} />
                <Box ml={10}>Poll</Box>
              </Center>
            ),
            value: "poll",
          },
          {
            label: (
              <Center py={5}>
                <Eye size={16} />
                <Box ml={10}>Drop</Box>
              </Center>
            ),
            value: "drop",
          },
        ]}
        className={classes.menus}
      />
      <RichTextEditor
        value={text}
        onChange={setText}
        className={classes.editor}
        mentions={mentions}
        // controls={[
        //   ["bold", "italic", "underline", "link", "image"],
        //   ["unorderedList", "h1", "h2", "h3"],
        //   ["sup", "sub"],
        //   ["alignLeft", "alignCenter", "alignRight"],
        // ]}
      />
    </Paper>
  );
}

export default EditorCollection;
