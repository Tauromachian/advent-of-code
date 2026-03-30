package main

import "fmt"

func printTachyonDiagram(tachyonDiagram [][]string) {
	for index, _ := range tachyonDiagram {
		for _, value := range tachyonDiagram[index] {
			fmt.Print(value)
		}
		fmt.Println("")
	}
}

func main() {
	tachyonDiagram := [][]string{
		{".", ".", ".", ".", ".", ".", ".", "S", ".", ".", ".", ".", ".", ".", "."},
		{".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."},
		{".", ".", ".", ".", ".", ".", ".", "^", ".", ".", ".", ".", ".", ".", "."},
		{".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."},
		{".", ".", ".", ".", ".", ".", "^", ".", "^", ".", ".", ".", ".", ".", "."},
		{".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."},
		{".", ".", ".", ".", ".", "^", ".", "^", ".", "^", ".", ".", ".", ".", "."},
		{".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."},
		{".", ".", ".", ".", "^", ".", "^", ".", ".", ".", "^", ".", ".", ".", "."},
		{".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."},
		{".", ".", ".", "^", ".", "^", ".", ".", ".", "^", ".", "^", ".", ".", "."},
		{".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."},
		{".", ".", "^", ".", ".", ".", "^", ".", ".", ".", ".", ".", "^", ".", "."},
		{".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."},
		{".", "^", ".", "^", ".", "^", ".", "^", ".", "^", ".", ".", ".", "^", "."},
		{".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."},
	}

	indexOfStart := 0

	for index, value := range tachyonDiagram[0] {
		if value == "S" {
			indexOfStart = index
			break
		}
	}

	tachyonDiagram[1][indexOfStart] = "|"

	tachyonManifoldCount := 0

	for i := 2; i < len(tachyonDiagram); i++ {
		for j := 0; j < len(tachyonDiagram[0]); j++ {
			if tachyonDiagram[i][j] == "." && tachyonDiagram[i-1][j] == "|" {
				tachyonDiagram[i][j] = "|"
			}

			if tachyonDiagram[i][j] == "^" && tachyonDiagram[i-1][j] == "|" {
				tachyonDiagram[i][j-1] = "|"
				tachyonDiagram[i][j+1] = "|"

				tachyonManifoldCount++
			}
		}
	}

	printTachyonDiagram(tachyonDiagram)
	fmt.Println("Manifold Count: %d", tachyonManifoldCount)
}
