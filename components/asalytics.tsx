import React, { useEffect, useState } from 'react';
import { useAsa } from '../hooks/useAsa';
import Image from 'next/image';
import styles from '../styles/asalytics.module.scss';
import Loader from './Loader';

const Asalytics = () => {
  const { data, isLoading, error } = useAsa();
  const LIMIT = 12;
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState<any[]>([]);
  const [index, setIndex] = useState(LIMIT);
  const [initalData, setInitalData] = useState<any[]>([]);

  useEffect(() => {
    if (!isLoading) {
      setInitalData(data?.result);
      setList(data?.result.slice(0, LIMIT));
    }
  }, [data, isLoading]);

  const LENGTH = initalData.length;

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newList = list.concat(initalData.slice(index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };

  return (
    <section>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.asa__root}>
          {error && (
            <p className={styles.err_message}>
              There was an error loading data
            </p>
          )}
          {list.map((data, index) => {
            return (
              <div key={index} className={styles.asa__border}>
                <div>
                  {data.logo === null ? (
                    <Image
                      src="/bitcoin-1.svg"
                      alt={data?.name}
                      width={30}
                      height={57.39}
                    />
                  ) : (
                    <Image
                      src={data?.logo}
                      width={30}
                      height={57.39}
                      alt={data?.name}
                      placeholder="blur"
                      blurDataURL="/bitcoin12.png"
                    />
                  )}
                </div>
                <div className={styles.asa__border__name}>
                  <p>{data?.name}</p>
                </div>
                <div>
                  {data?.available ? (
                    <button className={styles.asa__border__available}>
                      Available
                    </button>
                  ) : (
                    <button className={styles.asa__border__unavailable}>
                      Unavailable
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {showMore && (
        <div className={styles.loadMore}>
          {!isLoading && (
            <button onClick={loadMore} className={styles.loadMore__button}>
              Load More
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Asalytics;
