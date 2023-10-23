import "./App.css";

const commentsData = [
  {
    name: "sagar",
    text: "hello ji",
    replies: [
      {
        name: "aman",
        text: "theek h ji",
        replies: [
          {
            name: "pawan",
            text: "or aman kya haal",
            replies: [],
          },
        ],
      },
      {
        name: "isha",
        text: "bdiaaaaa hu sagar",
        replies: [],
      },
    ],
  },
  {
    name: "deepak",
    text: "kya hal h bhaiyo ke",
    replies: [
      {
        name: "sagar",
        text: "bdia bhaia",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { text, name } = data;
  return (
    <div className="flex bg-gray-100 my-4">
      <img
        src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
        alt="user pic"
        className="h-12 w-12"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentsData }) => {
  return commentsData.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList commentsData={comment.replies} />
      </div>
    </div>
  ));
};

const App = () => {
  return (
    <div>
      <CommentList commentsData={commentsData} />
    </div>
  );
};

export default App;
