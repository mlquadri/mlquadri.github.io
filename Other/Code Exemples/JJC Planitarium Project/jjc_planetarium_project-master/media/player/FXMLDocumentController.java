package meadia.player;

import java.net.URL;
import java.io.File;
import java.util.ResourceBundle;
import javafx.beans.binding.Bindings;
import javafx.beans.property.DoubleProperty;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.stage.FileChooser;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.media.MediaView;


/**
 *
 * @author mlquadri
 */
public class FXMLDocumentController implements Initializable {
    
    private String filePath;
    private MediaPlayer mediaPlayer;
    //private boolean isPaused
    @FXML
    private Button button;
    @FXML
    private Label label;
    @FXML
    private MediaView mediaView;
    
    @FXML
    private void handleButtonAction(ActionEvent event) {
        FileChooser fileChooser = new FileChooser();
        FileChooser.ExtensionFilter filter = new FileChooser.ExtensionFilter("Select a File (mp4)", "*.mp4");
            fileChooser.getExtensionFilters().add(filter);
            File file = fileChooser.showOpenDialog(null);
            filePath = file.toURI().toString();
            if(filePath != null)
            {
                Media media = new Media(filePath);
                mediaPlayer = new MediaPlayer(media);
                mediaView.setMediaPlayer(mediaPlayer);
                    DoubleProperty with = mediaView.fitWidthProperty();
                    DoubleProperty hight = mediaView.fitHeightProperty();
                    with.bind(Bindings.selectDouble(mediaView.sceneProperty(), "width"));
                    hight.bind(Bindings.selectDouble(mediaView.sceneProperty(), "hight"));
                mediaPlayer.play();
            }
    }
    @FXML
    public void pauseVideo(ActionEvent event)
    {
        //mediaPlayer.pause();
        //if(!isPaused)
        //{
        //mediaPlayer.pause();
        //}else{
        //mediaPlayer.play();  
        //mediaPlayer.setRate(1);  
        //}
    }
    @FXML
    public void playVideo(ActionEvent event)
    {
        //mediaPlayer.play();
        //mediaPlayer.setRate(1);
    }
    @FXML
    public void fishEyeVideo(ActionEvent event)
    {
        
    }
    @FXML
    public void subtitleVideo(ActionEvent event)
    {
        
    }
    @Override
    public void initialize(URL url, ResourceBundle rb) {
        // TODO
    }
}