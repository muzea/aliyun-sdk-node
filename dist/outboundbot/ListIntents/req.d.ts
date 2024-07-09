export interface ListIntentsRequest {
    /**
     * 实例id
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `b9ff4e88-65f9-4eb3-987c-11ba51f3f24d`
     */
    "ScriptId": string;
    /**
     * 过滤条件，意图关键字
     * @example `""`
     */
    "Keyword"?: string;
    /**
     * 页号
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 个数
     * @example `10`
     */
    "PageSize": number;
}
