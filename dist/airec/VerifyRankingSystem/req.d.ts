export interface VerifyRankingSystemRequest {
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
      "userFeatures": "a:c,d:b",
      "itemFeatures": "a:1,b:2"
    }`
     */
    "body"?: any;
}
