import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;
/**
 * this class does the media file functions 
 * 
 * @Author: jtisaac
 */

public class Caller
{
    public static void main(String[] args) throws IOException {
        //String command = "powershell.exe  your command";
        //the string commands powershell -ExecutionPolicy RemoteSigned -File "H:\Muter.ps1"
        ArrayList<String> myList = new ArrayList<String>();
        String init = "powershell.exe powershell -ExecutionPolicy RemoteSigned -File \"H:\\Muter.ps1\"";
        String first = "powershell.exe $wshShell = new-object -com wscript.shell";
        String second = "powershell.exe $wshShell.SendKeys([char]179)";
        

        myList.add(first);
        myList.add(second);
        // Executing the command
        // for(String command : myList) {
            // Process powerShellProcess = Runtime.getRuntime().exec(command);
            // // Getting the results
            // powerShellProcess.getOutputStream().close();
            // String line;
            // BufferedReader stdout = new BufferedReader(new InputStreamReader(powerShellProcess.getInputStream()));
            // while ((line = stdout.readLine()) != null) {
                // System.out.println(line);
            // }
            // stdout.close();
            // BufferedReader stderr = new BufferedReader(new InputStreamReader(powerShellProcess.getErrorStream()));
            // while ((line = stderr.readLine()) != null) {
                // System.out.println(line);
            // }
            // stderr.close();
        // }
        
        Process powerShellProcess = Runtime.getRuntime().exec(init);
        //Process powerShellProcess2 = Runtime.getRuntime().exec(second);
        // Getting the results
        powerShellProcess.getOutputStream().close();
        String line;
        BufferedReader stdout = new BufferedReader(new InputStreamReader(powerShellProcess.getInputStream()));
        while ((line = stdout.readLine()) != null) {
            System.out.println(line);
        }
        stdout.close();
        // BufferedReader stderr = new BufferedReader(new InputStreamReader(powerShellProcess2.getErrorStream()));
        // while ((line = stderr.readLine()) != null) {
            // System.out.println(line);
        // }
        // stderr.close();
        System.out.print("hello");
    }
}