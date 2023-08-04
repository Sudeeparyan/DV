import { notification } from 'antd';
import Project from '../../Containers/Project/project';

const Notification = (props) => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    console.log("oo");
    api.open({
      message: props.types,
      description: props.message,
      duration: 0,
    });
  };

  return (
    <>
      {contextHolder}
      <Project openNotification={openNotification}/>
    </>
  );
};

export default Notification;
