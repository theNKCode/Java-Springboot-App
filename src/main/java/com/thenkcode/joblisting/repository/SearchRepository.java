package com.thenkcode.joblisting.repository;

import java.util.List;
import com.thenkcode.joblisting.model.Post;

public interface SearchRepository {
    List<Post> findByText(String text);
}
