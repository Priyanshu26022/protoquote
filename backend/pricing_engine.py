PROCESS_COST = {
    "CNC": 120,
    "3D Printing": 90,
    "Injection Molding": 180,
}

MATERIAL_COST = {
    "Aluminium": 25,
    "Steel": 45,
    "Plastic": 15,
}

TOLERANCE_COST = {
    "Low": 0,
    "Medium": 20,
    "High": 40,
}


def calculate_quote(material, process, quantity, tolerance):

    process_cost = PROCESS_COST.get(process, 100)
    material_cost = MATERIAL_COST.get(material, 20)
    tolerance_cost = TOLERANCE_COST.get(tolerance, 20)

    total = (process_cost + material_cost + tolerance_cost) * quantity

    lead_time = max(2, 8 - quantity // 20)

    return {
        "estimated_price": total,
        "lead_time": f"{lead_time} Days",
        "recommended_process": process,
        "cost_breakdown": {
            "process_cost": process_cost,
            "material_cost": material_cost,
            "tolerance_cost": tolerance_cost
        }
    }