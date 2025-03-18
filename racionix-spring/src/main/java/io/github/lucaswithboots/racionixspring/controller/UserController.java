package io.github.lucaswithboots.racionixspring.controller;

import io.github.lucaswithboots.racionixspring.model.User;
import io.github.lucaswithboots.racionixspring.repository.UserRepository;
import io.github.lucaswithboots.racionixspring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

//    @GetMapping("/{username}")
//    public ResponseEntity<Optional<User>> findByUsername(@PathVariable String username) {
//        return ResponseEntity.status(HttpStatus.OK).body(userService.getUserByUsername(username));
//    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<User>> getUserById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.getUserById(id));
    }

    @PostMapping("/register")
    public ResponseEntity<User> createUser(@RequestBody User user){
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(user));
    }
}
