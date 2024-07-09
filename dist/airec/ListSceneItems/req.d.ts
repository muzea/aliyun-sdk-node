export interface ListSceneItemsRequest {
    /**
     * 实例id
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 场景id
     * @example `testid`
     */
    "sceneId": string;
    /**
     * 运营规则id
     * @example `1`
     */
    "operationRuleId"?: string;
    /**
     * 选品规则id
     * @example `1`
     */
    "selectionRuleId"?: string;
    /**
     * 指定页码，默认为：1
     * @example `1`
     */
    "page"?: number;
    /**
     * 指定每页展示条数，默认为10，限制:[1-50]
     * @example `10`
     */
    "size"?: number;
    /**
     * 预览类型：
     * PREVIEW_ITEM 单独预览选品规则预览结果
     * PREVIEW_QUERY 预览整体配置结果
     * @example `PREVIEW_ITEM`
     */
    "previewType"?: string;
    /**
     * 查询数量
     * @example `20`
     */
    "queryCount"?: number;
}
