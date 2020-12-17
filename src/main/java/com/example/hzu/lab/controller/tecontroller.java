package com.example.hzu.lab.controller;



import com.example.hzu.lab.service.tebinservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class tecontroller {

    @Autowired
    private tebinservice te;
    @RequestMapping("/teb")
    public String teb(String studentid){

        return te.getstud(studentid);
    }
}
