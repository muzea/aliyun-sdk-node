export interface PushDocumentRequest {
    /**
     * 智能推荐的实例 Id
     * @example `airec-test`
     */
    "instanceId": string;
    /**
     * 行业的3张表，分别是用户表(user)、物品表(item)和行为表(behavior)
     * @example `user`
     */
    "tableName": string;
}
