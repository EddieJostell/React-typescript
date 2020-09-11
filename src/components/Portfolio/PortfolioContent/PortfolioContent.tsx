import * as React from 'react';
import '../../Portfolio/Portfolio.less';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { Typography } from '@material-ui/core';
interface Props {
  link: string;
  img: string;
  title: string;
  tech: string;
  text: string;
}

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 304,
    maxWidth: 304,
    margin: 'auto',
    marginTop: 0,
    marginBottom: 20,
  },
  content: {
    padding: 24,
    minHeight: 160,
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    color: '#000',
    letterSpacing: '3px',
    fontWeight: 200,
    fontSize: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    border: '2px solid #fff',
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));

const PortfolioContent = (props: Props) => {
  const { link, img, title, tech, text } = props;
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();

  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} image={img} />
      <Avatar className={cardStyles.avatar} src={img} />
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={title}
          body={tech}
        />
      </CardContent>
      <Box px={2} pb={2} mt={-1}>
        <a href={link} className={cardStyles.cta} target="_blank">
          <Typography className={cardStyles.cta} variant={'overline'}>
            Explore
          </Typography>
        </a>
      </Box>
    </Card>

    /*  <li className="List-card">
      <div className="List-cardImg">
        <a href={link} target="_blank">
          <img src={img} />
        </a>
      </div>
      <div className="List-cardContent">
        <h3 className="title">{title}</h3>
        <span>{tech}</span>
        <a href={link} target="_blank">
          <div>{link}</div>
        </a>
        <p>{text}</p>
      </div>
    </li> */
  );
};

export default PortfolioContent;
