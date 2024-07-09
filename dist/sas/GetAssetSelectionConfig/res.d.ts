export interface GetAssetSelectionConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C5936B67-3EDF-53ED-A542-02543972449A`
     */
    RequestId: string;
    /**
     * 数据详情。
     */
    Data: {
        /**
         * 目标资产类型。取值：
         * - **instance**：按服务器选择。
         * - **group**：按分组选择。
         * - **vpc**：按VPC选择。
         * @example `instance`
         */
        TargetType: string;
        /**
         * 本次资产选择的唯一标识，可用于查询、修改此次资产选择对应的资产。
         * @example `657c8411-4e89-446c-ab66-d45d1331****`
         */
        SelectionKey: string;
    };
}
