package main

import (
	"fmt"
)

type coordinate struct {
	i, j int
}

func countAdjacentRolls(input [][]string, i, j int) int {
	adjacentRolls := 0

	adjacentCoordinates := [...]coordinate{
		{i: 0, j: 1},
		{i: 1, j: 1},
		{i: 1, j: 0},
		{i: 1, j: -1},
		{i: 0, j: -1},
		{i: -1, j: -1},
		{i: -1, j: 0},
		{i: -1, j: 1},
	}

	for _, coordinate := range adjacentCoordinates {
		if i+coordinate.i < 0 {
			continue
		}

		if j+coordinate.j < 0 {
			continue
		}

		if i+coordinate.i >= len(input) {
			continue
		}

		if j+coordinate.j >= len(input[0]) {
			continue
		}

		if input[i+coordinate.i][j+coordinate.j] == "@" {
			adjacentRolls++
		}
	}

	return adjacentRolls
}

func main() {
	input := [...][]string{
		{".", ".", "@", "@", ".", "@", "@", "@", "@", "."},
		{"@", "@", "@", ".", "@", ".", "@", ".", "@", "@"},
		{"@", "@", "@", "@", "@", ".", "@", ".", "@", "@"},
		{"@", ".", "@", "@", "@", "@", ".", ".", "@", "."},
		{"@", "@", ".", "@", "@", "@", "@", ".", "@", "@"},
		{".", "@", "@", "@", "@", "@", "@", "@", ".", "@"},
		{".", "@", ".", "@", ".", "@", ".", "@", "@", "@"},
		{"@", ".", "@", "@", "@", ".", "@", "@", "@", "@"},
		{".", "@", "@", "@", "@", "@", "@", "@", "@", "."},
		{"@", ".", "@", ".", "@", "@", "@", ".", "@", "."},
	}

	validRolls := 0

	for i := 0; i < len(input); i++ {
		for j := 0; j < len(input[0]); j++ {
			if input[i][j] == "." {
				continue
			}

			adjacentRolls := countAdjacentRolls(input[0:len(input)], i, j)

			if adjacentRolls < 4 {
				validRolls++
			}
		}

	}

	fmt.Println(validRolls)

}
