export interface ModifyResubmitConfigRequest {
    /**
     * 资源组ID。
     * @example `rg-4690g37929****`
     */
    "ResourceGroupId"?: string;
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL集群的详情，包括集群ID。
     * @example `am-uf6wjk5xxxxxxxxxx`
     */
    "DBClusterId": string;
    /**
     * 作业投递规则。
     */
    "Rules": {
        /**
         * 源资源组名称。
         * @example `test2`
         */
        GroupName: string;
        /**
         * 峰值内存。
         * @example `32`
         */
        PeakMemory: string;
        /**
         * SQL语句执行时长，单位：毫秒（ms）。
         * @example `300`
         */
        QueryTime: string;
        /**
         * 是否配置内存溢出异常。
         * @example `false`
         */
        ExceedMemoryException: boolean;
        /**
         * 目标资源组名称。
         * @example `test_target_group`
         */
        TargetGroupName: string;
    }[];
}
