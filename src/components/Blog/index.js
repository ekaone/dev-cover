/* eslint-disable camelcase */
import { Post } from '@components';
import { NumberedHeading } from '@common/styles';
import { useUserDataContext } from '@contexts/user-data';
import { get } from 'lodash';
import { ShowMoreButton, ButtonContainer } from './styles';

const Blog = () => {
  const { user } = useUserDataContext();
  const renderPosts = () => (
    <>
      {user?.posts?.hashnode &&
        user?.posts?.hashnode.map((post) => {
          const {
            _id,
            title,
            slug,
            totalReactions,
            brief,
            replyCount,
            responseCount,
            coverImage,
            dateFeatured,
            dateAdded,
          } = post;
          const url = user?.hashnode?.publicationDomain
            ? `http://${user?.hashnode?.publicationDomain}/${slug}`
            : '#';
          return (
            <Post
              key={_id}
              provider="hashnode"
              title={title}
              url={url}
              likes={totalReactions}
              comments={replyCount + responseCount}
              description={brief}
              cover={coverImage}
              featured={dateFeatured !== null}
              createdAt={dateAdded}
            />
          );
        })}
      {user?.posts?.devto &&
        user?.posts?.devto.map((post) => {
          const {
            id,
            title,
            url,
            positive_reactions_count,
            description,
            published_timestamp,
            comments_count,
            cover_image,
          } = post;

          return (
            <Post
              key={id}
              provider="hashnode"
              title={title}
              url={url}
              likes={positive_reactions_count}
              comments={comments_count}
              description={description}
              cover={cover_image}
              createdAt={published_timestamp}
            />
          );
        })}
    </>
  );

  const getBlogDomain = () => {
    if (user.hasHashnode && user?.hashnode?.publicationDomain) {
      return `https://${user.hashnode.publicationDomain}`;
    }
    if (user.hasHashnode) {
      return `https://hashnode.com/@${get(user, 'username')}`;
    }
    if (user.hasDevto) {
      return `https://dev.to/${user.username}`;
    }
    return '#';
  };

  return (
    <section id="blog">
      <NumberedHeading>Latest Blogs</NumberedHeading>
      <div>{user.posts && renderPosts()}</div>
      <ButtonContainer>
        <ShowMoreButton href={getBlogDomain()} target="_blank" rel="noreferrer">
          Show More
        </ShowMoreButton>
      </ButtonContainer>
    </section>
  );
};

export default Blog;