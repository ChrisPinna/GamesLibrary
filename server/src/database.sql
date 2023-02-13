CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    players VARCHAR(15),
    playtime VARCHAR(15),
    description VARCHAR(2000),
    image_link VARCHAR(510),
    bgg_link VARCHAR(510),
    cubicle_in_library VARCHAR(5)
);