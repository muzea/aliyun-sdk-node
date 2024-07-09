export interface DescribeZoneRecordsResponse {
    /**
     * 分页大小。
     * @example `100`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `7B07FBC3-3A53-4939-A3C6-2BDFE407BAB2`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 解析记录总页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 解析记录总数。
     * @example `100`
     */
    TotalItems: number;
    Records: {
        /**
         * 解析记录列表。
         */
        Record: {
            /**
             * 解析记录状态。
             * - ENABLE：启用
             * - DISABLE：暂停
             * @example `ENABLE`
             */
            Status: string;
            /**
             * 解析记录类型。
             * @example `A`
             */
            Type: string;
            /**
             * 记录值。
             * @example `127.0.0.1`
             */
            Value: string;
            /**
             * 生存时间。
             * @example `60`
             */
            Ttl: number;
            /**
             * 备注。
             * @example `xxx`
             */
            Remark: string;
            /**
             * 解析记录ID。
             * @example `2469595025`
             */
            RecordId: number;
            /**
             * 主机记录。
             * @example `www`
             */
            Rr: string;
            /**
             * MX记录的优先级。
             * @example `10`
             */
            Priority: number;
            /**
             * 解析线路。
             * @example `default`
             */
            Line: string;
            /**
             * 权重。
             * @example `1`
             */
            Weight: number;
            /**
             * 创建时间。
             * @example `2019-03-14T03:47Z`
             */
            CreateTime: string;
            /**
             * 更新时间。
             * @example `2023-05-08T02:31Z`
             */
            UpdateTime: string;
            /**
             * 创建时间（时间戳）。
             * @example `1672740294000`
             */
            CreateTimestamp: number;
            /**
             * 更新时间（时间戳）。
             * @example `1654777678000`
             */
            UpdateTimestamp: number;
            /**
             * Zone ID。
             * @example `a49f55537f3b0b1e6e43add0bf5f0033`
             */
            ZoneId: string;
        }[];
    };
}
