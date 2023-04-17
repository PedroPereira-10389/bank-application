import './ExploreContainer.css';

interface ContainerProps {
  component: any;
}

const ExploreContainer: React.FC<ContainerProps> = ({ component }) => {
  return (
    <div>
      {component}
    </div>
  );
};

export default ExploreContainer;
