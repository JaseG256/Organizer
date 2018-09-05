package com.Msa.servlet.controller;

import com.Msa.servlet.model.User;
import com.Msa.servlet.payload.response.UserIdentityAvailability;
import com.Msa.servlet.payload.response.UserSummary;
import com.Msa.servlet.security.CurrentUser;
import com.Msa.servlet.security.UserPrincipal;
import com.Msa.servlet.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:8100")
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @GetMapping(path = "/users")
    public List<User> getAllUsers(){
        return userService.listAll();
    }

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    @Secured("ROLE_USER")
    public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {
        UserSummary userSummary = new UserSummary(currentUser.getId(), currentUser.getUsername());
        return userSummary;
    }

    @GetMapping("/user/checkUsernameAvailability")
    public UserIdentityAvailability checkUsernameAvailability(@RequestParam(value = "username") String username) {
        Boolean isAvailable = !userService.existsByUsername(username);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping("/user/checkEmailAvailability")
    public UserIdentityAvailability checkEmailAvailability(@RequestParam(value = "email") String email) {
        Boolean isAvailable = !userService.existsByEmail(email);
        return new UserIdentityAvailability(isAvailable);
    }

    @GetMapping(path = "/{id}")
    public Optional<User> findOne(@PathVariable("id") Long id) {
        return userService.getById(id);
    }

    @GetMapping(path="/users/{username}")
    public User findByUserName(@RequestParam("username") String userName) {
        return userService.findByUsername(userName);
    }

    @GetMapping(path = "users/email/{email}")
    public Optional<User> findByEmail(@RequestParam("email") String email) {
        return userService.findByEmail(email);
    }

    @PostMapping("/user/add")
    public User saveUser(@RequestBody User user) {
        // userService.saveUser(user);
        return userService.saveOrUpdate(user);

    }
}

