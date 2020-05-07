export default function(part) {
    let { Point, points, Path, paths, measurements, options } = part.shorthand();
    const inch = 25.4;

    // Design pattern here
    points.origin = new Point(0, 0);
    points.lHem = points.origin.translate(-measurements.hemLine / 7, measurements.length);
    points.rHem = points.origin.shift(-90, measurements.length);
    points.lHip = points.origin.translate(-measurements.backHipArc / 2, options.naturalWaistToHip);
    points.lWaist = points.origin.translate(-(measurements.backWaistArc / 2 + 1.4 * inch), -(3/8) * inch);
    points.cp1 = points.lHip.shift(90, -points.lHip.dy(points.origin) / 2);
    points.cp2 = points.lHip.shift(-90, points.lHip.dy(points.lHem) / 2.5);
    points.rightDartR = points.origin.shift(180, options.waistDartPosition);
    points.rightDartL = points.rightDartR.shift(180, options.backDartWidth);
    points.rightDartC = points.rightDartR.shift(180, options.backDartWidth / 2);
    points.rightDartPoint = points.rightDartC.shift(-90, options.backRightDartLength);
    points.leftDartR = points.rightDartL.shift(180, options.dartGap);
    points.leftDartL = points.leftDartR.shiftTowards(points.lWaist, options.backDartWidth);
    points.leftDartC = points.leftDartR.shiftTowards(points.lWaist, options.backDartWidth / 2);
    points.leftDartPoint = points.leftDartC.shift(-90, options.backLeftDartLength);
    points.topLeft = points.origin.shift(180, measurements.backHipArc / 2);
    points.bottomLeft = points.topLeft.shift(-90, measurements.length);
    
    paths.rectangle = new Path()
      .move(points.origin)
      .line(points.rHem)
      .line(points.bottomLeft)
      .line(points.topLeft)
      .line(points.origin)
      .close()
      .attr("class", "various dashed");

    paths.front = new Path()
      .move(points.origin)
      .line(points.rHem)
      .line(points.lHem)
      ._curve(points.cp2, points.lHip)
      ._curve(points.cp1, points.lWaist)
      .line(points.leftDartL)
      .line(points.leftDartPoint)
      .line(points.leftDartR)
      .line(points.rightDartL)
      .line(points.rightDartPoint)
      .line(points.rightDartR)
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
  