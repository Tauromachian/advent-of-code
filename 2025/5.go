package main

import (
	"fmt"
	"log"
	"strconv"
	"strings"
)

func getIndexOfEmptyStr(input []string) int {
	for index, value := range input {
		if value == "" {
			return index
		}
	}

	return -1
}

func main() {
	input := [...]string{
		"3-5",
		"10-14",
		"16-20",
		"12-18",
		"",
		"1",
		"5",
		"8",
		"11",
		"17",
		"32",
	}
	availableIngredientsCounter := 0

	indexOfBlankLine := getIndexOfEmptyStr(input[0:len(input)])

	ranges := input[0:indexOfBlankLine]
	ids := input[indexOfBlankLine+1 : len(input)]

	for _, id := range ids {
		for _, oneRange := range ranges {
			rangesArray := strings.Split(oneRange, "-")

			lowerLimit, err := strconv.Atoi(rangesArray[0])

			if err != nil {
				log.Fatal(err)
			}

			higherLimit, err := strconv.Atoi(rangesArray[1])

			if err != nil {
				log.Fatal(err)
			}

			numerID, err := strconv.Atoi(id)

			if err != nil {
				log.Fatal(err)
			}

			if lowerLimit <= numerID && numerID <= higherLimit {
				availableIngredientsCounter++
				break
			}
		}
	}

	fmt.Println(availableIngredientsCounter)
}
