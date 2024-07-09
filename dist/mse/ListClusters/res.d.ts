export interface ListClustersResponse {
    /**
     * HTTP状态码。
     * @example `202`
     */
    HttpCode: string;
    /**
     * 实例总数。
     * @example `7`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `69AD2AA7-DB47-449B-941B-B14409DF****`
     */
    RequestId: string;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 每页展示实例数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 集群截止时间。
         * @example `2021-08-01 00:00:00`
         */
        EndDate: string;
        /**
         * 私网域名。
         * @example `mse-7413****-eureka.mse.aliyuncs.com`
         */
        IntranetDomain: string;
        /**
         * 公网域名。
         * @example `mse-7413****-p.eureka.mse.aliyuncs.com`
         */
        InternetDomain: string;
        /**
         * 集群创建时间。
         * @example `2020-07-31 11:36:08`
         */
        CreateTime: string;
        /**
         * 付费模式，包括包年包月和按量付费。
         * @example `按量付费`
         */
        ChargeType: string;
        /**
         * 私网地址。
         * @example `192.168.XX.XX`
         */
        IntranetAddress: string;
        /**
         * 实例ID。
         * @example `mse-cn-st21ri2****`
         */
        InstanceId: string;
        /**
         * 公网地址。
         * @example `47.98.XX.XX`
         */
        InternetAddress: string;
        /**
         * 集群别名。
         * @example `mse-7413****`
         */
        ClusterAliasName: string;
        /**
         * 集群类型，包括ZooKeeper、Nacos-Ans和Eureka。
         * @example `Eureka`
         */
        ClusterType: string;
        /**
         * 初始化状态。
         * @example `RESTART_SUCCESS`
         */
        InitStatus: string;
        /**
         * APP版本。
         * @example `1.9.3`
         */
        AppVersion: string;
        /**
         * 是否能够升级。
         * @example `true`
         */
        CanUpdate: boolean;
        /**
         * 版本信息。
         * @example `EUREKA_1_9_3`
         */
        VersionCode: string;
        /**
         * 集群数量。
         * @example `2`
         */
        InstanceCount: number;
        /**
         * 集群名字。
         * @example `mse-cn-st21ri2****`
         */
        ClusterName: string;
        /**
         * 集群所使用的版本类别。
         * @example `mse_pro`
         */
        MseVersion: string;
        /**
         * 实例所绑定的标签。
         */
        Tags: any;
        /**
         * 实例所属的资源组 ID。
         * @example `rg-acfmv7jiavm4uxa`
         */
        ResourceGroupId: string;
        /**
         * 集群所处的VPC ID。
         * @example `vpc-bp1hcg467ekqsv0zr****`
         */
        VpcId: string;
        /**
         * 运维时间窗口
         */
        MaintenancePeriod: {
            /**
             * 运维时间窗口开始时间
             * @example `02:00`
             */
            StartTime: string;
            /**
             * 运维时间窗口结束时间
             * @example `06:00`
             */
            EndTime: string;
        };
    }[];
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
