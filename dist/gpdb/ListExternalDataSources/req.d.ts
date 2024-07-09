export interface ListExternalDataSourcesRequest {
    /**
     * 实例ID。
     * @example `gp-xxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 每页记录数，取值说明：
     * - **30**
     * - **50**
     * - **100**
     * 默认值：30。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 页码，大于0且不超过Integer的最大值，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 实例所在地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
}
