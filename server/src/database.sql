CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    best_group_size VARCHAR(15),
    game_time_in_min VARCHAR(15),
    description VARCHAR(510),
    image_link VARCHAR(510),
    bgg_link VARCHAR(510),
    cubicle_in_library VARCHAR(5)
);