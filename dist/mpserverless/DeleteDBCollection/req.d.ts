export interface DeleteDBCollectionRequest {
    /**
     * 服务空间ID。
     * @example `92e26ea9-6450-4b40-9c20-xxxx`
     */
    "SpaceId": string;
    /**
     * 要删除的数据集。格式为JSON字符串，其中command固定值为drop，collection值为要删除的集合名称。
     * @example `{"command": "drop", "collection": "table1"}`
     */
    "Body": string;
}
