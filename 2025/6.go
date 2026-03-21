package main

import (
	"fmt"
	"log"
	"strconv"
	"strings"
)

func main() {
	problems := [...][]string{
		{"123", " ", "328", " ", "51", " ", "64"},
		{"45", " ", "64", " ", "387", " ", "23"},
		{"6", " ", "98", " ", "215", " ", "314"},
		{"*", " ", "+", " ", "*", " ", "+"},
	}

	var operationStrings []string
	var operations []string

	operationsRow := problems[len(problems)-1]
	problemsSlice := problems[0 : len(problems)-1]

	for i := 0; i < len(operationsRow); i++ {
		operations = append(operations, operationsRow[i])
		operationStrings = append(operationStrings, "")
	}

	for i := 0; i < len(problemsSlice); i++ {
		problem := problemsSlice[i]

		for j := 0; j < len(problem); j += 2 {

			if i == len(problemsSlice)-1 {
				operationStrings[j] += problem[j]
				continue
			}

			operationStrings[j] += problem[j] + operations[j]
		}
	}

	result := 0

	for _, operationString := range operationStrings {

		if strings.Contains(operationString, "*") {
			items := strings.Split(operationString, "*")
			acum := 1

			for _, item := range items {
				iItem, err := strconv.Atoi(item)

				if err != nil {
					log.Fatal(err)
				}

				acum *= iItem
			}

			result += acum
			continue
		}

		if strings.Contains(operationString, "+") {
			items := strings.Split(operationString, "+")
			acum := 0

			for _, item := range items {
				iItem, err := strconv.Atoi(item)

				if err != nil {
					log.Fatal(err)
				}

				acum += iItem
			}

			result += acum
			continue
		}
	}

	fmt.Println(result)
}
