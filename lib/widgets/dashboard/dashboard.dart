import 'package:flutter/material.dart';
import 'package:kapil_frontend_project/widgets/dashboard/goal_container.dart';
import 'package:kapil_frontend_project/widgets/dashboard/dashboard_bar.dart';
import 'package:kapil_frontend_project/widgets/dashboard/dashboard_item.dart';
import 'package:kapil_frontend_project/models/dashboard_items.dart';
import 'package:kapil_frontend_project/widgets/app_header.dart';

class Dashboard extends StatelessWidget {
  const Dashboard({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        AppBar(
          title: const AppHeader(),
          backgroundColor: const Color.fromARGB(255, 248, 233, 105),
        ),
        const GoalContainer(),
        const DashboardBar(),
        Expanded(
          child: Container(
            padding: const EdgeInsets.all(20),
            height: double.infinity,
            width: double.infinity,
            color: const Color.fromARGB(255, 214, 233, 248),
            child: Column(
              children: [
                const Row(
                  children: [
                    Text(
                      'My Data',
                      style:
                          TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
                    ),
                    Spacer(),
                    Text('Last 7 days'),
                  ],
                ),
                const SizedBox(
                  height: 30,
                ),
                Wrap(
                  spacing: 10,
                  runSpacing: 10,
                  alignment: WrapAlignment.center,
                  children: [
                    ...dashboardItems.map(
                      (item) => DashboardItem(itemData: item),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
