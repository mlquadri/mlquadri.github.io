import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
/**
 * Write a description of class g here.
 *
 * @author (mlquadri)
 * @version (1.0)
 */
public class mediaPlayerViewer
{
    public static void main(String[] args)
    {
        JFrame frame = new mediaPlayerFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);        
    }
}