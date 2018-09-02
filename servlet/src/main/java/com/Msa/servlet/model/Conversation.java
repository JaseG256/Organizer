package com.Msa.servlet.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.util.ArrayList;

@MappedSuperclass
public abstract class Conversation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    protected ArrayList<User> participants = new ArrayList<User>();

    protected ArrayList<Message> messages = new ArrayList<Message>();

    public ArrayList<Message> getMessages() {
        return messages;
    }

    public boolean addMessage(Message m) {
        messages.add(m);
        return true;
    }

    public Long getId() {
        return id;
    }
}