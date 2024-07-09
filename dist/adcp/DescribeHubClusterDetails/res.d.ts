export interface DescribeHubClusterDetailsResponse {
    /**
     * 请求ID。
     * @example `52C1B7DF-96C1-5214-97B6-1B0859FEAFE5`
     */
    RequestId: string;
    /**
     * 集群详情。
     */
    Cluster: {
        /**
         * 集群访问端点。
         */
        Endpoints: {
            /**
             * API Server地址（内网）。
             * @example `https://172.16.6.**:6443`
             */
            IntranetApiServerEndpoint: string;
            /**
             * API Server地址（公网）。
             * @example `https://123.57.21.***:6443`
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
             * @example `2022-03-23T06:22:28Z`
             */
            CreationTime: string;
            /**
             * 集群更新时间。
             * @example `2022-03-21T02:51:35.542Z`
             */
            UpdateTime: string;
            /**
             * 集群创建失败的错误提示。
             * @example `The specified product does not exist.`
             */
            ErrorMessage: string;
            /**
             * 集群版本。
             * @example `1.22.3-aliyun.1`
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
             * 主控集群ID。
             * @example `cb09fda0dc2f94a8397c76638c7ecf***`
             */
            ClusterId: string;
            /**
             * 集群名称。
             * @example `ackone-heyuan`
             */
            Name: string;
            /**
             * 集群所在地域ID
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * 集群规格
             * - ack.pro.small 基础版
             * @example `ack.pro.small `
             */
            ClusterSpec: string;
            /**
             * 元数据。
             */
            MetaData: {
                /**
                 * ACK One Fleet元数据
                 */
                ACKOne: {
                    /**
                     * ACK One GitOps元数据
                     */
                    GitOps: {
                        /**
                         * 是否启用GitOps。取值
                         * - true： 启用
                         * - false： 禁用
                         * @example `true`
                         */
                        Enabled: boolean;
                        /**
                         * 是否启用GitOps 高可用。取值
                         * - true： 启用
                         * - false： 禁用
                         * @example `true`
                         */
                        HAEnabled: boolean;
                        /**
                         * 是否启用ArgoCD控制台公网域名解析。取值：
                         * - true：启用。
                         * - false：禁用。
                         * @example `true`
                         */
                        PublicAccessEnabled: boolean;
                        /**
                         * 公网访问ACL控制列表。仅当PublicAccessEnabled为true时有效。
                         */
                        AccessControlList: string[];
                    };
                    /**
                     * ACK One工作流元数据
                     */
                    WorkFlow: {
                        /**
                         * ACK One工作流元数据
                         */
                        ArgoWorkflow: {
                            /**
                             * 是否启用工作流配置。取值
                             * - true： 启用
                             * - false： 禁用
                             * @example `true`
                             */
                            Enabled: boolean;
                            /**
                             * 是否启用Argo Server UI。取值
                             * - true： 启用
                             * - false： 禁用
                             * @example `true`
                             */
                            ServerEnabled: string;
                            /**
                             * 是否启用Argo Workflow 控制台公网域名解析。取值：
                             * - true：启用。
                             * - false：禁用。
                             * @example `true`
                             */
                            PublicAccessEnabled: boolean;
                            /**
                             * 公网访问ACL控制列表。仅当PublicAccessEnabled为true时有效。
                             */
                            AccessControlList: string[];
                        };
                    };
                };
            };
            /**
             * 资源组ID。
             * @example `rg-2nnnd0b6q37***`
             */
            ResourceGroupID: string;
            /**
             * 标签列表。
             */
            Tags: {
                /**
                 * 标签的键。
                 * @example `user_resource`
                 */
                Key: string;
                /**
                 * 标签的值。
                 * @example `gfggfwq-697`
                 */
                Value: string;
            }[];
        };
        /**
         * 集群的网络配置。
         */
        Network: {
            /**
             * VPC的ID。
             * @example `vpc-f8ziib1019r9o0hdv2***`
             */
            VpcId: string;
            /**
             * vSwitch列表。
             */
            VSwitches: string[];
            /**
             * 关联的安全组ID。
             */
            SecurityGroupIDs: string[];
            /**
             * 支持的IP版本
             * - ipv4 支持ipv4
             * - ipv6 支持ipv6
             * - dual 同时支持ipv4和ipv6
             * @example `ipv4`
             */
            IPStack: string;
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
             * 负载均衡实例id。
             * @example `lb-hp3ioqbfeq37h13rwe***`
             */
            LoadBalancerId: string;
            /**
             * EIP实例ID。
             * @example `eip-abc****`
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
             * 服务网格(ASM)实例ID
             * @example `cb09fda0dc2f94a8397c76638c7ecf***
            `
             */
            MeshId: string;
        };
        /**
         * 日志配置信息。
         */
        LogConfig: {
            /**
             * 是否启用审计日志配置
             * - true 启用
             * - false 未启用
             * @example `false`
             */
            EnableLog: boolean;
            /**
             * 日志服务LogProject的名称。
             * @example `k8s-log-abc`
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
             * @example `Successful`
             */
            Message: string;
        }[];
        /**
         * 工作流集群配置信息
         */
        WorkflowConfig: {
            /**
             * 是否启用Argo Server UI。取值
             * -  true： 启用
             * - false： 禁用
             * @example `true`
             */
            ArgoServerEnabled: boolean;
            /**
             * 工作流调度模式。取值
             * - cost-optimized：成本优先
             * - stock-optimized：库存优先
             * @example `cost-optimized`
             */
            WorkflowScheduleMode: string;
            /**
             * 工作流负载价格限制。WorkflowScheduleMode取值为cost-optimized时生效。
             * @example `0.08`
             */
            PriceLimit: string;
            /**
             * 集群工作流地域配置列表。
             */
            WorkflowUnits: {
                /**
                 * 地域ID。
                 * @example `cn-beijing`
                 */
                RegionId: string;
                /**
                 * VPC的ID。
                 * @example `vpc-f8zukabbkv5aw7zkm****`
                 */
                VpcId: string;
                /**
                 * 集群工作流交换机列表。
                 */
                VSwitches: {
                    /**
                     * 交换机ID。
                     * @example `vsw-wz9sf0hsuizl7bxnj****`
                     */
                    VswitchId: string;
                    /**
                     * 可用区ID。
                     * @example `cn-hangzhou-e`
                     */
                    ZoneId: string;
                }[];
            }[];
        };
    };
}
