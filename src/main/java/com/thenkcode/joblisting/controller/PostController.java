package com.thenkcode.joblisting.controller;

import com.thenkcode.joblisting.repository.PostRepository;
import com.thenkcode.joblisting.model.Post;
import com.thenkcode.joblisting.repository.SearchRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
public class PostController {
    @Autowired
    PostRepository repo;

    @Autowired
    SearchRepository searchRepo;

    @RequestMapping("/")
    public void redirect(HttpServletResponse response) throws IOException {
        response.sendRedirect("/swagger-ui.html");
    }

    @GetMapping("/posts")
    public List<Post> getAllPosts() {
        return repo.findAll();
    }

    @GetMapping("/posts/{text}")
    public List<Post> search(@PathVariable String text) {
        return searchRepo.findByText(text);
    }

    @PostMapping("/post")
    public Post addPost(@RequestBody Post post) {
        return repo.save(post);
    }
}
