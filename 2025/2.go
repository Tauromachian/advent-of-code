package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	input := [...]string{
		"11-22",
		"95-115",
		"998-1012",
		"1188511880-1188511890",
		"222220-222224",
		"1698522-1698528",
		"446443-446449",
		"38593856-38593862",
		"565653-565659",
		"824824821-824824827",
		"2121212118-2121212124",
	}

	total := 0

	for _, item := range input {
		rangeArray := strings.Split(item, "-")

		stringStart := rangeArray[0]

		start, err := strconv.Atoi(rangeArray[0])
		if err != nil {
			fmt.Println("Error with start value " + rangeArray[0])
			return
		}

		end, err := strconv.Atoi(rangeArray[1])
		if err != nil {
			fmt.Println("Error with end value " + rangeArray[1])
			return
		}

		for start <= end {
			firstSlice := stringStart[0 : len(stringStart)/2]
			lastSlice := stringStart[len(stringStart)/2 : len(stringStart)]

			if firstSlice == lastSlice {
				total += start
			}

			start++
			stringStart = strconv.Itoa(start)
		}
	}

	fmt.Println(total)
}
