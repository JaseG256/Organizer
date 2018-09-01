package com.Msa.servlet.service;

import com.Msa.servlet.model.Role;
import com.Msa.servlet.model.RoleName;

import java.util.Optional;

public interface RoleService extends CRUDService<Role> {

    Optional<Role> findByName(RoleName roleName);
}

