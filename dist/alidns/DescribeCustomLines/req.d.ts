export interface DescribeCustomLinesRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页个数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName": string;
}
