package main

import (
	"errors"
	"fmt"
	"strconv"
	"strings"
)

func rotateLeft(barrel, amount int) int {
	result := barrel - amount

	if result < 0 {
		return 100 + result
	}

	if result == 100 {
		return 0
	}

	return result
}

func rotateRight(barrel, amount int) int {
	result := barrel + amount

	if result > 100 {
		return result - 100
	}

	if result == 100 {
		return 0
	}

	return result
}

func getRotationNumber(rotationString, rotationChar string) (int, error) {

	number, err := strconv.Atoi(strings.Replace(rotationString, rotationChar, "", 1))

	if err != nil {
		return -1, errors.New("Error rotation string " + rotationString + " to number")
	}

	return number, nil
}

func main() {
	rotations := []string{"L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"}
	password := 0
	barrel := 50

	for _, value := range rotations {
		if strings.Contains(value, "L") {
			number, err := getRotationNumber(value, "L")

			if err != nil {
				fmt.Println(err.Error())
				return
			}

			barrel = rotateRight(barrel, number)
		}

		if strings.Contains(value, "R") {
			number, err := getRotationNumber(value, "R")

			if err != nil {
				fmt.Println(err.Error())
				return
			}

			barrel = rotateRight(barrel, number)
		}

		if barrel == 0 {
			password++
		}
	}

	fmt.Println(password)
}
