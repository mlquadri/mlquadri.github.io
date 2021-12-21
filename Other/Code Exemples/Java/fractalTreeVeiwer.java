import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
public class fractalTreeVeiwer{
   public static void main(String[] args){
       JFrame frame = new JFrame();
       frame.setSize(800, 800);
       frame.setTitle("Fractal Tree");
       frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
       fractalTree tree = new fractalTree(200);
       frame.add(tree);
       frame.setVisible(true);
   }
}