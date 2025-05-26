--TODO rewrite to use temporary table rather instead of import table..
--

USE TypingProgress

DELETE FROM Typing2024
DELETE FROM Typing2024_NoId

BULK INSERT Typing2024_NoId
FROM 'C:\Users\benda\Desktop\Progress\Typing CSV\Typing2024.csv'
WITH (
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n',
    FIRSTROW = 2,
    KEEPNULLS,
    ERRORFILE = 'C:\Users\benda\Desktop\Progress\Typing CSV\errorfile.txt',
    MAXERRORS = 1000
);

SELECT * FROM Typing2024_NoId

INSERT INTO Typing2024 (Date, Type, WPM, Percentage_Complete, Accuracy)
SELECT Date, Type, WPM, Percentage_Complete, Accuracy
FROM Typing2024_NoId