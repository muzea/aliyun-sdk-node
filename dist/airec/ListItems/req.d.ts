export interface ListItemsRequest {
    /**
     * 实例ID
     * @example `airec-test`
     */
    "instanceId": string;
    /**
     * 默认false，传入true 则使用置顶/定坑侧逻辑，但是必须在body中传入 sceneId
     * @example `false`
     */
    "strategyUsed"?: boolean;
    /**
     * 置顶/定坑侧控制返回值中是否包含InvalidDetail , 用于 itemId:itemType 查询类型使用
     * @example `false`
     */
    "withInvalidDetail"?: boolean;
    /**
     * 页数，默认1
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页数量，默认10
     * @example `10`
     */
    "size"?: number;
}
