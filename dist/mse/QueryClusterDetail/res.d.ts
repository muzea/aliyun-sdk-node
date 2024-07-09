export interface QueryClusterDetailResponse {
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9515ACA4-E94D-440D-989E-C379FCED****`
     */
    RequestId: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * VPC ID。
         * @example `vpc-bp1hcg467ekqsv0zr****`
         */
        VpcId: string;
        /**
         * 集群创建时间。
         * @example `2020-07-31 11:36:08`
         */
        CreateTime: string;
        /**
         * 私网地址。
         * @example `192.168.XX.XX`
         */
        IntranetAddress: string;
        /**
         * 磁盘类型。
         * @example `alicloud-disk-ssd-multi-zone`
         */
        DiskType: string;
        /**
         * 公网带宽，单位：Mbps。
         * 取值范围：0~5000，其中0表示不接入公网。
         * @example `3`
         */
        PubNetworkFlow: string;
        /**
         * 磁盘容量，单位：G。
         * @example `60`
         */
        DiskCapacity: number;
        /**
         * 内存大小，单位：G。
         * @example `2`
         */
        MemoryCapacity: number;
        /**
         * 集群别名。
         * @example `mse-7413****`
         */
        ClusterAliasName: string;
        /**
         * 集群实例数。
         * @example `3`
         */
        InstanceCount: number;
        /**
         * 私网端口。
         * @example `8761`
         */
        IntranetPort: string;
        /**
         * 实例列表。
         */
        InstanceModels: {
            /**
             * Pod名称。
             * @example `mse-7413****-159616656****-reg-center-0-0`
             */
            PodName: string;
            /**
             * 单线程IP。
             * @example `192.168.XX.XX`
             */
            SingleTunnelVip: string;
            /**
             * 公网IP。
             * @example `47.98.XX.XX`
             */
            InternetIp: string;
            /**
             * 实例IP。
             * @example `10.12.XX.XX`
             */
            Ip: string;
            /**
             * 角色。
             * @example `Peer`
             */
            Role: string;
            /**
             * 实例健康状态。
             * @example `Running`
             */
            HealthStatus: string;
            /**
             * 创建时间戳。
             * @example `1578575377732`
             */
            CreationTimestamp: string;
            /**
             * 可用区。
             * @example `cn-shanghai-f`
             */
            Zone: string;
        }[];
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
         * 付费类型，包括包年包月和按量付费类型。
         * @example `按量付费`
         */
        PayInfo: string;
        /**
         * 公网地址。
         * @example `47.98.XX.XX`
         */
        InternetAddress: string;
        /**
         * 实例ID。
         * @example `mse-cn-st21ri2****`
         */
        InstanceId: string;
        /**
         * 白名单列表。
         * @example `[]`
         */
        AclEntryList: string;
        /**
         * 集群健康状态。
         * @example `RESTART_SUCCESS`
         */
        HealthStatus: string;
        /**
         * 集群创建耗时，单位：ms。
         * @example `98408`
         */
        InitCostTime: number;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 白名单ID。
         * @example `acl-bp17020kiqvzutwwj****`
         */
        AclId: string;
        /**
         * CPU数量。
         * @example `1`
         */
        Cpu: number;
        /**
         * 集群类型，包括ZooKeeper、Nacos-Ans和Eureka。
         * @example `Nacos-Ans`
         */
        ClusterType: string;
        /**
         * 集群名称。
         * @example `mse-bc1a29b0-160230875****`
         */
        ClusterName: string;
        /**
         * 集群创建状态。
         * @example `RESTART_SUCCESS`
         */
        InitStatus: string;
        /**
         * 私网端口。
         * @example `8761`
         */
        InternetPort: string;
        /**
         * APP版本。
         * @example `1.2.1`
         */
        AppVersion: string;
        /**
         * 网络类型，取值如下：
         * - `privatenet`：表示专有网络。
         * - `pubnet`：表示公网。
         * @example `privatenet`
         */
        NetType: string;
        /**
         * 集群版本。
         * @example `1.2.1`
         */
        ClusterVersion: string;
        /**
         * 引擎规格。
         * @example `MSE_SC_1_2_200_c`
         */
        ClusterSpecification: string;
        /**
         * 交换机ID。
         * @example `vsw-xxx-xxxx`
         */
        VSwitchId: string;
        /**
         * 网络连接类型，取值如下：
         * - slb
         * - eni
         * @example `slb`
         */
        ConnectionType: string;
        /**
         * MSE版本号
         * @example `mse_basic`
         */
        MseVersion: string;
        /**
         * 付费模式，包括包年包月和按量付费。
         * @example `按量付费`
         */
        ChargeType: string;
        /**
         * 原始订单版本号。
         * @example `1.2.0`
         */
        OrderClusterVersion: string;
        /**
         * 实例所绑定的标签。
         */
        Tags: any;
        /**
         * 资源组 ID。
         * @example `rg-aek2dhgysj*****`
         */
        ResourceGroupId: string;
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
