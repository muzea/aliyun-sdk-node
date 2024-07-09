export interface DescribeSubDomainRecordsResponse {
    /**
     * 解析记录总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 本次查询获取的解析数量。
     * @example `2`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    DomainRecords: {
        /**
         * 解析记录列表。
         */
        Record: {
            /**
             * 解析记录状态。
             * @example `Enable`
             */
            Status: string;
            /**
             * 记录类型。
             * @example `CNAME`
             */
            Type: string;
            /**
             * 解析记录的权重。
             * @example `10`
             */
            Weight: number;
            /**
             * 记录值。
             * @example `example.net`
             */
            Value: string;
            /**
             * 生存时间。
             * @example `600`
             */
            TTL: number;
            /**
             * 解析线路。
             * @example `default`
             */
            Line: string;
            /**
             * 解析记录ID。
             * @example `9999985`
             */
            RecordId: string;
            /**
             * MX记录的优先级。
             * @example `2`
             */
            Priority: number;
            /**
             * 主机记录。
             * @example `www`
             */
            RR: string;
            /**
             * 域名名称。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 解析记录锁定状态。
             * @example `false`
             */
            Locked: boolean;
            /**
             * 备注信息。
             * @example `test`
             */
            Remark: string;
        }[];
    };
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
}
