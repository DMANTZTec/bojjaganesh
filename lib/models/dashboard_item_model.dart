import 'package:flutter/material.dart';

class DashboardItemModel {
  const DashboardItemModel(
      {required this.title,
      required this.color,
      required this.value,
      required this.logo});

  final String title;
  final String value;
  final Color color;
  final IconData logo;
}
