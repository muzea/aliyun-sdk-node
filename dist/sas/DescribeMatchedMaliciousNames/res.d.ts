export interface DescribeMatchedMaliciousNamesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C7CD1BE6-97A2-5524-A529-B55C63E55D59`
     */
    RequestId: string;
    /**
     * 分页查询时，当前页显示的数据条数。
     * @example `1`
     */
    Count: number;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 恶意样本类型Key。
         * @example `key`
         */
        Key: string;
        /**
         * 恶意样本类型显示名称。
         * @example `displayname`
         */
        DisplayName: string;
    }[];
}
