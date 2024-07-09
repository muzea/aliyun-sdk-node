export interface DescribeEnvResourceResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `71CC3AA5-17C9-465F-8F8A-0B6BE58*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
    /**
     * 环境资源信息
     */
    EnvResource: {
        /**
         * 启动模版ID
         * @example `""`
         */
        LaunchTemplateId: string;
        /**
         * 环境名称
         * @example `test1`
         */
        EnvName: string;
        VSwitches: {
            /**
             * 交换机列表
             */
            VSwitch: {
                /**
                 * 交换机ID
                 * @example `vsw-wz9gfawx1vxkimtj*****`
                 */
                Id: string;
            }[];
        };
        /**
         * VPC信息
         */
        Vpc: {
            /**
             * VPC的ID
             * @example `vpc-wz9e6y22o3o91nuy*****`
             */
            Id: string;
        };
        /**
         * 资源监控组
         */
        MonitorGroup: {
            /**
             * 监控组ID
             * @example `71*****`
             */
            Id: string;
        };
        /**
         * 启动配置ID
         * @example `""`
         */
        LaunchConfigurationId: string;
        LoadBalancers: {
            /**
             * 环境内负载均衡资源列表
             */
            LoadBalancer: {
                /**
                 * 是否为导入实例
                 * @example `false`
                 */
                Imported: boolean;
                /**
                 * 协议
                 * @example `""`
                 */
                Protocol: string;
                /**
                 * 地址类型
                 * @example `""`
                 */
                AddressType: string;
                Listeners: {
                    Listener: {
                        Protocol: string;
                        Port: number;
                    }[];
                };
                /**
                 * 端口号
                 * @example `1001`
                 */
                Port: number;
                /**
                 * 负载均衡实例ID
                 * @example `""`
                 */
                Id: string;
            }[];
        };
        Instances: {
            /**
             * 环境内ECS实例信息列表
             */
            Instance: {
                /**
                 * 是否为导入实例
                 * @example `false`
                 */
                Imported: boolean;
                /**
                 * 实例ID
                 * @example `i-wz9ci3y5rx4ub93*****`
                 */
                Id: string;
            }[];
        };
        DefaultSecurityGroups: {
            /**
             * 环境的默认安全组信息
             */
            SecurityGroup: {
                /**
                 * 安全组ID
                 * @example `sg-5d22f93dcd04d705b65*****`
                 */
                Id: string;
            }[];
        };
        /**
         * 弹性伸缩组
         */
        ScalingGroup: {
            /**
             * 弹性伸缩组ID
             * @example `asg-wz9aaa7g5ff6fiw*****`
             */
            Id: string;
        };
        Domains: {
            Domain: {
                IsDefault: boolean;
                HostedBy: string;
                SubDomain: string;
                DomainName: string;
                ManagedBy: string;
            }[];
        };
        RdsInstances: {
            /**
             * 环境内RDS实例信息
             */
            RdsInstance: {
                /**
                 * 是否为导入实例
                 * @example `false`
                 */
                Imported: boolean;
                /**
                 * 数据库名
                 * @example `webplus`
                 */
                DatabaseName: string;
                /**
                 * RDS实例ID
                 * @example `rm-5d22f93dcd04d705b65*****`
                 */
                Id: string;
                /**
                 * 数据库账号名
                 * @example `webplus`
                 */
                AccountName: string;
            }[];
        };
        /**
         * 环境ID
         * @example `we-5d22f93dcd04d705b65*****`
         */
        EnvId: string;
    };
}
