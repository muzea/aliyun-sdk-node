export interface ModifyRankingSystemRequest {
    /**
     * 实例ID
     * @example `airec-test`
     */
    "instanceId": string;
    /**
     * 排序服务
     * @example `"service-a`
     */
    "name": string;
    /**
     * 配置
     * @example `{}`
     */
    "body"?: any;
}
