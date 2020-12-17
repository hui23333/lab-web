package com.example.hzu.lab.dao;


import com.example.hzu.lab.dbtable.tebin;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface tebindao {

    tebin getstudid(String studentid);
}
