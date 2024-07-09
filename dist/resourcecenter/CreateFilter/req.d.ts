export interface CreateFilterRequest {
    /**
     * 筛选条件名称。
     * @example `我的筛选条件。`
     */
    "FilterName": string;
    /**
     * 筛选条件。
     * @example `{
      "regions": [],
      "tagFilters": [
        [{ "type": "notContainTagKey", "tagKey": "xxx", "tagValue": "" }],
        [{ "tagKey": "xxx", "tagValue": "xxx" }]
      ],
      "resourceTypes": [
        "ACS::ECS::AutoSnapshotPolicy"
      ]
    }
    `
     */
    "FilterConfiguration": string;
}
