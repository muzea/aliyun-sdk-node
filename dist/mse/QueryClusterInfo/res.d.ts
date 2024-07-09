export interface QueryClusterInfoResponse {
    /**
     * 返回信息。
     * - 当请求成功时，返回成功信息。
     * - 当请求失败时，返回失败原因。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `415088B3-A7BE-56F6-9CD9-C42DE895CD41`
     */
    RequestId: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 集群所处的VPC ID。
         * @example `vpc-bp1v5nbauzh8xxxxxxx`
         */
        VpcId: string;
        /**
         * 集群创建时间。
         * @example `2022-12-15 10:02:07`
         */
        CreateTime: string;
        /**
         * 预留字段。
         * @example `null`
         */
        IntranetAddress: string;
        /**
         * 废弃字段。
         * @example `null`
         */
        DiskType: string;
        /**
         * 公网带宽，单位：Mbps。
         * 取值范围：0~5000，其中0表示不接入公网。
         * @example `1`
         */
        PubNetworkFlow: string;
        /**
         * 废弃字段。
         * @example `null`
         */
        DiskCapacity: number;
        /**
         * 废弃字段。
         * @example `null`
         */
        MemoryCapacity: number;
        /**
         * 集群别名。
         * @example `开发环境`
         */
        ClusterAliasName: string;
        /**
         * 集群实例数。
         * @example `3`
         */
        InstanceCount: number;
        /**
         * 集群内网开放的端口。
         * @example `8848,6443,9848,8761`
         */
        IntranetPort: string;
        /**
         * 预留结构。
         */
        InstanceModels: {
            /**
             * 预留字段。
             * @example `null`
             */
            PodName: string;
            /**
             * 预留字段。
             * @example `null`
             */
            SingleTunnelVip: string;
            /**
             * 预留字段。
             * @example `null`
             */
            InternetIp: string;
            /**
             * 预留字段。
             * @example `null`
             */
            Ip: string;
            /**
             * 预留字段。
             * @example `null`
             */
            Role: string;
            /**
             * 预留字段。
             * @example `null`
             */
            HealthStatus: string;
            /**
             * 预留字段。
             * @example `null`
             */
            CreationTimestamp: string;
            /**
             * 预留字段。
             * @example `null`
             */
            Zone: string;
        }[];
        /**
         * 内网域名。
         * @example `mse-xxxxx-nacos-ans.mse.aliyuncs.com`
         */
        IntranetDomain: string;
        /**
         * 公网域名。
         * @example `mse-xxxxxx-p.nacos-ans.mse.aliyuncs.com`
         */
        InternetDomain: string;
        /**
         * 付费方式。
         * @example `按量付费`
         */
        PayInfo: string;
        /**
         * 预留字段。
         * @example `null`
         */
        InternetAddress: string;
        /**
         * 实例ID。
         * @example `mse-cn-st21ri2****`
         */
        InstanceId: string;
        /**
         * 公网白名单。
         * @example `["127.0.0.0/32"]`
         */
        AclEntryList: string;
        /**
         * 集群状态。
         * @example `INIT_SUCCESS`
         */
        HealthStatus: string;
        /**
         * 集群初始化所用的时间（毫秒）。
         * @example `53353`
         */
        InitCostTime: number;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 公网白名单实例ID
         * @example `acl-bp144q24cgqvzckmxxxx`
         */
        AclId: string;
        /**
         * 废弃字段。
         * @example `null`
         */
        Cpu: number;
        /**
         * 集群类型，包括ZooKeeper、Nacos-Ans和Eureka。
         * @example `Nacos-Ans`
         */
        ClusterType: string;
        /**
         * 集群完整名称。
         * @example `mse-74355150-xxxxxxx`
         */
        ClusterName: string;
        /**
         * 初始化状态。
         * @example `INIT_SUCCESS`
         */
        InitStatus: string;
        /**
         * 公网集群开放端口。
         * @example `8848,6443,9848,8761`
         */
        InternetPort: string;
        /**
         * 集群版本号。
         * @example `2.1.0`
         */
        AppVersion: string;
        /**
         * 集群网络连接类型。
         * @example `privatenet`
         */
        NetType: string;
        /**
         * 订单版本。
         * @example `NACOS_2_0_0`
         */
        ClusterVersion: string;
        /**
         * 引擎规格。
         * @example `MSE_SC_2_4_60_c`
         */
        ClusterSpecification: string;
        /**
         * 交换机ID。
         * @example `vsw-bp1egfakxxxxx`
         */
        VSwitchId: string;
        /**
         * 废弃字段。
         * @example `null`
         */
        ConnectionType: string;
        /**
         * 集群版本。
         * @example `mse_pro`
         */
        MseVersion: string;
        /**
         * 付费模式，包括包年包月和按量付费。
         * @example `POSTPAY`
         */
        ChargeType: string;
        /**
         * 标签。
         */
        Tags: any;
        /**
         * 当前集群可打散到的可用区列表。
         */
        ExpectZones: string[];
        /**
         * 运维时间窗口
         */
        MaintenancePeriod: {
            /**
             * 运维时间窗口开始时间
             * @example `02:00`
             */
            EndTime: string;
            /**
             * 运维时间窗口结束时间
             * @example `06:00`
             */
            StartTime: string;
        };
        /**
         * 到期时间（包年包月）
         * @example `2021-08-01 00:00:00`
         */
        EndDate: string;
        /**
         * ENI网络接入的安全组ID
         * @example `sg-uf6hgwe067prhg68agfa`
         */
        SecurityGroupId: string;
        /**
         * ENI网络接入的安全组类型
         * @example `enterprise`
         */
        SecurityGroupType: string;
        /**
         * 弹性公网IP（EIP）的实例ID
         * @example `eip-bp1uujshd5funmyy8rcl9`
         */
        EipInstanceId: string;
        CanUpdate: boolean;
        VersionCode: string;
    };
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
