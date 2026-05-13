export const categoryColors: Record<
    string,
    {
        text: string
        gradient: string
        hoverGradient: string
        border: string
    }
> = {
    News: {
        text: "text-orange-600",
        gradient: "from-orange-100 to-white",
        hoverGradient:"hover:from-orange-100 hover:to-white",
        border: "hover:border-orange-200"
    },
    "Byte Take": {
        text: "text-amber-600",
        gradient: "from-amber-100 to-white",
        hoverGradient:"hover:from-amber-100 hover:to-white",
        border: "hover:border-amber-200"
    },
    Review: {
        text: "text-red-600",
        gradient: "from-red-100 to-white",
        hoverGradient:"hover:from-red-100 hover:to-white",
        border: "hover:border-red-200"
    },
    "Play Log": {
        text: "text-emerald-600",
        gradient: "from-emerald-100 to-white",
        hoverGradient:"hover:from-emerald-100 hover:to-white",
        border: "hover:border-emerald-200"
    }
}