export interface GetBusinessCategoryListRequest {
    /**
     * 传值为空字符串即可
     * @example `""`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     * @example `123456`
     */
    "BaseMeAgentId"?: number;
}
