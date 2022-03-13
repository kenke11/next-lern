import fs from 'fs/promises';
import path from 'path';

const Home = (props) => {
  const { developers } = props;

  return (
    <div>
      <div>
        <ul>
          {developers.map((developer) => (
              <li key={developer.id}>{developer.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  console.log('re-generating...');
  const filePath = path.join(process.cwd(), 'data', 'employees.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return{
    props: {
      developers: data.developers
    },
    revalidate: 10
  }
}

export default Home;