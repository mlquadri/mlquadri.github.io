import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {

    public final static int PORT = 8888;
    public final static String SEND = "C:\\Users\\Chirag\\Videos\\video.mp4";

    public static void main(String [] args) throws IOException
    {
        FileInputStream fstream = null;
        BufferedInputStream bstream = null;
        OutputStream ostream = null;
        ServerSocket sersock = null;
        Socket sock = null;
        try
        {
            sersock = new ServerSocket(PORT);
            while(true)
            {
                System.out.println("Waiting...");
                try
                {
                    sock = sersock.accept();
                    System.out.println("Accepted connection : " + sock);
                    // send file
                    File file = new File(SEND);
                    byte [] bytearray  = new byte [(int)file.length()];
                    fstream = new FileInputStream(file);
                    bstream = new BufferedInputStream(fstream);
                    bstream.read(bytearray,0,bytearray.length);
                    ostream = sock.getOutputStream();
                    System.out.println("Sending " + SEND + "(" + bytearray.length + " bytes)");
                    ostream.write(bytearray,0,bytearray.length);
                    ostream.flush();
                    System.out.println("Done.");
                }
                finally
                {
                    if (bstream != null) bstream.close();
                    if (ostream != null) ostream.close();
                    if (sock != null) sock.close();
                }
            }
        }
        finally
        {
            if (sersock != null) sersock.close();
        }
    }
}