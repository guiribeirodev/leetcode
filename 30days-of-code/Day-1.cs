using System;
using System.Collections.Generic;
using System.IO;

class Solution {
    static void Main(String[] args) {
        int i = 4;
        double d = 4.0;
        string s = "HackerRank ";

        
        // Declare second integer, double, and String variables.
        int dataInt;
        double dataDouble;
        string dataString;
        // Read and save an integer, double, and String to your variables.
        dataInt = int.Parse(Console.ReadLine());
        dataDouble = double.Parse(Console.ReadLine());
        dataString = Console.ReadLine();
        // Print the sum of both integer variables on a new line.
        Console.WriteLine(i + dataInt);
        // Print the sum of the double variables on a new line.
        Console.WriteLine((d + dataDouble).ToString("N1"));
        // Concatenate and print the String variables on a new line
        Console.WriteLine(s + dataString);
        // The 's' variable above should be printed first.

    }
}