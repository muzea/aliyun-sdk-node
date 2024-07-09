export interface ListAddonsResponse {
    /**
     * Id of the request
     * @example `78901766-3806-4E96-8E47-CFEF59E4****`
     */
    RequestId: string;
    /**
     * 状态码, 200为正常, 其他为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 提示消息。
     * @example `success`
     */
    Message: string;
    /**
     * 业务是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * Addon列表数据。
     */
    Data: {
        /**
         * Addon别名。
         * @example `MySQL`
         */
        Alias: string;
        /**
         * Addon标签列表。
         */
        Categories: string[];
        /**
         * 大盘列表。
         */
        Dashboards: {
            /**
             * 大盘描述。
             * @example `MySQL监控大盘信息，监控了连接信息、使用信息等指标`
             */
            Description: string;
            /**
             * 大盘名称。
             * @example `mysql-overview`
             */
            Name: string;
            /**
             * 大盘地址。
             * @example `http://xxxx`
             */
            Url: string;
        }[];
        /**
         * Addon描述信息。
         * @example `通过 MySQL Exporter 监控数据库指标`
         */
        Description: string;
        /**
         * 支持的环境列表。
         */
        Environments: {
            /**
             * 环境的依赖列表。
             */
            Dependencies: {
                /**
                 * 环境依赖的Feature。
                 */
                Features: any;
                /**
                 * 服务列表。
                 */
                Services: string[];
                ClusterTypes: string[];
            };
            /**
             * 环境描述信息。
             * @example `MySQL 服务部署在 Kubernetes 集群中。`
             */
            Description: string;
            /**
             * 是否开启。
             * @example `true`
             */
            Enable: boolean;
            /**
             * 环境标签。
             * @example `容器环境`
             */
            Label: string;
            /**
             * 环境名称。
             * @example `CS`
             */
            Name: string;
            /**
             * 环境中的控制策略信息。
             */
            Policies: {
                /**
                 * 默认告警状态。
                 * @example `default`
                 */
                AlertDefaultStatus: string;
                /**
                 * 默认安装状态。
                 * @example `false`
                 */
                DefaultInstall: boolean;
                /**
                 * Addon的Target名称。
                 * @example `cloud-rds-mysql`
                 */
                TargetAddonName: string;
                /**
                 * 支持的协议列表。
                 */
                Protocols: {
                    /**
                     * 协议名称。
                     * @example `arms`
                     */
                    Name: string;
                    /**
                     * 协议标签。
                     * @example `ARMS`
                     */
                    Label: string;
                    /**
                     * 协议图标地址。
                     * @example `http://xxxxxxx`
                     */
                    Icon: string;
                    /**
                     * 协议描述。
                     * @example `ARMS`
                     */
                    Description: string;
                }[];
                /**
                 * 是否开启服务账户。
                 */
                EnableServiceAccount: boolean;
                /**
                 * 安装后是否需要重启。
                 */
                NeedRestartAfterIntegration: boolean;
                /**
                 * 指标正常检查的规则。
                 */
                MetricCheckRule: {
                    /**
                     * PromQL查询语句。
                     */
                    PromQL: string[];
                };
            };
        }[];
        /**
         * 图标地址。
         * @example `http://xxxx`
         */
        Icon: string;
        /**
         * 关键字集合。
         */
        Keywords: string[];
        /**
         * 语言。
         * @example `zh`
         */
        Language: string;
        /**
         * Addon名称。
         * @example `mysql`
         */
        Name: string;
        /**
         * 是否只能安装一次。
         * @example `false`
         */
        Once: boolean;
        /**
         * 定位到的场景。
         * @example `database`
         */
        Scene: string;
        /**
         * 插件版本。
         * @example `0.0.1`
         */
        Version: string;
        /**
         * 权重。
         * @example `857`
         */
        Weight: string;
        /**
         * 最后一次被创建时间。
         * @example `2023-09-22T16:56:29+08:00`
         */
        LatestReleaseCreateTime: string;
    }[];
}
