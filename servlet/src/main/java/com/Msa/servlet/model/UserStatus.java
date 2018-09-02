package com.Msa.servlet.model;

import com.Msa.servlet.model.audit.AbstractModelDateAudit;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
@Table(name = "status")
public class UserStatus extends AbstractModelDateAudit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String message;

    @Enumerated(EnumType.STRING)
    private UserStatusType type;

    public UserStatus(UserStatusType type, String message) {
        this.type = type;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserStatusType getStatusType() {
        return type;
    }

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return type.toString();
    }
}