import React from "react";
import { useEffect, useState } from "react";
import styles from "./ArtworkList.module.css";
import { Artwork } from "@/utils/types";
import { ArtworkCard } from "./ArtworkCard";

export const ArtworkList: React.FC = () => {
    const [artworks, setArtworks] = useState<Artwork[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,image_id&limit=36")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch artworks");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setArtworks(data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={styles.grid}>
            {artworks.map((art) => (
                <ArtworkCard
                    key={art.id}
                    title={art.title}
                    artist={art.artist_display}
                    date={art.date_display}
                    imageId={art.image_id} />
            ))}
        </div>
    );
};
