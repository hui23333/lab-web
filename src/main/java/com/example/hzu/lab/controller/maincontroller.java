package com.example.hzu.lab.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class maincontroller {


    @RequestMapping("/ss")
    public String ss(){
        return "teacher/tebinstaconfirm";
    }
}
