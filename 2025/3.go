package main

import (
	"fmt"
	"log"
	"strconv"
	"strings"
)

func findBiggestNumber(input string, high int) (int, error) {
	largestNumber := 0

	inputSlice := []rune(input)

	for i := 0; i < high; i++ {
		item, err := strconv.Atoi(string(inputSlice[i]))

		if err != nil {
			return -1, err
		}

		if item > largestNumber {
			largestNumber = item
		}
	}

	return largestNumber, nil
}

func main() {
	input := [...]int{
		987654321111111,
		811111111111119,
		234234234234278,
		818181911112111,
	}

	log.Fatal("ooo")
	total := 0

	for _, value := range input {
		stringifiedValue := strconv.Itoa(value)

		firstValue, err := findBiggestNumber(stringifiedValue, len(stringifiedValue)-1)
		if err != nil {
			log.Fatal(err.Error())
		}

		slices := strings.Split(stringifiedValue, strconv.Itoa(firstValue))
		relevantSlice := slices[1]

		secondValue, err := findBiggestNumber(relevantSlice, len(relevantSlice))
		if err != nil {
			log.Fatal(err.Error())
		}

		stringTotal := strconv.Itoa(firstValue) + strconv.Itoa(secondValue)

		intTotal, err := strconv.Atoi(stringTotal)

		total += intTotal
	}

	fmt.Println(total)
}
