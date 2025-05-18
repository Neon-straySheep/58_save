import React, { useEffect, useState } from 'react'
import { useGetMyPosts } from './useGetMyPosts';
import { useGetKatsuAmount } from './useGetKatsuAmount';

export const useGetKatsuToatal = () => {
    const [total, setData] = useState(0);
    const posts = useGetMyPosts();
    const katsuAmounts = useGetKatsuAmount(posts);

    useEffect(() => {
        const getKatsuToatal = () => {
            setData(0);
            posts.forEach((post) => {
                setData((prevTotal) => prevTotal + katsuAmounts[post.id]);
            });
        };
        getKatsuToatal();
    }, [katsuAmounts, posts]);
  return total;
};