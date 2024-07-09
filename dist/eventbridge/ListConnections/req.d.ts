export interface ListConnectionsRequest {
    /**
     * 获取指定连接配置名称的参数，支持前缀匹配查询
     * @example `connection-name`
     */
    "ConnectionNamePrefix"?: string;
    /**
     * 限定每次返回的最大条数，可以和nextToken搭配使用实现翻页能力。
     * - 默认值是10
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 当指定MaxResults时，如果还有多余的返回值则会返回NextToken。
     * - NextToken值默认是从0开始计算的，默认值是0。
     * @example `0`
     */
    "NextToken"?: string;
}
