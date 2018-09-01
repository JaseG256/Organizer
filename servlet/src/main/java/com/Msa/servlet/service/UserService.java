package com.Msa.servlet.service;

import com.Msa.servlet.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService extends CRUDService<User> {

    Optional<User> findByEmail(String email);

    Optional<User> findByUsernameOrEmail(String username, String email);

    List<User> findByIdIn(List<Long> userIds);

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}