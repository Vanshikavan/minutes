import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Free",
        price: 0,
        period: "month",
        features: [
            "20 Free Credits monthly",
            "Standard quality (720p)",
            "No watermark",
            "Slower generation speed",
            "Email support",
            
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 6,
        period: "month",
        features: [
            "80 Monthly Credits",
            "HD quality (1080p)",
            "No watermark",
            "Video generation included",
            "Priority support",
            "Fast processing speed"
        ],
        mostPopular: true
    },
    {
        name: "Premium",
        price: 26,
        period: "month",
        features: [
            "240 Monthly Credits",
            "FHD quality (1080p+)",
            "No watermark",
            "Fastest generation speed",
            "Video generation included",
            "Chat + Email support",
            "Priority processing queue"
        ],
        mostPopular: false
    }
];