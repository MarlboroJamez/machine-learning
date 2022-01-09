import cv2
from random import randrange

# Load some pre-trained data on face frontals from opencv
trained_face_data = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

# Chooase and image to detect faces in
#img = cv2.imread('image1.png')

# Capture Webcam Video
webcam = cv2.VideoCapture(0)

# Iterate infinitely over frames
while True:
    succesful_frame_read, frame = webcam.read()

    # Must convert to grey scaling
    grayscaled_img = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detecting Faces
    face_coordinates = trained_face_data.detectMultiScale(grayscaled_img)

    # Draw rectangles with spotted faces
    for (x, y, w, h) in face_coordinates:
            cv2.rectangle(frame, (x,y), (x+w, y+h), (randrange(34), randrange(211), randrange(238)),10)

    # Display the image with the faces spotted
    cv2.imshow('Marlborojamez', frame)

    # Wait here in the code and listen for a key press
    cv2.waitKey(1)