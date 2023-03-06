import { useTranslation } from 'react-multi-lang'

const withTranslate = WrappedComponent => props => {
    const t = useTranslation()

  return (
    <WrappedComponent
      {...props}
      {...{ t }}
    />
  );
};

export default withTranslate;