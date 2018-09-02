package com.Msa.servlet.model;

import com.Msa.servlet.service.RoleServiceImpl;
import com.Msa.servlet.service.UserStatusServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class UserStatusLoader implements ApplicationRunner {

    private UserStatusServiceImpl user;

    @Autowired
    public UserStatusLoader(UserStatusServiceImpl user){
        this.user = user;

    }
    public void run(ApplicationArguments args) {
        UserStatus foo = new UserStatus(UserStatusType.Offline, "");
        this.user.saveOrUpdate(foo);

        UserStatus foo2 = new UserStatus(UserStatusType.Away, "");
        this.user.saveOrUpdate(foo2);

        UserStatus foo3 = new UserStatus(UserStatusType.Idle, "");
        this.user.saveOrUpdate(foo3);

        UserStatus foo4 = new UserStatus(UserStatusType.Available, "");
        this.user.saveOrUpdate(foo4);

        UserStatus foo5 = new UserStatus(UserStatusType.Busy, "");
        this.user.saveOrUpdate(foo5);

    }
}

