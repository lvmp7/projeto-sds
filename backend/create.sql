create table tb_sales (
id int8 generated by default as identity primary key,
amount float8,
date date,
deals int,
visited int,
seller_id int8 )

create table tb_sellers (
id int8 generated by default as identity primary key,
name varchar(255) )

alter table tb_sales
       add constraint FKp0nn0oixeiw2fq3jivj6vnsu
       foreign key (seller_id)
       references tb_sellers