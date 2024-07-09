export interface DescribeHubClustersResponse {
    /**
     * 请求ID。
     * @example `2D676EFC-8C04-5CCE-A08E-BB97D24B47E8`
     */
    RequestId: string;
    /**
     * 集群列表信息
     */
    Clusters: {
        /**
         * 集群访问端点。
         */
        Endpoints: {
            /**
             * API Server 地址（内网）。
             * @example `https://172.16.6.**:6443
            `
             */
            IntranetApiServerEndpoint: string;
            /**
             * API Server 地址（公网）。
             * @example `https://123.57.21.***:6443
            `
             */
            PublicApiServerEndpoint: string;
        };
        /**
         * 集群详情。
         */
        ClusterInfo: {
            /**
             * 集群配置信息。
             * @example `Default`
             */
            Profile: string;
            /**
             * 集群创建时间。
             * @example `2021-11-05T10:25:48Z`
             */
            CreationTime: string;
            /**
             * 集群最后更新时间。
             * @example `2021-09-02T13:39:50Z`
             */
            UpdateTime: string;
            /**
             * 集群创建失败的错误提示。
             * @example `Success`
             */
            ErrorMessage: string;
            /**
             * 集群版本。
             * @example `1.22.3-aliyun.1
            `
             */
            Version: string;
            /**
             * 集群状态：
             * - initial：初始化中
             * - failed：创建失败
             * - running：运行中
             * - inactive：待激活
             * - deleting：删除中
             * - delete_failed：删除失败
             * - deleted：已删除
             * @example `running`
             */
            State: string;
            /**
             * 集群ID。
             * @example `c2d3e0121ea214b438010502a8019****`
             */
            ClusterId: string;
            /**
             * 集群名称。
             * @example `ackone-heyuan`
             */
            Name: string;
            /**
             * 地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * 集群规格
             * - ack.pro.small 基础版
             * @example `ack.pro.small`
             */
            ClusterSpec: string;
            /**
             * 资源组ID。
             * @example `rg-dt6rk4xm1r6***`
             */
            ResourceGroupID: string;
            /**
             * 标签列表。
             */
            Tags: {
                /**
                 * 标签的键。
                 * @example `headername`
                 */
                Key: string;
                /**
                 * 标签的值。
                 * @example `release`
                 */
                Value: string;
            }[];
        };
        /**
         * 集群的网络配置。
         */
        Network: {
            /**
             * 集群所属的VPC ID。
             * @example `vpc-2zeusrwi7c2mlww4a****`
             */
            VpcId: string;
            /**
             * 集群所属的交换机ID。
             */
            VSwitches: string[];
            /**
             * 安全组id。
             */
            SecurityGroupIDs: string[];
            /**
             * 集群域名。
             * @example `cluster.local`
             */
            ClusterDomain: string;
        };
        /**
         * apiserver信息。
         */
        ApiServer: {
            /**
             * 是否开启公网API Server访问端点
             * - true 开启公网访问端点
             * - false 未开启公网访问端点
             * @example `true`
             */
            EnabledPublic: boolean;
            /**
             * 关联的负载均衡实例ID。
             * @example `lb-bp1qyp4l6bscqxw69****`
             */
            LoadBalancerId: string;
            /**
             * EIP实例ID。
             * @example `eip-xxx`
             */
            ApiServerEipId: string;
        };
        /**
         * 服务网格(ASM)配置
         */
        MeshConfig: {
            /**
             * 是否启用服务网格(ASM)
             * - true 启用
             * - false 未启用
             * @example `false`
             */
            EnableMesh: boolean;
            /**
             * 服务网格实例ID
             * @example `c2d3e0121ea214b438010502a8019****`
             */
            MeshId: string;
        };
        /**
         * 日志配置。
         */
        LogConfig: {
            /**
             * 是否启用审计日志配置
             * - true 启用
             * - false 停用
             * @example `true`
             */
            EnableLog: boolean;
            /**
             * 日志服务LogProject的名称。
             * @example `audit-log-abc`
             */
            LogProject: string;
            /**
             * 日志存储天数
             * @example `7`
             */
            LogStoreTTL: string;
        };
        /**
         * 集群删除条件信息列表
         */
        Conditions: {
            /**
             * 删除条件类型
             * @example `DeletionProtection`
             */
            Type: string;
            /**
             * 删除条件状态，取值
             * - True 不能删除
             * - False 允许删除
             * - Unknow 未知
             * @example `True`
             */
            Status: string;
            /**
             * 删除条件原因
             * @example `Successful`
             */
            Reason: string;
            /**
             * 删除条件错误信息
             * @example `Successful!`
             */
            Message: string;
        }[];
    }[];
}
