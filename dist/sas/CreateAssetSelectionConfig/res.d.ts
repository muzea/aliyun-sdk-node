export interface CreateAssetSelectionConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A3D7C47D-3F11-57BB-90E8-E5C20C619F37`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 目标资产类型。取值：
         * - **instance**：按服务器选择。
         * - **group**：按分组选择。
         * - **vpc**：按VPC选择。
         * @example `group`
         */
        TargetType: string;
        /**
         * 本次资产选择的唯一标识，可用于查询、修改此次资产选择对应的资产。
         * @example `53e93435-d694-4c03-9ce7-da12bee1****`
         */
        SelectionKey: number;
        /**
         * 资产选择业务类型。取值：
         * - **VIRUS\_SCAN\_CYCLE\_CONFIG**：病毒查杀配置
         * - **VIRUS\_SCAN\_ONCE\_TASK**：病毒查杀一次性扫描
         * @example `VIRUS_SCAN_CYCLE_CONFIG`
         */
        BusinessType: string;
    };
}
