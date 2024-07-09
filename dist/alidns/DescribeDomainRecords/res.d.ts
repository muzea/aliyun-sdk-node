export interface DescribeDomainRecordsResponse {
    /**
     * 解析记录总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 本次查询获取的解析数量。
     * @example `20`
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
             * 当前的解析记录状态。
             * @example `Enable`
             */
            Status: string;
            /**
             * 记录类型。
             * @example `MX`
             */
            Type: string;
            /**
             * 备注。
             * @example `备注`
             */
            Remark: string;
            /**
             * 缓存时间设置。单位：秒。
             * @example `600`
             */
            TTL: number;
            /**
             * 解析记录ID。
             * @example `9999985`
             */
            RecordId: string;
            /**
             * mx记录的优先级。
             * @example `5`
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
             * 负载均衡权重。
             * @example `2`
             */
            Weight: number;
            /**
             * 记录值。
             * @example `mail1.hichina.com`
             */
            Value: string;
            /**
             * 解析线路。
             * @example `default`
             */
            Line: string;
            /**
             * 当前解析记录锁定状态。
             * @example `false`
             */
            Locked: boolean;
            /**
             * 创建时间（时间戳）。
             * @example `1666501957000`
             */
            CreateTimestamp: number;
            /**
             * 更新时间（时间戳）。
             * @example `1676872961000`
             */
            UpdateTimestamp: number;
        }[];
    };
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
}
