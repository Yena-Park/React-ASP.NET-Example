using System;
using System.Collections.Generic;
using mapsted.Models;

namespace mapsted.Utils
{
    public class InsertionSort
    {
        public InsertionSort()
        {
        }

        public static SortedResult SortIntArray(int[] items)
        {
            SortedResult sortedResult = new SortedResult();

            string[] initialValues = Array.ConvertAll(items, (int item) =>
            {
                return item.ToString();
            });
            sortedResult.Steps.Add(string.Join(",", initialValues));

            for (int i = 1; i < items.Length; i++)
            {
                int item = items[i];
                int ins = 0;
                for (int j = i - 1; j >= 0 && ins != 1;)
                {
                    if (item < items[j])
                    {
                        items[j + 1] = items[j];
                        j--;
                        items[j + 1] = item;

                        string[] stringValues = Array.ConvertAll(items, (int value) =>
                        {
                            return value.ToString();
                        });
                        sortedResult.Steps.Add(string.Join(",", stringValues));
                    }
                    else ins = 1;
                }
            }
            return sortedResult;
        }

        public static SortedResult SortStringArray(string[] items)
        {
            SortedResult sortedResult = new SortedResult();

            sortedResult.Steps.Add(string.Join(",", items));

            for (int i = 1; i < items.Length; i++)
            {
                string item = items[i];
                int ins = 0;
                for (int j = i - 1; j >= 0 && ins != 1;)
                {
                    int comparison = item.CompareTo(items[j]);
                    if (comparison < 0)
                    {
                        items[j + 1] = items[j];
                        j--;
                        items[j + 1] = item;

                        sortedResult.Steps.Add(string.Join(",", items));
                    }
                    else ins = 1;
                }
            }
            return sortedResult;
        }
    }
}
