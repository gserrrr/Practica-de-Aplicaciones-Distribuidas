/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package perabd;

import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author dmiltim
 */
public class DBActionsGlobal {
    
    public String getInfoTabla(String par){
        DBConnection con = new DBConnection();
        par = par.replace('_', ' ');
        String res = "";
        try {
            con.open();
            Statement st1;
            st1 = con.getConection().createStatement();
            
            //hacer sql
            String sqlq = "SELECT primaryname, birthyear, COUNT(*) cant, MAX(ratio) maxima from" +
            " namebasics JOIN personapeli ON namebasics.nconst=personapeli.nconst" +
            " JOIN peliculas ON personapeli.tconst=peliculas.tconst" +
            " JOIN ratingpelis ON peliculas.tconst=ratingpelis.tconst" +
            " WHERE primaryname='"+par+"';";
                    
            ResultSet rs = st1.executeQuery(sqlq);
            //añadir al json
            if (rs.next()){
                res += "{";
                    res += "\"nombre\":\"" + rs.getString("primaryname") + "\",";
                    res += "\"fecnac\":\"" + rs.getString("birthyear") + "\",";
                    res += "\"cantpelis\":" + rs.getFloat("cant") + ",";
                    res += "\"bestpeli\":" + rs.getFloat("maxima");
                res += "}";
            }
            
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            con.close();
        }
        return res;
    }
    
}
