export interface DescribeAttestorsRequest {
    /**
     * 访问源的IP地址。
     * @example `222.35.XXX.XXX`
     */
    "SourceIp"?: string;
    /**
     * 证明者名称。
     * @example `attestor-auto-ad5316`
     */
    "Name"?: string;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize"?: number;
}
