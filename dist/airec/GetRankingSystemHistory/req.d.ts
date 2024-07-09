export interface GetRankingSystemHistoryRequest {
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
     * 操作记录id
     * @example `u-s-a`
     */
    "operateId": string;
}
