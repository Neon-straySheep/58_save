import React, { useState } from 'react'
import { useGetMyPosts } from './useGetMyPosts';
import { useGetGoodAmount } from './useGetGoodAmount';

export const useGetGoodToatal = () => {
    const [total, setData] = useState(0);
    const { posts, getMyPosts } = useGetMyPosts();
    const { getGoodAmount } = useGetGoodAmount();

    async function getGoodToatal() {
        await getMyPosts();
        posts.map(async (post) => {
                setData(total + getGoodAmount(post.id));
            }
        );
    }
  return {
    total,
    getGoodToatal,
  };
};