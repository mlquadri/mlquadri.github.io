# jjc_planetarium_project

This repository contains a server and a client, allowing users to play videos on one computer while controlling the player with another computer. The program allows users to select files, pause and play the video, stop the video, and fast-forward and rewind the video from a GUI on the control computer.

This program requires Windows OS. This program requires Windows Media Player version 12, which comes default with Windows 7 and above. It also requires Windows Powershell, Command Prompt, and Java. Powershell and Command Prompt come with all versions of Windows 7 and above. The network must be open to communication between computers.

Instructions for installing Windows Media Player Version 12: https://www.lifewire.com/uninstall-or-reinstall-windows-media-player-12-2438891
Instructions for installing Powershell: https://msdn.microsoft.com/en-us/library/ff637750(v=azure.10).aspx


At this point, users need to clone the GUI-to-Surver_Integration branch to the control computer and the Server branch to the projection computer. This can be done by going to and selecting the respective branch and clicking the big green button that says Clone or download. In the near future, users should only need to clone the master branch to both computers.

The program will, but does not yet, allow for users to change the IP address, port, and file address. However, because it does not yet, users should change the Environmental Variables file such that the IP address of the projecting computer and the file address to the location of the videos on the projection computer. All video files that you wish to play must be in the same location on the projection computer. Videos will not play if they are not in the correct location.

In order to run this program correctly, begin on the projection computer by going into cmd and changing your directory to the location of the Final-Server GitHub repository and starting the server class through the command line with "java Server". At this point, in order to run the GUI, you must open up the package in blueJayMediaPlayer 1.0 and activate the main method of MenuViewer on the control computer. From there, you need to select the video file that you wish to play. If you have already set everything else up, including the location of the video files, the IP address, and the port, then the video should automatically fullscreen and play on the projection computer. The video should then respond to your commands.
