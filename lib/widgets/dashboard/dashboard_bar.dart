import 'package:flutter/material.dart';

class DashboardBar extends StatelessWidget {
  const DashboardBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          width: 100,
          height: 10,
          decoration: const BoxDecoration(color: Colors.green),
        ),
        Container(
          width: 310,
          height: 10,
          decoration: const BoxDecoration(color: Colors.yellow),
        ),
      ],
    );
  }
}
