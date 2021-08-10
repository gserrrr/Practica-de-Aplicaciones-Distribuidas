/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package perabd;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author dsst
 */
public class DBActionsUsers {

    public int getUserAccess(String user, String passwd) {
        DBConnection con = new DBConnection();
        int nivel = -1;
        try {
            con.open();
            Statement st = con.getConection().createStatement();
            String sql = "select * from usuarios where ((user='" + user + "')and(passwd='" + passwd + "'));";
            ResultSet rs = st.executeQuery(sql);
            String aux;
            
            if (rs.next()) {
                nivel = rs.getInt("nivel");  
            }
            
            
        } catch (Exception ex) {
            ex.printStackTrace();
        } finally {
            con.close();
        }
        return nivel;
    }
    
    public void createUser(String user, String passwd){
        DBConnection con = new DBConnection();
        try {
            con.open();
            String sql = "INSERT INTO usuarios(user,passwd,nivel) VALUES ('"+ user +"','"+passwd+"',1)";
            Statement st = con.getConection().createStatement();
            int rs = st.executeUpdate(sql);
        } catch (SQLException ex) {
            Logger.getLogger(DBActionsUsers.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            con.close();
        }
    }
    
    public boolean checkUser(String user){
        DBConnection con = new DBConnection();
        boolean exists = true; //Si hay algún error mejor que no deje crear un usuario
        try{
            con.open();
            Statement st =  con.getConection().createStatement();
            String sql = "select * from usuarios where user='" + user + "'";
            ResultSet rs = st.executeQuery(sql);
            exists = rs.next();
        } catch (SQLException ex) {
            Logger.getLogger(DBActionsUsers.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            con.close();
        }
        return exists;
    }
}
