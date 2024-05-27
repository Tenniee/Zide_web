// ignore_for_file: prefer_const_constructors

import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

//TODO: Complete
final class HugeIcons {
  static HugeIcon home = HugeIcon(path: '');

  static HugeIcon menu = HugeIcon(path: '');
  static HugeIcon profile = HugeIcon(path: '');
  static HugeIcon chat = HugeIcon(path: '');
  static HugeIcon settings = HugeIcon(path: '');
  static HugeIcon login = HugeIcon(path: '');
  static HugeIcon offer = HugeIcon(path: '');
}

//TODO: Add parameters to SvgPicture.asset params
final class HugeIcon extends StatelessWidget {
  const HugeIcon(
      {super.key,
      required this.path,
      this.width,
      this.height,
      this.fit = BoxFit.contain,
      this.alignment = Alignment.center,
      this.allowDrawingOutsideViewBox = false,
      this.placeholderBuilder,
      this.semanticsLabel,
      this.excludeFromSemantics = false,
      this.theme,
      this.colorFilter,
      this.color,
      this.colorBlendMode = ui.BlendMode.srcIn,
      this.cacheColorFilter = false,
      this.clipBehavior = Clip.hardEdge});

  ///
  final String path;

  final double? width;
  final double? height;
  final BoxFit fit;
  final AlignmentGeometry alignment;
  final bool allowDrawingOutsideViewBox;
  final Widget Function(BuildContext)? placeholderBuilder;
  final String? semanticsLabel;
  final bool excludeFromSemantics;
  final Clip clipBehavior;
  final SvgTheme? theme;
  final ColorFilter? colorFilter;
  final Color? color;
  final BlendMode colorBlendMode;
  final bool cacheColorFilter;

  @override
  Widget build(BuildContext context) {
    return SvgPicture.asset(path);
  }
}
