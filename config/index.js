import { version } from "../package.json";

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: "basic-skirt",
  version,
  design: "Roopin619",
  code: "Roopin619",
  department: "womenswear",
  type: "pattern",
  difficulty: 3,
  tags: [
    "freesewing",
    "design",
    "diy",
    "fashion",
    "made to measure",
    "parametric design",
    "pattern",
    "sewing",
    "sewing pattern"
  ],
  optionGroups: {},
  measurements: ["length","frontWaistArc","backWaistArc","hemLine","frontHipArc","backHipArc"],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ["front", "back"],
  options: {
    manipulateHem: { mm: 0, min: -50.8, max: 50.8 },
    frontLeftDartLength: { mm: 86.4, min: 35.6, max: 137.2 },
    frontRightDartLength: { mm: 86.4, min: 35.6, max: 137.2 },
    backLeftDartLength: { mm: 139.7, min: 88.9, max: 190.5 },
    backRightDartLength: { mm: 127, min: 76.2, max: 177.8 },
    frontDartWidth: { mm: 12.7, min: 0, max: 63.5 },
    backDartWidth: { mm: 19, min: 0, max: 69.8 },
    waistDartPosition: { mm: 86.4, min: 35.6, max: 137.2 },
    naturalWaistToHip: { mm: 228.6, min: 177.8, max: 279.4 },
    dartGap: { mm: 25.4, min: 12.7, max: 50.8 }
  }
};
