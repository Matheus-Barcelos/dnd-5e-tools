import * as Equipment from "../../models/equipment/";
import { WeaponList } from "./weapon-list";

export const Warhammer: Equipment.Weapon = new Equipment.Weapon({
    name: "Warhammer",
    type: Equipment.WeaponType.Martial,
    properties: [Equipment.WeaponProperty.Versatile],
    damageType: Equipment.DamageType.Bludgeoning,
    damageDice: "1d8"
});

WeaponList.push(Warhammer);
