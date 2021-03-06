type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greeting = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      {props.isLoggedIn ? (
        <p>
          Welcome {props.name}! You have {props.messageCount} new messages
        </p>
      ) : (
        "Welcome Guest"
      )}
    </div>
  );
};

export default Greeting;
