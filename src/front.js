export default function(part) {
  let { Point, points, Path, paths, measurements, options } = part.shorthand();
  const inch = 25.4;

  // Design pattern here
  points.origin = new Point(0, 0);
  points.rHem = points.origin.translate(measurements.hemLine / 7, measurements.length);
  points.lHem = points.origin.shift(-90, measurements.length);
  points.rHip = points.origin.translate(measurements.frontHipArc / 2, options.naturalWaistToHip);
  points.rWaist = points.origin.translate(measurements.frontWaistArc / 2 + inch, -(3/8) * inch);
  points.cp1 = points.rHip.shift(90, -points.rHip.dy(points.origin) / 2);
  points.cp2 = points.rHip.shift(-90, points.rHip.dy(points.rHem) / 2.5);
  points.leftDartL = points.origin.shift(0, options.waistDartPosition);
  points.leftDartR = points.leftDartL.shift(0, options.frontDartWidth);
  points.leftDartC = points.leftDartL.shift(0, options.frontDartWidth / 2);
  points.leftDartPoint = points.leftDartC.shift(-90, options.frontLeftDartLength);
  points.rightDartL = points.leftDartR.shift(0, options.dartGap);
  points.rightDartR = points.rightDartL.shiftTowards(points.rWaist, options.frontDartWidth);
  points.rightDartC = points.rightDartL.shiftTowards(points.rWaist, options.frontDartWidth / 2);
  points.rightDartPoint = points.rightDartC.shift(-90, options.frontRightDartLength);
  points.topRight = points.origin.shift(0, measurements.frontHipArc / 2);
  points.bottomRight = points.topRight.shift(-90, measurements.length);

  paths.rectangle = new Path()
    .move(points.origin)
    .line(points.lHem)
    .line(points.bottomRight)
    .line(points.topRight)
    .line(points.origin)
    .close()
    .attr("class", "various dashed");
  
  paths.front = new Path()
    .move(points.origin)
    .line(points.lHem)
    .line(points.rHem)
    ._curve(points.cp2, points.rHip)
    ._curve(points.cp1, points.rWaist)
    .line(points.rightDartR)
    .line(points.rightDartPoint)
    .line(points.rightDartL)
    .line(points.leftDartR)
    .line(points.leftDartPoint)
    .line(points.leftDartL)
    .line(points.origin)
    .close(); 

  // Complete?
  if (complete) {
    if (sa) {
    }
    // Paperless?
    if (paperless) {
    }
  }
  return part;
}
