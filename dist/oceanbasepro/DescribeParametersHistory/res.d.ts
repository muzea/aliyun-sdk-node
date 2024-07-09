export interface DescribeParametersHistoryResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 参数修改历史列表。
     */
    Respond: {
        /**
         * 查询到的参数修改历史记录数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 每页记录数。
         * @example `10`
         */
        PageNumber: number;
        /**
         * 参数修改历史列表信息。
         */
        Parameters: {
            /**
             * 修改状态。
             * - APPLIED：成功。
             * - SCHEDULING：待修改。
             * @example `APPLIED`
             */
            Status: string;
            /**
             * 参数修改前的值。
             * @example `300`
             */
            OldValue: string;
            /**
             * 参数修改的生效时间。
             * @example `2021-09-14 10:57:44`
             */
            UpdateTime: string;
            /**
             * 参数修改的发起时间。
             * @example `2021-09-14 10:57:44`
             */
            CreateTime: string;
            /**
             * 参数类型的资源标识。
             * - 如为集群，则为 DEFAULT_DIMENSION_VALUE。
             * - 若为租户的参数，则返回租户的 TenantId。
             * @example `DEFAULT_DIMENSION_VALUE`
             */
            DimensionValue: string;
            /**
             * 参数名称。
             * @example `connect_timeout`
             */
            Name: string;
            /**
             * 参数修改后的值。
             * @example `200`
             */
            NewValue: string;
        }[];
    }[];
}
