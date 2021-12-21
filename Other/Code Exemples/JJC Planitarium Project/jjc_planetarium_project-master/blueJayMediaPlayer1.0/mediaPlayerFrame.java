import java.awt.event.ActionListener;
import java.awt.event.MouseListener;
import java.awt.event.ActionEvent;
import java.awt.event.MouseEvent;
import java.awt.Image;
import java.lang.ProcessBuilder;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import javax.imageio.ImageIO;
import javax.swing.JFileChooser;
import javax.swing.filechooser.FileNameExtensionFilter;
import javax.swing.filechooser.FileFilter;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.ImageIcon;
import javax.swing.JPanel;
/**
 * Write a description of class g here.
 *
 * @author (mlquadri)
 * @version (1.0)
 */
public class mediaPlayerFrame extends JFrame
{
    //Instence varables
    private static final int FRAME_WIDTH = 550;
    private static final int FRAME_HEIGHT = 75;
    private int pressed=0;
    private boolean hasFile = false;
    private boolean noImages = true;
    private mediaPlayerComponents scene;
    private JPanel panel = new JPanel();
    private JButton playButton = new JButton("Play");
    private ImageIcon filesIcon;
    private ImageIcon stopIcon;
    private ImageIcon playIcon;
    private ImageIcon pauseIcon;
    private ImageIcon fishEyeIcon;
    private ImageIcon subtitlesIcon;
    
    //For Jason
    private String filePath;
    private String fileName;
    //private ______ player; ADD CODE
    class MousePressListener implements MouseListener
    {
        public void mousePressed(MouseEvent event){}

        public void mouseReleased(MouseEvent event){}

        public void mouseClicked(MouseEvent event){}

        public void mouseEntered(MouseEvent event){}

        public void mouseExited(MouseEvent event){}
    }
    /**
     * Contains the frame and the panel
     */
    public mediaPlayerFrame()
    {
        scene = new mediaPlayerComponents();
        add(scene);
        setSize(FRAME_WIDTH, FRAME_HEIGHT);

        //sets icons
        if(!noImages)
        {
            try {
                Image playImage = ImageIO.read(getClass().getResource("play.JPEG"));
                filesIcon = new ImageIcon(playImage);
            } catch (Exception e) {
                System.out.println("Error: image play.JPEG not found( "+e+" )");
            }
            try {
                Image playImage = ImageIO.read(getClass().getResource("play.JPEG"));
                stopIcon = new ImageIcon(playImage);
            } catch (Exception e) {
                System.out.println("Error: image ???.JPEG not found( "+e+" )");
            }
            try {
                Image playImage = ImageIO.read(getClass().getResource("play.JPEG"));
                playIcon = new ImageIcon(playImage);
            } catch (Exception e) {
                System.out.println("Error: image ???.JPEG not found( "+e+" )");
            }
            try {
                Image playImage = ImageIO.read(getClass().getResource("play.JPEG"));
                pauseIcon = new ImageIcon(playImage);
            } catch (Exception e) {
                System.out.println("Error: image ???.JPEG not found( "+e+" )");
            }
            try {
                Image playImage = ImageIO.read(getClass().getResource("play.JPEG"));
                fishEyeIcon = new ImageIcon(playImage);
            } catch (Exception e) {
                System.out.println("Error: image ???.JPEG not found( "+e+" )");
            }
            try {
                Image playImage = ImageIO.read(getClass().getResource("play.JPEG"));
                subtitlesIcon = new ImageIcon(playImage);
            } catch (Exception e) {
                System.out.println("Error: image ???.JPEG not found( "+e+" )");
            }
        }

        //creates buttons
        JButton filesButton;
        JButton stopButton;
        JButton fastForwordButton;
        JButton rewindButton;
        JButton fishEyeButton;
        JButton subtitlesButton;
        if(!noImages)
        {
            filesButton = new JButton("Files");
            stopButton = new JButton("Stop");
            fastForwordButton = new JButton(">>");
            rewindButton = new JButton("<<");
            fishEyeButton = new JButton("FishEye");
            subtitlesButton = new JButton("Subtitles");
        }else{
            filesButton = new JButton("Files", filesIcon);
            stopButton = new JButton("Stop", stopIcon);
            fastForwordButton = new JButton(">>");
            rewindButton = new JButton("<<");
            fishEyeButton = new JButton("FishEye", fishEyeIcon);
            subtitlesButton = new JButton("Subtitles", subtitlesIcon);
        }

        //adds buttons;
        panel.add(filesButton);
        panel.add(playButton);
        panel.add(stopButton);
        panel.add(fishEyeButton);
        panel.add(subtitlesButton);
        panel.add(rewindButton);
        panel.add(fastForwordButton);

        //Adds listeners
        ActionListener listener = new ActionListenerClass();
        filesButton.addActionListener(listener);
        playButton.addActionListener(listener);
        stopButton.addActionListener(listener);
        fishEyeButton.addActionListener(listener);
        subtitlesButton.addActionListener(listener);
        fastForwordButton.addActionListener(listener);
        rewindButton.addActionListener(listener);

        //Adds Panel
        this.getContentPane().add(panel);
    }
    public class ActionListenerClass implements ActionListener
    {
        /**
         * Default constructor for objects of class Circle
         */
        public ActionListenerClass()
        {

        }

        public void actionPerformed(ActionEvent event)
        {
            if( event.getActionCommand().equals("Files") ){
                if(true)
                {
                    JFileChooser fileChooser = new JFileChooser();
                    FileNameExtensionFilter filter = new FileNameExtensionFilter("MP4", "mp4");
                    fileChooser.setFileFilter(filter);
                    fileChooser.setFileSelectionMode(JFileChooser.FILES_AND_DIRECTORIES);
                    fileChooser.setDialogTitle("Open Movie");
                    int returnval = fileChooser.showOpenDialog(panel);
                    if(returnval == JFileChooser.APPROVE_OPTION) {
                        fileName = fileChooser.getSelectedFile().getName();
                        filePath = fileChooser.getSelectedFile().getAbsolutePath();
                        System.out.println(fileName);
                        System.out.println(filePath);
                        hasFile = true;
                        //player = new Player(filePath); ADD CODE
                    }else{
                        System.out.println("Error: no file loaded"); 
                    }
                }else{
                    try{
                        String run = "Y";
                        while(run.equals("Y")){

                            //CMD code
                            ProcessBuilder builder = new ProcessBuilder(
                                    "cmd.exe", "/c", "cd C:\\");
                            builder.redirectErrorStream(true);
                            Process p = builder.start();
                            BufferedReader r = new BufferedReader(new InputStreamReader(p.getInputStream()));
                            String line;
                            while (true) {
                                line = r.readLine();
                                if (line == null) { break; }
                                System.out.println(line);
                            }

                            ProcessBuilder builder2 = new ProcessBuilder(
                                    "cmd.exe", "/c", "dir");
                            builder.redirectErrorStream(true);
                            Process p2 = builder2.start();
                            BufferedReader r2 = new BufferedReader(new InputStreamReader(p.getInputStream()));
                            String line2;
                            while (true) {
                                line2 = r2.readLine();
                                if (line2 == null) { break; }
                                System.out.println(line);
                            }
                        }
                    }catch (Exception e) {
                    }
                }
            }else if(event.getActionCommand().equals("Play")){
                if(hasFile == true){
                    //player.play(); ADD CODE
                    playButton.setText("Pause");
                }else{
                    System.out.println("Error: Please select a file");
                }
            }else if(event.getActionCommand().equals("Pause")){
                if(hasFile == true){
                    //player.pause(); ADD CODE
                    playButton.setText("Play");
                }else{
                    System.out.println("Error: Please select a file");
                }
            }else if(event.getActionCommand().equals("Stop")){
                //player.stop(); ADD CODE
                filePath = null;
                hasFile = false;
                playButton.setText("Play");
            }else if(event.getActionCommand().equals("FishEye")){
                //System.out.println("FishEye"); Add Code Latter
            }else if(event.getActionCommand().equals("Subtitles")){
                //System.out.println("Subtitles"); Add Code Latter
            }else if(event.getActionCommand().equals(">>")
            && hasFile == true){
                //player.fastForword(); ADD CODE
                if( (playButton.getText()).equals("Pause") )
                {
                    //player.play(); ADD CODE
                }else{
                    //player.pause(); ADD CODE
                }
            }else if(event.getActionCommand().equals("<<") 
            && hasFile == true){
                //player.reWind(); ADD CODE
                if( (playButton.getText()).equals("Pause") )
                {
                    //player.play(); ADD CODE
                }else{
                    //player.pause(); ADD CODE
                }
            }else if( (event.getActionCommand().equals("<<"))
                || (event.getActionCommand().equals(">>")) ){
                System.out.println("Error: Please select a file");
            }else{
                System.out.println("Error: ActionEvent: "+event+" unknown");
            }
        }
    }
}