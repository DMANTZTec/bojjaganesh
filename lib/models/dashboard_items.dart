import 'package:flutter/material.dart';

import 'package:kapil_frontend_project/models/dashboard_item_model.dart';

final dashboardItems = [
  const DashboardItemModel(
    title: "CONTACTS",
    value: '14',
    color: Color.fromARGB(255, 243, 179, 130),
    logo: Icons.phone,
  ),
  const DashboardItemModel(
    title: "SUBSCRIBERS",
    value: '7',
    color: Color.fromARGB(255, 123, 206, 231),
    logo: Icons.people_outline_rounded,
  ),
  const DashboardItemModel(
    title: "BUSINESS",
    value: '67.73',
    color: Color.fromARGB(255, 159, 139, 240),
    logo: Icons.business,
  ),
  const DashboardItemModel(
    title: "FOLLOW UPS",
    value: '6',
    color: Color.fromARGB(255, 227, 211, 61),
    logo: Icons.people,
  ),
];
