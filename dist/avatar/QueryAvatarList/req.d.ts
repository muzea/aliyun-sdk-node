export interface QueryAvatarListRequest {
    /**
     * 租户ID，从虚拟数字人开放平台的对应业务配置的开发者信息中获取的TenantId
     * @example `9185`
     */
    "TenantId": number;
    /**
     * 模型类型：
     * - 2d 只查询2d人物
     * - 3d 只查询3d人物
     * @example `2d`
     */
    "ModelType": string;
    /**
     * 页码。默认值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页查询时每页的条目数。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
