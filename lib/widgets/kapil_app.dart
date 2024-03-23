import 'package:flutter/material.dart';

import 'package:kapil_frontend_project/widgets/dashboard/dashboard.dart';

class KapilApp extends StatelessWidget {
  const KapilApp({super.key});

  @override
  Widget build(context) {
    return const Scaffold(
      body: Dashboard(),
    );
  }
}
