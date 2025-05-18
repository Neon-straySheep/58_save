import React, { useEffect, useState } from 'react'
import { useGetMyPosts } from './useGetMyPosts';
import { useGetGoodAmount } from './useGetGoodAmount';

export const useGetGoodToatal = () => {
    const [total, setData] = useState(0);
    const posts = useGetMyPosts();
    const goodAmounts = useGetGoodAmount(posts);

    useEffect(() => {
        const getGoodToatal = () => {
            setData(0);
            posts.forEach((post) => {
                setData((prevTotal) => prevTotal + goodAmounts[post.id]);
            });
        };
        getGoodToatal();
    }, [goodAmounts, posts]);
  return total;
};