import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const activitiesItems = [
  { key: 'like', text: '32', icon: 'thumb-up', method: 'likePodcast' },
  { key: 'dislike', text: '12', icon: 'thumb-down', method: 'dislikePodcast' },
  {
    key: 'download',
    text: 'Download',
    icon: 'file-download',
    method: 'downloadPodcast'
  },
  {
    key: 'bookmark',
    text: 'Bookmark',
    icon: 'bookmark-border',
    method: 'bookmarkPodcast'
  },
  { key: 'share', text: 'Share', icon: 'share', mathod: 'sharePodcast' }
];

// TODO: write mathods which executes the activities and changes style of btn

export default PodcastFooter = ({}) => {
  return (
    <Container>
      <DescriptionHeader>DESCRIPTION</DescriptionHeader>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
        tincidunt justo. Cras sit amet ex ut odio congue blandit id non tortor.
        Morbi dolor erat, molestie ac accumsan vitae, tincidunt sit amet risus.
        Phasellus eget hendrerit tellus. Cras eu vestibulum sem.Cras sit amet
        metus vel massa aliquet gravida sed ultrices lacus. Aliquam sed quam
        est. Integer dapibus eleifend urna, in cursus lectus sagittis sit amet.
        Phasellus congue ut felis vel aliquam. Donec id fringilla eros. Mauris
        dictum augue sed libero mollis, a blandit magna aliquam. Maecenas arcu
        urna, aliquam eu magna ac, accumsan egestas turpis.
      </Description>
      <Activities>
        {activitiesItems.map(item => (
          <ActivityItemBtn key={'item__' + item.key}>
            <Icon
              name={item.icon}
              size={28}
              color={'#252525'}
              key={'icon__' + item.key}
            />
            <ActivityText key={'text__' + item.key}>{item.text}</ActivityText>
          </ActivityItemBtn>
        ))}
      </Activities>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  padding: 80px 32px 50px 32px;
`;
const DescriptionHeader = styled.Text`
  color: ${({ theme }) => theme.color.main};
  font-family: 'Roboto-medium';
  font-size: 16px;
  margin-bottom: 10px;
`;
const Description = styled.Text`
  color: ${({ theme }) => theme.color.black};
  font-family: 'Roboto-regular';
  font-size: 14px;
`;
const Activities = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
`;
const ActivityItemBtn = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 70px;
`;
const ActivityText = styled.Text`
  color: ${({ theme }) => theme.color.black};
  font-family: 'Roboto-regular';
  font-size: 12px;
  margin-top: 5px;
`;
