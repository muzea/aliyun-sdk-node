export interface ListDomainsRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 分页查询开始的位置。默认值为0。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 分页查询时，设置的每页行数。默认值为500，最大值为500。
     * @example `10`
     */
    "size"?: number;
    /**
     * 用于匹配自定义域名，例如`example.com`会匹配到`a.example.com`与`b.example.com`。
     * @example `example.com`
     */
    "domainName"?: string;
}
