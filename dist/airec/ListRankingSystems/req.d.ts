export interface ListRankingSystemsRequest {
    /**
     * 实例ID
     * @example `airec-test`
     */
    "instanceId"?: string;
    /**
     * 排序服务名称
     * @example `service-a`
     */
    "name"?: string;
    /**
     * 查询部署状态：
     * NOT_DEPLOYED 未部署
     * DEPLOY_SUCCESS 部署成功
     * @example `NOT_DEPLOYED`
     */
    "deployStatus"?: string;
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
