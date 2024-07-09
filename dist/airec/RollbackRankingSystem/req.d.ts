export interface RollbackRankingSystemRequest {
    /**
     * 实例ID。
     * @example `airec-cn-****`
     */
    "instanceId": string;
    /**
     * 排序服务名称。
     * @example `service-a`
     */
    "name": string;
    /**
     * 请求Body参数。
     * @example `{
        "operateId": "a-b-c"
    }`
     */
    "body"?: any;
}
