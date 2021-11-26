#!/bin/bash
curl -d '{"sid":"619e6bf60be11351a40a67ed"}' -H 'Content-Type:application/json' https://scoring-engine-api.herokuapp.com/api/statusHistory | jq > team1.txt
curl -d '{"sid":"619e47a833498320546f4588"}'-H 'Content-Type: application/json' https://scoring-engine-api.herokuapp.com/api/statusHistory | jq > team2.txt
