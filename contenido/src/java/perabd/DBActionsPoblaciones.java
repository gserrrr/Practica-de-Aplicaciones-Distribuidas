/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package perabd;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Calendar;

/**
 *
 * @author dsst
 */
public class DBActionsPoblaciones {

    /*
    float a = Float.parseFloat(par.substring(0, par.indexOf("-")));
    float A = Float.parseFloat(par.substring(par.indexOf("-") + 1));
    
    */
    public String getGPSPoblacion(String par) {
        DBConnection con = new DBConnection();
        String res = "[";
        try {
            con.open();
            Statement st1;
            st1 = con.getConection().createStatement();
            String localidad = par.substring(0, par.indexOf("-"));
            String resto = par.substring(par.indexOf("-")+1);
            while(localidad!=""){
                //hacer sql
                String sqlq = "select poblacion,lat,lon from poblaciones where pais='es' and poblacion like '" + localidad + "';";
                ResultSet rs = st1.executeQuery(sqlq);
                //añadir al json
                if (rs.next()){
                    res += "{";
                        res += "\"name\":\"" + rs.getString("poblacion") + "\",";
                        res += "\"lat\":" + rs.getFloat("lat") + ",";
                        res += "\"lon\":" + rs.getFloat("lon") + "";
                    res += "},";
                }else{
                    break;
                }
                //pillar siguiente localidad
                int index = resto.indexOf("-");
                if(index == -1){
                    localidad=resto;
                    resto="";
                }else{
                    localidad = resto.substring(0, index);
                    resto = resto.substring(index+1);
                }
                
            }
            res = res.substring(0, res.length()-1);
            res+="]";
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            con.close();
        }
        return res;
    }
}
