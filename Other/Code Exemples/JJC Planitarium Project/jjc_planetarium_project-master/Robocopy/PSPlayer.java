import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * https://stackoverflow.com/questions/29545611/executing-powershell-commands-in-java-program
 * Plays a video from powershell
 * 
 * @Author: anquegi
 */

public class PSPlayer
 {
    public static void main(String[] args) throws IOException {
        //String command = "powershell.exe  your command";
        //Getting the version
        String command = "powershell.exe C:\\Users\\jnhu\\Downloads\\jellyfish-25-mbps-hd-hevc.mp4";
        // Executing the command
        Process powerShellProcess = Runtime.getRuntime().exec(command);
        // Getting the results
        powerShellProcess.getOutputStream().close();
        String line;
        BufferedReader stdout = new BufferedReader(new InputStreamReader(powerShellProcess.getInputStream()));
        while ((line = stdout.readLine()) != null) {
            System.out.println(line);
        }
        stdout.close();
        BufferedReader stderr = new BufferedReader(new InputStreamReader(powerShellProcess.getErrorStream()));
        while ((line = stderr.readLine()) != null) {
            System.out.println(line);
        }
        stderr.close();


    }
}