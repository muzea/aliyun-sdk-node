export interface DescribeTableDetailResponse {
    /**
     * 平均分区行数。
     * @example `0`
     */
    AvgSize: number;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 分区列表。
     */
    Items: {
        Shard: {
            /**
             * 表大小，行数。
             * @example `0`
             */
            Size: number;
            /**
             * 分区号（只返回分区名数字部分）。
             * @example `1`
             */
            Id: number;
        }[];
    };
}
