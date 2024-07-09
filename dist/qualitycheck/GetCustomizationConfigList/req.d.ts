export interface GetCustomizationConfigListRequest {
    /**
     * 入参jsonStr的值传空字符串即可。
     * @example `""`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
