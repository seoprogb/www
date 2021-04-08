const devicesWithHomeButton = [
  "8plus",
  "8",
  "7plus",
  "7",
  "6splus",
  "6s",
  "6plus",
  "6",
  "ipadmini",
  "ipadmini2",
  "ipadmini3",
  "ipadmini4",
  "ipadmini5",
  "ipad2",
  "ipad3",
  "ipad4",
  "ipad5",
  "ipad6",
  "ipad7",
  "ipadair",
  "ipadair2",
  "ipadair3",
  "ipadpro9",
  "ipadpro10",
  "ipadpro121",
  "ipadpro122"
];

const devices = {
    "ipadmini": {
        screen: {
            price: "$100",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$100",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$100",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadmini2": {
        screen: {
            price: "$100",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$129",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$100",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadmini3": {
        screen: {
            price: "$150",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$130",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$130",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadmini4": {
        screen: {
            price: "$250",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$180",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$180",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadmini5": {
        screen: {
            price: "$250",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$190",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$190",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipad2": {
        screen: {
            price: "$140",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$130",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$130",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipad3": {
        screen: {
            price: "$140",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$130",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$130",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipad4": {
        screen: {
            price: "$140",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$130",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$130",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipad5": {
        screen: {
            price: "$150",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$130",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$130",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipad6": {
        screen: {
            price: "$150",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$130",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$130",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipad7": {
        screen: {
            price: "$180",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$130",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$130",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadair": {
        screen: {
            price: "$150",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$130",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$130",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadair2": {
        screen: {
            price: "$260",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$130",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$130",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadair3": {
        screen: {
            price: "$280",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$230",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$230",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadpro9": {
        screen: {
            price: "$260",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$150",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$150",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadpro10": {
        screen: {
            price: "$260",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$230",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$230",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$500-$550",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadpro11": {
        screen: {
            price: "$350",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$230",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$230",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$500-$550",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadpro121": {
        screen: {
            price: "$280",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$150",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$150",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$200-$400",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadpro122": {
        screen: {
            price: "$320",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$230",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$230",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$600-$650",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadpro123": {
        screen: {
            price: "$500",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$230",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$230",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$600-$680",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "ipadpro124": {
        screen: {
            price: "$400",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$330",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$330",
            warranty: "90 day",
            duration: "3 hour",
        },
        water: {
            price: "$600-$680",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "6": {
        screen: {
            price: "$75",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$50",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$50",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$160-$200",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "6s": {
        screen: {
            price: "$85",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$50",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$50",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$160-$200",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "6plus": {
        screen: {
            price: "$85",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$50",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$50",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$160-$200",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "6splus": {
        screen: {
            price: "$90",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$50",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$180-$240",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "7": {
        screen: {
            price: "$90",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$180-$240",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "7plus": {
        screen: {
            price: "$109",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$200-$250",
            warranty: "90 day",
            duration: "2-3 business days",
        },
    },
    "8": {
        screen: {
            price: "$109",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$60",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$200-$250",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
        price: "$140"
        }
    },
    "8plus": {
        screen: {
            price: "$120",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$60",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$200-$250",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
        price: "$140"
        }
    },
    "x": {
        screen: {
            price: "$200",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$65",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$75",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$250-$350",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
        price: "$150"
        }
    },
    "xs": {
        screen: {
            price: "$200",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$75",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$75",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$250-$350",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
        price: "$150"
        }
    },
    "xr": {
        screen: {
            price: "$150",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$75",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$75",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$250-$350",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
        price: "$150"
        }
    },
    "xsmax": {
        screen: {
            price: "$280",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$75",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$75",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$300 - $450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
        duration: "3 hour",
        price: "$150"
        }
    },
    "11": {
        screen: {
            price: "$150",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$100",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$100",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$300-$350",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
        price: "$180"
        }
    },
    "11pro": {
        screen: {
            price: "$280",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$100",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$120",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$300-$450",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
        duration: "3 hour",
        price: "$180"
        }
    },
    "11proMax": {
        screen: {
            price: "$330",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$120",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$120",
            warranty: "90 day",
            duration: "30 minutes",
        },
        water: {
            price: "$300-$350",
            warranty: "90 day",
            duration: "2-3 business days",
        },
        backglass: {
            duration: "3 hour",
            price: "$180"
        }
    },
    "12mini": {
        screen: {
            price: "$415",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$120",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$120",
            warranty: "90 day",
            duration: "30 minutes",
        },
        backglass: {
            duration: "3 hour",
            price: "$180"
        }
    },
    "1212pro": {
        screen: {
            price: "$490",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$120",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$140",
            warranty: "90 day",
            duration: "30 minutes",
        },
    },
    "12proMax": {
        screen: {
            price: "$520",
            warranty: "Lifetime",
            duration: "15 minutes",
        },
        battery: {
            price: "$140",
            warranty: "90 day",
            duration: "15 minutes",
        },
        charging: {
            price: "$140",
            warranty: "90 day",
            duration: "30 minutes",
        },
        backglass: {
            duration: "3 hour",
            price: "$200"
        }
    },
    "googlePixel": {
        screen: {
            price: "$100",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixelXL": {
        screen: {
            price: "$130",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel2": {
        screen: {
            price: "$140",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel2XL": {
        screen: {
            price: "$190",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel3": {
        screen: {
            price: "$180",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel3XL": {
        screen: {
            price: "$190",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel3A": {
        screen: {
            price: "$180",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$55",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel4": {
        screen: {
            price: "$200",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$65",
            warranty: "90 day",
            duration: "1 hour",
        },
        charging: {
            price: "$65",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel4XL": {
        screen: {
            price: "$200",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel4a": {
        screen: {
            price: "$220",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel4a5g": {
        screen: {
            price: "$220",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "googlePixel5": {
        screen: {
            price: "$260",
            warranty: "90 day",
            duration: "1 hour",
        },
    },
    "S20FE5G": {
        screen: {
            price: "$200",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Cloud Navy",
            "Cloud White",
            "Cloud Mint",
            "Cloud Orange",
            "Cloud Red",
            "Cloud Lavender",
        ]
    },
    "S20Ultra5g": {
        screen: {
            price: "$390",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Cosmic Grey",
            "Cosmic Black",
        ]
    },
    "S20Plus5g": {
        screen: {
            price: "$360",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Aura Blue",
            "Cloud White",
            "Cloud Blue",
            "Cosmic Grey",
            "Cosmic Black",
        ]
    },
    "S205G": {
        screen: {
            price: "$320",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Cloud Pink",
            "Cosmic Grey",
            "Cloud Blue",
            "Cosmic Black",
            "Cloud White",
        ]
    },
    "S10Lite": {
        screen: {
            price: "$230",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$85",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$85",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$85",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Prism White",
            "Prism Blue",
            "Prism Black",
        ]
    },
    "S105G": {
        screen: {
            price: "$370",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Majestic Black",
            "Crown Silver",
            "Royal Gold",
        ]
    },
    "S10Plus": {
        screen: {
            price: "$380",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Ceramic White",
            "Prism Blue",
            "Prism Green",
            "Prism Black",
            "Prism White",
            "Flamingo Pink",
        ]
    },
    "S10": {
        screen: {
            price: "$380",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Prism Black",
            "Prism White",
            "Prism Green",
            "Flamingo Pink",
            "Prism Blue",
        ]
    },
    "S10e": {
        screen: {
            price: "$210",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Prism Black",
            "Prism White",
            "Prism Green",
            "Canary Yellow",
            "Flamingo Pink",
            "Prism Blue",
        ]
    },
    "S9Plus": {
        screen: {
            price: "$260",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Sunrise Gold",
            "Midnight Black",
            "Lilac Purple",
            "Grey",
            "Coral Blue",
        ]
    },
    "S9": {
        screen: {
            price: "$250",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$75",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$75",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$75",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Sunrise Gold",
            "Midnight Black",
            "Lilac Purple",
            "Grey",
            "Coral Blue",
        ]
    },
    "S8Plus": {
        screen: {
            price: "$260",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$75",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$75",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$75",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Midnight Black",
            "Grey",
            "Maple Gold",
            "Coral Blue",
            "Arctic Silver",
        ]
    },
    "S8": {
        screen: {
            price: "$220",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Grey",
            "Gold",
            "Coral Blue",
            "Midnight Black",
            "Maple Gold",
            "Arctic Silver",
        ]
    },
    "Note20Ultra": {
        screen: {
            price: "$420",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Mystic Bronze",
            "Mystic Black",
            "Mystic White",
        ]
    },
    "Note205G": {
        screen: {
            price: "$320",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$80",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Mystic Green",
            "Mystic Bronze",
            "Mystic Gray",
        ]
    },
    "Note10Plus": {
        screen: {
            price: "$360",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Aura Black",
            "Aura White",
            "Aura Glow",
        ]
    },
    "Note10Lite": {
        screen: {
            price: "$265",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$95",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$95",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$95",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Aura Glow",
            "Aura Black",
        ]
    },
    "Note10": {
        screen: {
            price: "$410",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Aura Black",
            "Aura Glow",
            "Aura White",
            "Aura Pink",
        ]
    },
    "Note9": {
        screen: {
            price: "$270",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Cloud Silver",
            "Alpine White",
            "Ocean",
        ]
    },
    "Note8": {
        screen: {
            price: "$270",
            warranty: "90 day",
            duration: "1 hour",
        },
        battery: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        charging: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        backglass: {
            price: "$70",
            warranty: "90 day",
            duration: "45 minutes",
        },
        colors: [
            "Grey",
            "Gold",
            "Coral Blue",
            "Midnight Black",
            "Maple Gold",
            "Arctic Silver",
        ]
    },
}





export { devices, devicesWithHomeButton }