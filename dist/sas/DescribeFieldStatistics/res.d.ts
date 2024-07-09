export interface DescribeFieldStatisticsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 查询到的服务器资产的信息。
     */
    GroupedFields: {
        /**
         * 离线服务器的数量。
         * @example `21`
         */
        OfflineInstanceCount: number;
        /**
         * 无风险资产数量。
         * @example `10`
         */
        NoRiskInstanceCount: number;
        /**
         * 未知资产开启状态的数量。
         * @example `1`
         */
        UnKnowStatusInstanceCount: number;
        /**
         * 服务器所属的地域数量。
         * @example `11`
         */
        RegionCount: number;
        /**
         * 新增服务器数量。
         * @example `10`
         */
        NewInstanceCount: number;
        /**
         * 暴露资产数。
         * @example `1`
         */
        ExposedInstanceCount: number;
        /**
         * 服务器组数量。
         * @example `20`
         */
        GroupCount: number;
        /**
         * 第三方云服务器数量。
         * @example `10`
         */
        TencentInstanceCount: number;
        /**
         * 一般资产数量。
         * @example `10`
         */
        GeneralAssetCount: number;
        /**
         * 您查询时指定的资产类型下的任务数量。如果查询时没有指定资产类型，此处的数量是您资产中所有服务器和云产品的数量之和。
         * @example `10`
         */
        InstanceSyncTaskCount: number;
        /**
         * 未受保护的资产数量。
         * @example `10`
         */
        UnprotectedInstanceCount: number;
        /**
         * 重要资产数量。
         * @example `10`
         */
        ImportantAssetCount: number;
        /**
         * 测试资产数量。
         * @example `10`
         */
        TestAssetCount: number;
        /**
         * 专有网络VPC数量。
         * @example `5`
         */
        VpcCount: number;
        /**
         * 您查询时指定的资产类型下的所有资产数量。如果查询时没有指定资产类型，此处的数量是您资产中所有服务器和云产品的数量之和。
         * @example `100`
         */
        InstanceCount: number;
        /**
         * 暂停的服务器数量。
         * @example `10`
         */
        PauseInstanceCount: number;
        /**
         * 云安全中心支持检测的资产数量。
         * @example `100`
         */
        IdcInstanceCount: number;
        /**
         * 未启动（未开机）的服务器数量。
         * @example `10`
         */
        NotRunningStatusCount: number;
        /**
         * 阿里云服务器组所属的资产数量。
         * @example `100`
         */
        AliYunInstanceCount: number;
        /**
         * 存在风险的资产数量。
         * @example `90`
         */
        RiskInstanceCount: number;
        /**
         * 第三方云服务器数量。
         * @example `0`
         */
        HuaweiInstanceCount: number;
        /**
         * 第三方云服务器数量。
         * @example `100`
         */
        AwsInstanceCount: number;
        /**
         * 云外实例数量。
         * @example `20`
         */
        OutMachineInstanceCount: number;
        /**
         * 轻量应用服务器数量。
         * @example `2`
         */
        TripartiteInstanceCount: number;
        /**
         * 第三方云服务器数量。
         * @example `5`
         */
        AzureInstanceCount: number;
        /**
         * 您查询时指定的资产类型下的所有资产计算核数。如果查询时没有指定资产类型，此处的数量是您资产中所有服务器和云产品的计算核数之和。
         * @example `301`
         */
        InstanceCoreCount: number;
        /**
         * 存在风险的资产计算核数。
         * @example `201`
         */
        RiskInstanceCoreCount: number;
        /**
         * 暴露资产计算核数。
         * @example `30`
         */
        ExposedInstanceCoreCount: number;
        /**
         * 未受保护的资产的计算核数。
         * @example `30`
         */
        UnprotectedInstanceCoreCount: number;
        /**
         * 未启动（未开机）服务器的计算核数。
         * @example `30`
         */
        NotRunningStatusCoreCount: number;
        /**
         * 新增服务器的计算核数。
         * @example `30`
         */
        NewInstanceCoreCount: number;
    };
}
