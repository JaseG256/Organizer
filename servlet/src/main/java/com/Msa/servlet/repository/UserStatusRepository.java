package com.Msa.servlet.repository;

import com.Msa.servlet.model.UserStatus;
import com.Msa.servlet.model.UserStatusType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserStatusRepository extends JpaRepository<UserStatus, Long> {

    Optional<UserStatus> findByType(UserStatusType userStatusType);
}

