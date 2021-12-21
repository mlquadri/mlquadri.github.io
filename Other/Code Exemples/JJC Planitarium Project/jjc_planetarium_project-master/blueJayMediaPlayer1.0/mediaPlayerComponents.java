import java.awt.Graphics;
import java.awt.Graphics2D;
import javax.swing.JComponent;
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
public class mediaPlayerComponents extends JComponent
{
    public mediaPlayerComponents()
    {
    }

    public void paintComponent(Graphics g)
    {
        Graphics2D g2 = (Graphics2D) g;
        
        repaint();
    }
}