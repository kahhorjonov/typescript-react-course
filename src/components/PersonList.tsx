type PersonProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonProps) => {
  return (
    <div>
      {props.names.map((name, idx) => {
        return (
          <h2 key={idx}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
