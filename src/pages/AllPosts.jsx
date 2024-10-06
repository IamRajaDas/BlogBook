import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';
import { useSelector } from 'react-redux';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    // Fetch posts when the component mounts
    const fetchPosts = async () => {
      try {
        const posts = await appwriteService.getPosts();
        if (posts) {
          setPosts(posts.documents);
        }
      } catch (error) {
        console.error('Failed to fetch posts', error);
      }
    };

    fetchPosts();
  }, [userData]);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            const isAuthor = post && userData ? post.userId === userData.$id : false;
            return (
              isAuthor && (
                <div key={post.$id} className="p-2 w-1/4">
                  <PostCard {...post} />
                </div>
              )
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;