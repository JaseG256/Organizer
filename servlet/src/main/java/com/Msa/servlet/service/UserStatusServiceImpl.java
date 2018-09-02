package com.Msa.servlet.service;

import com.Msa.servlet.model.UserStatus;
import com.Msa.servlet.model.UserStatusType;
import com.Msa.servlet.repository.UserStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserStatusServiceImpl implements UserStatusService {

    @Autowired
    UserStatusRepository userStatusRepository;

    @Override
    public List<UserStatus> listAll() {
        List<UserStatus> roles = new ArrayList<>();
        userStatusRepository.findAll().forEach(roles::add);
        return roles;
    }

    @Override
    public Optional<UserStatus> getById(Long id) {
        return userStatusRepository.findById(id);
    }

    @Override
    public UserStatus saveOrUpdate(UserStatus domainObject) {
        return userStatusRepository.save(domainObject);
    }

    @Override
    public void delete(Long id) {
        userStatusRepository.deleteById(id);
    }

    @Override
    public Optional<UserStatus> findByType(UserStatusType userStatusType) {
        return userStatusRepository.findByType(userStatusType);
    }
}
