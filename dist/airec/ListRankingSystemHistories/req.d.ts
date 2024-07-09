export interface ListRankingSystemHistoriesRequest {
    /**
     * 实例ID
     * @example `airec-test`
     */
    "instanceId": string;
    /**
     * 排序服务名称
     * @example `service-a`
     */
    "name": string;
    /**
     * 操作类型：
     * CONF_CHANGE（配置变更）、DEPLOY_CHANGE（部署变更）
     * @example `CONF_CHANGE`
     */
    "operateType"?: string;
    /**
     * 分页，页码
     * @example `1`
     */
    "page"?: number;
    /**
     * 分页，大小
     * @example `10`
     */
    "size"?: number;
}
