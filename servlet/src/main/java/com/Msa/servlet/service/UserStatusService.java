package com.Msa.servlet.service;

import com.Msa.servlet.model.UserStatus;
import com.Msa.servlet.model.UserStatusType;

import java.util.Optional;

public interface UserStatusService extends CRUDService<UserStatus> {

    Optional<UserStatus> findByType(UserStatusType userStatusType);
}
