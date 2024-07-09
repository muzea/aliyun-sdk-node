export interface ListApplicationsRequest {
    /**
     * 地域ID，目前仅支持cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 分页大小。取值范围：10-100。默认为50。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记的Token。
     * @example `-`
     */
    "NextToken"?: string;
    /**
     * 标签。
     * @example `{"k1": "v1","k2": "v2"}`
     */
    "Tags"?: any;
    /**
     * 应用名称。
     * @example `["MyApplication"]`
     */
    "Names"?: string;
    /**
     * 名称。
     * @example `"MyApplications"`
     */
    "Name"?: string;
    /**
     * 应用类型。
     * @example `DingTalk`
     */
    "ApplicationType"?: string;
}
