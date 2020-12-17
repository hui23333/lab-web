package com.example.hzu.lab.service;



import com.example.hzu.lab.dao.tebindao;
import com.example.hzu.lab.dbtable.tebin;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;

@Service
public class tebinservicempl implements tebinservice{


    @Resource
    private tebindao tebind;

    @Override
    public String getstud(String studentid){
        String str="";
        tebin teb=tebind.getstudid(studentid);

        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
        if (teb!=null){
            str="$(\"#classid\").val(\""+teb.getClassid()+"\");";
            str+="$(\"#name\").val(\""+teb.getName()+"\");";
            str+="$(\"#classroom\").val(\""+teb.getClassroom()+"\");";
            str+="$(\"#department\").val(\""+teb.getDepartment()+"\");";
            str+="$(\"#classsort\").val(\""+teb.getClasssort()+"\");";
            str+="$(\"#startdate\").val(\""+sdf.format(teb.getStartdate())+"\");";
            str+="$(\"#enddate\").val(\""+sdf.format(teb.getEnddate())+"\");";
            str+="$(\"#status\").val(\""+teb.getStatus()+"\");";
            str+="$(\"#classid\").val(\""+teb.getClassid()+"\");";
            str+="$(\"#studtype\").val(\""+teb.getStudtype()+"\");";
        }

        return str;
    }
}
