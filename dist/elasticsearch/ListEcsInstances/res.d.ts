export interface ListEcsInstancesResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    RequestId: string;
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 返回的记录数。
         * @example `11`
         */
        X-Total-Count: number;
    };
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 云助手安装状态，支持：
         * - true：已安装
         * - false：未安装
         * @example `true`
         */
        cloudAssistantStatus: string;
        /**
         * ECS实例名称。
         * @example `ecsTestName`
         */
        ecsInstanceName: string;
        /**
         * ECS实例ID。
         * @example `i-bp14ncqge8wy3l3d****`
         */
        ecsInstanceId: string;
        /**
         * ECS实例的标签信息。
         * @example `[ { "tagKey": "a", "tagValue": "b" } ]`
         */
        tags: string;
        /**
         * ECS实例的操作系统类型。支持：
         * - windows：Windows操作系统
         * - linux：Linux操作系统
         * @example `linux`
         */
        osType: string;
        /**
         * ECS实例的状态。支持：
         * - running：运行中
         * - starting：启动中
         * - stopping：停止中
         * - stopped：已停止
         * @example `running`
         */
        status: string;
        /**
         * ECS实例的IP地址信息。
         */
        ipAddress: {
            /**
             * IP地址类型。支持：
             * - public：公网地址
             * - private：私网地址
             * @example `private`
             */
            ipType: string;
            /**
             * IP地址。
             * @example `172.16.xx.xx`
             */
            host: string;
        }[];
        /**
         * 该ECS实例上，采集器信息列表。
         */
        collectors: {
            /**
             * 采集器实例ID。
             * @example `ct-cn-0v3xj86085dvq****`
             */
            resId: string;
            /**
             * 采集器更新时间。
             * @example `2020-06-20T07:26:47.000+0000`
             */
            gmtUpdateTime: string;
            /**
             * 是否校验并创建采集器。支持：
             * - true：只校验不创建
             * - false：校验并创建
             * @example `false`
             */
            dryRun: boolean;
            /**
             * 账号ID。
             * @example `16852***488*****`
             */
            ownerId: string;
            /**
             * 采集器所在的专有网络ID。
             * @example `vpc-bp16k1dvzxtm******`
             */
            vpcId: string;
            /**
             * 采集器类型。支持fileBeat、metricBeat、heartBeat和auditBeat。
             * @example `fileBeat`
             */
            resType: string;
            /**
             * 采集器版本。采集器部署的机器类型为ECS时，只支持**6.8.5_with_community**。
             * @example `6.8.5_with_community`
             */
            resVersion: string;
            /**
             * 采集器创建时间。
             * @example `2020-06-20T07:26:47.000+0000`
             */
            gmtCreatedTime: string;
            /**
             * 采集器状态。支持：
             * - activing：生效中
             * - active：已生效
             * @example `activing`
             */
            status: string;
            /**
             * 采集器名称。
             * @example `ct-testAbc`
             */
            name: string;
            /**
             * 采集器的配置文件信息。
             */
            configs: {
                /**
                 * 文件内容。
                 * @example `- key: log\n title: Log file content\n description: >\n Contains log file lines.\n ....`
                 */
                content: string;
                /**
                 * 文件名称。
                 * @example `fields.yml`
                 */
                fileName: string;
            }[];
            /**
             * 扩展参数信息。
             */
            extendConfigs: {
                /**
                 * 是否启用Monitoring，当**configType**为**collectorTargetInstance**，且**instanceType**为**elasticsearch**时显示。支持：
                 * - true：启用
                 * - false：不启用
                 * @example `true`
                 */
                enableMonitoring: boolean;
                /**
                 * 机器组ID。当**configType**为**collectorDeployMachine**时显示。
                 * @example `default_ct-cn-5i2l75bz4776****`
                 */
                groupId: string;
                /**
                 * 配置类型。支持：
                 * - collectorTargetInstance：采集器Output
                 * - collectorDeployMachine：采集器的部署机器
                 * - collectorElasticsearchForKibana：支持Kibana仪表盘的Elasticsearch实例信息
                 * @example `collectorDeployMachine`
                 */
                configType: string;
                /**
                 * 采集器Output指定的实例类型。支持elasticsearch、logstash。当**configType**为**collectorTargetInstance**时显示。
                 * @example `elasticsearch`
                 */
                instanceType: string;
                /**
                 * 传输协议，需要与采集器Output指定实例的访问协议保持一致。支持HTTP、HTTPS。当**configType**为**collectorTargetInstance**时显示。
                 * @example `HTTP`
                 */
                protocol: string;
                /**
                 * 采集器Output指定实例的访问用户名，默认为elastic。当**configType**为**collectorTargetInstance**或**collectorElasticsearchForKibana**时显示。
                 * @example `elastic`
                 */
                userName: string;
                /**
                 * 采集器部署的机器类型，当**configType**为**collectorDeployMachine**时显示。支持：
                 * - ECSInstanceId：ECS
                 * - ACKCluster：容器Kubernetes
                 * @example `ECSInstanceId`
                 */
                type: string;
                /**
                 * 采集器关联的实例ID。当**configType**为**collectorTargetInstance**时，为采集器Output的实例ID；当**configType**为**collectorDeployMachines**，且**type**为**ACKCluster**时，为ACK（容器Kubernetes）集群ID。
                 * @example `es-cn-nif1z89fz003i****`
                 */
                instanceId: string;
                /**
                 * 采集器所部署的ECS机器列表信息。当**configType**为**collectorDeployMachines**，且**type**为**ECSInstanceId**时显示。
                 */
                machines: {
                    /**
                     * ECS上各采集器的状态。支持：
                     * - heartOk：心跳正常
                     * - heartLost：心跳异常
                     * - uninstalled：未安装
                     * - failed：安装失败
                     * @example `heartOk`
                     */
                    agentStatus: string;
                    /**
                     * ECS机器ID列表。
                     * @example `i-bp13y63575oypr9d****`
                     */
                    instanceId: string;
                }[];
                hosts: string[];
            }[];
            collectorPaths: string[];
        }[];
    }[];
}
