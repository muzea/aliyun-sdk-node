export interface QueryRecommendByCodeResponse {
    /**
     * Id of the request
     * @example `90496720-2319-42A8-87CD-FCE4DF95EBED`
     */
    RequestId: string;
    /**
     * 返回数据。
     * @example `{
          "SupportOnlineResizeDisk": true,
          "DBInstanceName": "rm-bp****",
          "maxSupportDiskSizeGB": 6144
    }`
     */
    Data: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `True`
     */
    Success: boolean;
}
