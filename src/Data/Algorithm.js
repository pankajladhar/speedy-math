const Algorithm = {
    "ADDITION": {
        "BEGINNER": {
            "START": {
                "totalQuestion": 5, "maxDigits": "single", "carry": false
            }
        },
        "INTERMEDIATE": {
            "START": {
                "totalQuestion": 5, "maxDigits": "double", "carry": false
            },
            "END": {
                "totalQuestion": 5, "maxDigits": "double", "carry": true
            }
        },
        "EXPERT": {
            "START": {
                "totalQuestion": 5, "maxDigits": "triple", "carry": false
            },
            "END": {
                "totalQuestion": 5, "maxDigits": "triple", "carry": true
            }
        }
    }
}

export default Algorithm;