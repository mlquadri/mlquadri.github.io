import java.awt.*;
import javax.swing.JPanel;
import java.awt.geom.Line2D;
public class fractalTree extends JPanel
{
    private final int PANEL_WIDTH = 800;
    private final int PANEL_HEIGHT = 800;
    private double size;
    private final int sangle= 30;
    private final double CHANGE=2.0/3;

    //-----------------------------------------------------------------
    //  Sets the initial side size to the value specified.
    //-----------------------------------------------------------------
    public fractalTree (double inSize)
    {
        size = inSize;
        setBackground (Color.black);
    }

    //-----------------------------------------------------------------
    //  Draws the fractal recursively.
    //-----------------------------------------------------------------
    public void drawFractal (double sideSize, int X1, int Y1, int angle, Graphics2D g2)
    {
        int X2=X1;
        int Y2=Y1;
        sideSize*=CHANGE;
        if (true)
        {
            double r = Math.random();
            if(r>.5)
            {
                angle+=angle;
            }else if(r<.5)
            {
                angle-=angle;
            }
        }
        if (sideSize <= 1)
        {
            Y2+=Math.cos(Math.toRadians(angle))*(sideSize);
            X2+=Math.sin(Math.toRadians(angle))*(sideSize);
            g2.draw( new Line2D.Double( X1, PANEL_HEIGHT-Y1, X2, PANEL_HEIGHT-Y2 ));
        }
        else
        {
            Y2+=Math.cos(Math.toRadians(angle))*(sideSize);
            X2+=Math.sin(Math.toRadians(angle))*(sideSize);
            g2.draw( new Line2D.Double( X1, PANEL_HEIGHT-Y1, X2, PANEL_HEIGHT-Y2 ));
            drawFractal (sideSize, X2, Y2, (angle+(sangle)), g2);
            drawFractal (sideSize, X2, Y2, (angle-(sangle)), g2);
        }
    }
    //-----------------------------------------------------------------
    //  Performs the initial calls to the drawFractal method.
    //-----------------------------------------------------------------
    public void paintComponent (Graphics page)
    {
        super.paintComponent (page);
        Graphics2D g2 = (Graphics2D) page;
        
        page.setColor (Color.green);
        int X = PANEL_WIDTH/2;
        int Y = (int)size;
        g2.draw( new Line2D.Double( X, PANEL_HEIGHT, X, PANEL_HEIGHT-Y ) );

        drawFractal (size , X, Y, sangle, g2);
        drawFractal (size , X, Y, sangle-(2*sangle), g2);
    }
}