# Original Location to Datasets (Kaggle.com)
`https://github.com/stedy/Machine-Learning-with-R-datasets`

# How to download the data
1. In your Mac or Linux envirounment, open a terminal and change to the directory where you want your data to be downloaded.
2. Go to the github page you want to download it's data (for example the challenger data in chapter 6: https://github.com/stedy/Machine-Learning-with-R-datasets/blob/master/challenger.csv)
3. On the right side, you will find a button called "raw". Click on it.
4. Copy the url you will get for the new page (in our example I got https://raw.githubusercontent.com/stedy/Machine-Learning-with-R-datasets/master/challenger.csv)
5. put the following command in the terminal screen
wget name_of_url

so in our example it should be like this
`wget https://raw.githubusercontent.com/stedy/Machine-Learning-with-R-datasets/master/challenger.csv`


Chapter 1
---------

No datasets used

Chapter 2
---------

usedcars.csv could not be found online

Chapter 3
---------

wisc_bc_data.csv from https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/

Chapter 4
---------

sms_spam.csv from http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/

Chapter 5
---------

credit.csv from https://archive.ics.uci.edu/ml/machine-learning-databases/statlog/german/

mushrooms.csv from https://archive.ics.uci.edu/ml/machine-learning-databases/mushroom/

Chapter 6
---------
challenger.csv from https://archive.ics.uci.edu/ml/machine-learning-databases/space-shuttle/

insurance.csv could not be found online

whitewines.csv from https://archive.ics.uci.edu/ml/machine-learning-databases/wine-quality/

Chapter 7
---------

concrete.csv from https://archive.ics.uci.edu/ml/machine-learning-databases/concrete/compressive/

letterdata.csv from https://archive.ics.uci.edu/ml/machine-learning-databases/letter-recognition/

Chapter 8
---------

groceries.csv is from [arules](http://cran.r-project.org/web/packages/arules/index.html) package but probably just easier to call `library(arules); data(Groceries)`

Chapter 9
---------

snsdata.csv could not be found online

Chapter 10
----------

sms_results.csv is likely from the `sms_test_pred` object in Chapter 4 but difficult to be sure.

credit.csv is likely the same file from Chapter 5.

Chapter 11
----------

credit.csv from Chapter 5 is reused.

Chapter 12
----------

No datasets used


