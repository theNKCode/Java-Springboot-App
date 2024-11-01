package com.thenkcode.joblisting.repository;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Repository;
import com.thenkcode.joblisting.model.Post;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;




@Repository
public class SearchRepositoryImplementation implements SearchRepository {

    @Autowired
    MongoClient mongoClient;
    @Autowired
    MongoConverter converter;

    @Override
    public List<Post> findByText(String text) {
        // Placeholder: Logic to search text in MongoDB would go here.
        final List<Post> posts = new ArrayList<>();

        MongoDatabase database = mongoClient.getDatabase("Java_Mini_Project");
        MongoCollection<Document> collection = database.getCollection("Jobs");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(
                new Document("$search", new Document("index", "default").append("text", new Document("query", text).append("path", Arrays.asList("techs", "desc")))),
                new Document("$sort", new Document("exp", 1L)),
                new Document("$limit", 5L)));

        result.forEach(document -> posts.add(converter.read(Post.class, document)));

        return posts;
    }
}
