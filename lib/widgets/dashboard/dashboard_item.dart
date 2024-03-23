import 'package:flutter/material.dart';
import 'package:kapil_frontend_project/models/dashboard_item_model.dart';

class DashboardItem extends StatelessWidget {
  const DashboardItem({super.key, required this.itemData});

  final DashboardItemModel itemData;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(color: itemData.color),
      width: 180,
      height: 180,
      padding: const EdgeInsets.all(20),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            itemData.title,
            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
          ),
          const SizedBox(
            height: 10,
          ),
          Text(itemData.value,
              style: const TextStyle(
                  fontSize: 35,
                  fontWeight: FontWeight.w600,
                  color: Colors.white)),
          Row(
            children: [
              const Spacer(),
              Icon(
                itemData.logo,
                size: 50,
              ),
            ],
          )
        ],
      ),
    );
  }
}
