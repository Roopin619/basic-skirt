export default function(part) {
  let { Point, points, Path, paths, measurements, options } = part.shorthand();
  const inch = 25.4;

  // Design pattern here
  points.origin = new Point(0, 0);
  points.rHem = points.origin.translate(measurements.hemLine / 4 - inch / 2, measurements.length);
  points.lHem = points.origin.shift(-90, measurements.length);
  points.rHip = points.origin.translate(measurements.frontHipArc, options.naturalWaistToHip);
  points.rWaist = points.origin.translate(measurements.frontWaistArc / 2 + inch, -(3/8) * inch);
  points.waistCp = points.rWaist.shift(195, points.origin.dx(points.rWaist) / 3);
  points.cp1 = points.rHip.shift(90, -points.rHip.dy(points.origin) / 2);
  points.cp2 = points.rHip.shift(-90, points.rHip.dy(points.rHem) / 2.5);
  points.topRight = points.origin.shift(0, measurements.frontHipArc);
  points.bottomRight = points.topRight.shift(-90, measurements.length);

  paths.waistCurve = new Path()
    .move(points.origin)
    ._curve(points.waistCp, points.rWaist)

  // Dart points
  points.leftDartC = paths.waistCurve
    .shiftAlong(options.waistDartPosition);
  points.leftDartR = paths.waistCurve
    .shiftAlong(options.waistDartPosition + options.frontDartWidth/2);
  points.leftDartL = paths.waistCurve
    .shiftAlong(options.waistDartPosition - options.frontDartWidth/2);
  points.leftDartPoint = points.leftDartC
    .shift(-90, options.frontLeftDartLength);
  points.rightDartL = paths.waistCurve
    .shiftAlong(options.waistDartPosition + options.frontDartWidth/2 + options.dartGap);
  points.rightDartR = paths.waistCurve
    .shiftAlong(options.waistDartPosition + options.frontDartWidth/2 + options.dartGap + options.frontDartWidth);
  points.rightDartC = paths.waistCurve
    .shiftAlong(options.waistDartPosition + options.frontDartWidth/2 + options.dartGap + options.frontDartWidth/2);
  points.rightDartPoint = points.rightDartC
    .shift(-87, options.frontRightDartLength);

  paths.rectangle = new Path()
    .move(points.origin)
    .line(points.lHem)
    .line(points.bottomRight)
    .line(points.topRight)
    .line(points.origin)
    .close()
    .attr("class", "various dashed");
  
  paths.seam = new Path()
    .move(points.origin)
    .line(points.lHem)
    .line(points.rHem)
    ._curve(points.cp2, points.rHip)
    ._curve(points.cp1, points.rWaist)
    
  paths.leftDart = new Path()
    .move(points.leftDartL)
    .line(points.leftDartPoint)
    .line(points.leftDartR)

  paths.rightDart = new Path()
    .move(points.rightDartL)
    .line(points.rightDartPoint)
    .line(points.rightDartR)

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
