package com.Msa.servlet.model;

import com.Msa.servlet.model.audit.AbstractModelDateAudit;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.*;

@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "username"
        }),
        @UniqueConstraint(columnNames = {
                "email"
        })
})
public class User extends AbstractModelDateAudit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String username;

    private UserStatus status = null;

    @NotBlank
    @NaturalId
    @Email
    private String email;

    @NotBlank
    private String password;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Role> roles = new HashSet<>();

    private Map<Integer, PrivateChat> privateChats = new HashMap<Integer, PrivateChat>();

    private List<GroupChat> groupChats = new ArrayList<GroupChat>();

    private HashMap<Integer, AddRequest> receivedAddRequests = new HashMap<Integer, AddRequest>();

    private HashMap<Integer, AddRequest> sentAddRequests = new HashMap<Integer, AddRequest>();

    private HashMap<Integer, User> contacts = new HashMap<Integer, User>();


//    @OneToMany(mappedBy = "user")
//    private Set<Message> messages;
//
//    @ManyToMany
//    @JoinTable(
//            name = "USER_CHAT",
//            joinColumns = { @JoinColumn(name = "user_id") },
//            inverseJoinColumns = { @JoinColumn(name = "chat_id") }
//    )
//    private Set<Chat> chat;


    public User() {
    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User(String username) {
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String userName) {
        this.username = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + username + '\'' +
                '}';
    }
}
