export interface GetScoreInfoRequest {
    /**
     * 目前暂不支持分页查询，传值传空字符串即可。
     * @example `""`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
