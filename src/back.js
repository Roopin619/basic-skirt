export default function(part) {
    let { Point, points, Path, paths, measurements, options } = part.shorthand();
    const inch = 25.4;

    // Design pattern here
    points.origin = new Point(0, 0);
    points.lHem = points.origin.translate(-(measurements.hemLine/4 - inch/2), measurements.length);
    points.rHem = points.origin.shift(-90, measurements.length);
    points.lHip = points.origin.translate(-measurements.backHipArc, options.naturalWaistToHip);
    points.lWaist = points.origin.translate(-(measurements.backWaistArc / 2 + 1.4 * inch), -(3/8) * inch);
    points.waistCp = points.lWaist.shift(-195, points.origin.dx(points.lWaist) / 3);
    points.cp1 = points.lHip.shift(90, -points.lHip.dy(points.origin) / 2);
    points.cp2 = points.lHip.shift(-90, points.lHip.dy(points.lHem) / 2.5);
    points.topLeft = points.origin.shift(180, measurements.backHipArc);
    points.bottomLeft = points.topLeft.shift(-90, measurements.length);

    paths.waistCurve = new Path()
    .move(points.origin)
    ._curve(points.waistCp, points.lWaist)

    // Dart Points
    points.rightDartC = paths.waistCurve
      .shiftAlong(options.waistDartPosition);
    points.rightDartL = paths.waistCurve
      .shiftAlong(options.waistDartPosition + options.backDartWidth/2);
    points.rightDartR = paths.waistCurve
      .shiftAlong(options.waistDartPosition - options.backDartWidth/2);
    points.rightDartPoint = points.rightDartC
      .shift(-90, options.backRightDartLength);
    points.leftDartR = paths.waistCurve
      .shiftAlong(options.waistDartPosition + options.backDartWidth/2 + options.dartGap);
    points.leftDartL = paths.waistCurve
      .shiftAlong(options.waistDartPosition + options.backDartWidth/2 + options.dartGap + options.backDartWidth);
    points.leftDartC = paths.waistCurve
      .shiftAlong(options.waistDartPosition + options.backDartWidth/2 + options.dartGap + options.backDartWidth/2);
    points.leftDartPoint = points.leftDartC
      .shift(-91, options.backLeftDartLength);
    
    paths.rectangle = new Path()
      .move(points.origin)
      .line(points.rHem)
      .line(points.bottomLeft)
      .line(points.topLeft)
      .line(points.origin)
      .close()
      .attr("class", "various dashed");

    paths.seam = new Path()
      .move(points.origin)
      .line(points.rHem)
      .line(points.lHem)
      ._curve(points.cp2, points.lHip)
      ._curve(points.cp1, points.lWaist)

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
  