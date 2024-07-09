export interface DescribeTransferDomainsResponse {
    /**
     * 列表总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    PageSize: number;
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    PageNumber: number;
    DomainTransfers: {
        /**
         * 跨账号转移DNS列表。
         */
        DomainTransfer: {
            /**
             * 域名转出的原始用户ID。
             * @example `2222`
             */
            FromUserId: number;
            /**
             * 创建时间。
             * @example `2019-10-30T07:16Z`
             */
            CreateTime: string;
            /**
             * 转移到的目标用户ID。
             * @example `111111`
             */
            TargetUserId: number;
            /**
             * 域名。
             * @example `dns-example.top`
             */
            DomainName: string;
            /**
             * 转移记录的ID。
             * @example `1`
             */
            Id: number;
            /**
             * 创建时间（时间戳）。
             * @example `1572419764000`
             */
            CreateTimestamp: number;
        }[];
    };
}
