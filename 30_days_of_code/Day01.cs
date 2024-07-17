using System;
using System.Collections.Generic;
using System.IO;

class Solution {
    static void Main(String[] args) {
        int i = 4;
        double d = 4.0;
        string s = "HackerRank ";

        
        // Declare second integer, double, and String variables.
        int intNumber;
        float floatNumber;
        string word;
        // Read and save an integer, double, and String to your variables.
        intNumber = int.Parse(Console.ReadLine());
        floatNumber = float.Parse(Console.ReadLine());
        word = Console.ReadLine();
        // Print the sum of both integer variables on a new line.
        Console.WriteLine(i + intNumber);
        // Print the sum of the double variables on a new line.
        Console.WriteLine((d + floatNumber).ToString("F1"));
        // Concatenate and print the String variables on a new line
        // The 's' variable above should be printed first.
        Console.WriteLine(s + word);
    }
}