import java.io.*;

class Play
{
    public static void main(String[] args) throws Exception
    {
        ProcessBuilder builder = new ProcessBuilder(
               "cmd.exe" , "/c", "powershell.exe C:\\Users\\jnhu\\Downloads\\jellyfish-25-mbps-hd-hevc.mp4"); //input batch file
        builder.redirectErrorStream(true);
        Process p = builder.start();
        BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream()));
        String line;
        while (true) {
            line = r.readLine();
            if (line == null) { break; }
            System.out.println(line);
        }
        r.close();
    }
}