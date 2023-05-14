"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const musclePortions = [
    {
        "id": 1,
        "name": "Upper Major Chest"
    },
    {
        "id": 2,
        "name": "Medial Major Chest"
    },
    {
        "id": 3,
        "name": "Lower Major Chest"
    },
    {
        "id": 4,
        "name": "Minor Chest"
    },
    {
        "id": 5,
        "name": "Anterior Serratus"
    },
    {
        "id": 6,
        "name": "Subclavio"
    },
    {
        "id": 7,
        "name": "Latisimus dorsi"
    },
    {
        "id": 8,
        "name": "Posterior Serratus"
    },
    {
        "id": 9,
        "name": "Lumbar"
    },
    {
        "id": 10,
        "name": "Upper Trapezius"
    },
    {
        "id": 11,
        "name": "Medial Trapezius"
    },
    {
        "id": 12,
        "name": "Lower Trapezius"
    },
    {
        "id": 13,
        "name": "Minor Rhomboid"
    },
    {
        "id": 14,
        "name": "Major Rhomboid"
    },
    {
        "id": 15,
        "name": "Levator Scapulae"
    },
    {
        "id": 16,
        "name": "Bíceps Long head"
    },
    {
        "id": 17,
        "name": "Bíceps Short head"
    },
    {
        "id": 18,
        "name": "Bíceps Brachialis"
    },
    {
        "id": 19,
        "name": "Tríceps Long head"
    },
    {
        "id": 20,
        "name": "Tríceps Short head"
    },
    {
        "id": 21,
        "name": "Tríceps Lateral head"
    },
    {
        "id": 22,
        "name": "Forearm Pronator teres"
    },
    {
        "id": 23,
        "name": "Forearm Flexor carpi radials"
    },
    {
        "id": 24,
        "name": "Forearm Flexor carpi ulnaris"
    },
    {
        "id": 25,
        "name": "Forearm Palmaris longus"
    },
    {
        "id": 26,
        "name": "Glúteos medius"
    },
    {
        "id": 27,
        "name": "Glúteos minimus"
    },
    {
        "id": 28,
        "name": "Glúteos maximus"
    },
    {
        "id": 29,
        "name": "Pelvic floor"
    },
    {
        "id": 30,
        "name": "Transversus Abdominis"
    },
    {
        "id": 31,
        "name": "Multifidus"
    },
    {
        "id": 32,
        "name": "Internal Obliques"
    },
    {
        "id": 33,
        "name": "External Obliques"
    },
    {
        "id": 34,
        "name": "Rectus Abdominis"
    },
    {
        "id": 35,
        "name": "Erector spinae"
    },
    {
        "id": 36,
        "name": "Bíceps Femoris"
    },
    {
        "id": 37,
        "name": "Semitendinosus"
    },
    {
        "id": 38,
        "name": "Semimembranosus"
    },
    {
        "id": 39,
        "name": "Vastus lateralis"
    },
    {
        "id": 40,
        "name": "Vastus medials"
    },
    {
        "id": 41,
        "name": "Vastus intermedius"
    },
    {
        "id": 42,
        "name": "Rectus Femoris"
    },
    {
        "id": 43,
        "name": "Gastrocnemius"
    },
    {
        "id": 44,
        "name": "Soleos"
    },
    {
        "id": 45,
        "name": "Deltoid Anterior"
    },
    {
        "id": 46,
        "name": "Deltoid Medium"
    },
    {
        "id": 47,
        "name": "Deltoid Lateral"
    },
    {
        "id": 48,
        "name": "Sternocleidomastoid"
    },
    {
        "id": 49,
        "name": "Splenius"
    },
    {
        "id": 50,
        "name": "Tensor Fasciae Latae"
    },
    {
        "id": 51,
        "name": "Sartorius"
    },
    {
        "id": 52,
        "name": "Supraspinatus"
    },
    {
        "id": 53,
        "name": "Extensor Carpi Radialis Longus"
    },
    {
        "id": 54,
        "name": "Extensor Carpi Radialis Brevis"
    },
    {
        "id": 55,
        "name": "Extensor Carpi Ulnaris"
    },
    {
        "id": 56,
        "name": "Adductor longus"
    },
    {
        "id": 57,
        "name": "Adductor brevis"
    },
    {
        "id": 58,
        "name": "Adductor magnus"
    },
    {
        "id": 59,
        "name": "Gracillis"
    },
    {
        "id": 60,
        "name": "Infraspinatus"
    },
    {
        "id": 61,
        "name": "Teres Minor"
    },
    {
        "id": 62,
        "name": "Teres Major"
    },
    {
        "id": 63,
        "name": "Pectineus"
    },
    {
        "id": 64,
        "name": "Piriformis"
    },
    {
        "id": 65,
        "name": "Quadratus Femoris"
    },
    {
        "id": 66,
        "name": "Obturator externus"
    },
    {
        "id": 67,
        "name": "Obturator internus"
    },
    {
        "id": 68,
        "name": "Superior Gemellus"
    },
    {
        "id": 69,
        "name": "Tibialis Anterior"
    },
    {
        "id": 70,
        "name": "Subscapularis"
    },
    {
        "id": 71,
        "name": "Iliopsoas"
    },
    {
        "id": 72,
        "name": "Popliteus"
    },
    {
        "id": 73,
        "name": "Deltoid Posterior"
    },
    {
        "id": 74,
        "name": "Brachioradialis"
    },
    {
        "id": 75,
        "name": "Forearms Supinator"
    },
    {
        "id": 76,
        "name": "Abductor magnus"
    }
];
exports.default = musclePortions;
