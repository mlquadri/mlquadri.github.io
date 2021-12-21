import javafx.application.Application;
import javafx.fxml.FMXLLoader;
import javafx.Parent;
import javafx.scene.Scene;
import javafx.scene.Stage;

/**
 * Write a description of class Player here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Amedia extends Application
{
    @Override
    public viod start(Stage stage) throws Exeption
    {
        Parent root = FXMLLoader.load(getClass().getResource("FXMLdocument.fxml"));
        
        Scene scene = new Scene(root);
        
        stage.setScene(scene);
        stage.show();
    }

    public static void main(Strings[] arg)
    {
        launch(args);
    }
}
