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

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_private_chats",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "private_chat_id"))
    private Map<Long, PrivateChat> privateChats = new HashMap<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_group_chats",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "group_chat_id"))
    private List<GroupChat> groupChats = new ArrayList<>();

    private HashMap<Long, AddRequest> receivedAddRequests = new HashMap<>();

    private HashMap<Long, AddRequest> sentAddRequests = new HashMap<>();

    private HashMap<Long, User> contacts = new HashMap<>();


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

    public UserStatus getStatus() {
        return status;
    }

    public void setStatus(UserStatus status) {
        this.status = status;
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

    public Map<Long, PrivateChat> getPrivateChats() {
        return privateChats;
    }

    public void setPrivateChats(Map<Long, PrivateChat> privateChats) {
        this.privateChats = privateChats;
    }

    public List<GroupChat> getGroupChats() { return groupChats; }

    public void setGroupChats(List<GroupChat> groupChats) { this.groupChats = groupChats; }

    public HashMap<Long, AddRequest> getReceivedAddRequests() { return receivedAddRequests; }

    public void setReceivedAddRequests(HashMap<Long, AddRequest> receivedAddRequests) { this.receivedAddRequests = receivedAddRequests; }

    public HashMap<Long, AddRequest> getSentAddRequests() { return sentAddRequests; }

    public void setSentAddRequests(HashMap<Long, AddRequest> sentAddRequests) { this.sentAddRequests = sentAddRequests; }

    public boolean addContact(User user) {
        if (contacts.containsKey(user.getId())) {
            return false;
        } else {
            contacts.put(user.getId(), user);
            return true;
        }
    }

    public void receivedAddRequest(AddRequest req) {
        Long senderId = req.getFromUser().getId();
        if (!receivedAddRequests.containsKey(senderId)) {
            receivedAddRequests.put(senderId, req);
        }
    }

    public void sentAddRequest(AddRequest req) {
        Long receiverId = req.getFromUser().getId();
        if (!sentAddRequests.containsKey(receiverId)) {
            sentAddRequests.put(receiverId, req);
        }
    }

    public void removeAddRequest(AddRequest req) {
        if (req.getToUser() == this) {
            receivedAddRequests.remove(req);
        } else if (req.getFromUser() == this) {
            sentAddRequests.remove(req);
        }
    }

    public void requestAddUser(String accountName) {
        UserManager.getInstance().addUser(this, accountName);
    }

    public void addConversation(PrivateChat conversation) {
        User otherUser = conversation.getOtherParticipant(this);
        privateChats.put(otherUser.getId(), conversation);
    }

    public void addConversation(GroupChat conversation) {
        groupChats.add(conversation);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + username + '\'' +
                '}';
    }
}
