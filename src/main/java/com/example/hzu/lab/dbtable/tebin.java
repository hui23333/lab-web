package com.example.hzu.lab.dbtable;

import java.util.Date;

public class tebin {

    private int id;
    private String studentid;
    private int classid;
    private String name;
    private String classroom;
    private String department;
    private String classsort;
    private Date startdate;
    private Date enddate;
    private String status;
    private String studtype;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStudentid() {
        return studentid;
    }

    public void setStudentid(String studentid) {
        this.studentid = studentid;
    }

    public int getClassid() {
        return classid;
    }

    public void setClassid(int classid) {
        this.classid = classid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getClassroom() {
        return classroom;
    }

    public void setClassroom(String classroom) {
        this.classroom = classroom;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getClasssort() {
        return classsort;
    }

    public void setClasssort(String classsort) {
        this.classsort = classsort;
    }

    public Date getStartdate() {
        return startdate;
    }

    public void setStartdate(Date startdate) {
        this.startdate = startdate;
    }

    public Date getEnddate() {
        return enddate;
    }

    public void setEnddate(Date enddate) {
        this.enddate = enddate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStudtype() {
        return studtype;
    }

    public void setStudtype(String studtype) {
        this.studtype = studtype;
    }
}
