package com.Msa.servlet.model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "group-chats")
public class GroupChat extends Conversation {

    public void removeParticipant(User user) {
        participants.remove(user);
    }

    public void addParticipant(User user) {
        participants.add(user);
    }
}
