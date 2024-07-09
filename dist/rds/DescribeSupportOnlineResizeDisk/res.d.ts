export interface DescribeSupportOnlineResizeDiskResponse {
    /**
     * 请求ID。
     * @example `8B993DA9-5272-5414-94E3-4CA8BA0146C2`
     */
    RequestId: string;
    /**
     * 是否请求成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 响应结果集。
     * @example `{
          "SupportOnlineResizeDisk": true,
          "DBInstanceName": "rm-bp****",
          "maxSupportDiskSizeGB": 6144
    }`
     */
    Data: string;
    /**
     * 响应码信息。
     * @example `success`
     */
    Message: string;
}
