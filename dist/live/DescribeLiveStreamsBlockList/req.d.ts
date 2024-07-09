export interface DescribeLiveStreamsBlockListRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 当前页码。默认值为**1**。
     * @example `2`
     */
    "PageNum"?: number;
    /**
     * 每页大小。取值范围：**1~3000**，默认值为**2000**。
     * @example `10`
     */
    "PageSize"?: number;
}
