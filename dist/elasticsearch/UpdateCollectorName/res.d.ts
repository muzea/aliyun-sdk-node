export interface UpdateCollectorNameResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 采集器实例ID。
         * @example `ct-cn-77uqof2s7rg5c****`
         */
        resId: string;
        /**
         * 采集器更新时间。
         * @example `2020-06-20T07:26:47.000+0000`
         */
        gmtUpdateTime: string;
        /**
         * 是否校验并创建采集器。支持：
         * - true：只校验不更新
         * - false：校验并更新
         * @example `false`
         */
        dryRun: boolean;
        /**
         * 账号ID。
         * @example `16852099488*****`
         */
        ownerId: string;
        /**
         * 采集器所在的专有网络ID。
         * @example `vpc-bp16k1dvzxtma*****`
         */
        vpcId: string;
        /**
         * 采集器类型，支持fileBeat、metricBeat、heartBeat和audiBeat。
         * @example `fileBeat`
         */
        resType: string;
        /**
         * 采集器版本。支持的版本与采集器的部署机器类型相关，具体如下：
         * - ECS：6.8.5_with_community
         * - ACK：6.8.13_with_community
         * @example `6.8.5_with_community`
         */
        resVersion: string;
        /**
         * 采集器创建时间。
         * @example `2020-06-20T07:26:47.000+0000`
         */
        gmtCreatedTime: string;
        /**
         * 采集器状态。支持activing（生效中）和active（已生效）。
         * @example `active`
         */
        status: string;
        /**
         * 采集器名称。
         * @example `ct-test`
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
             * 文件名。
             * @example `fields.yml`
             */
            fileName: string;
        }[];
        /**
         * 采集器扩展配置。
         */
        extendConfigs: {
            /**
             * ACK集群所有成功采集的Pod节点数。当**configType**为**collectorDeployMachines**，且**type**为**ACKCluster**时显示。
             * @example `8`
             */
            successPodsCount: string;
            /**
             * 传输协议，支持**HTTP**、**HTTPS**。
             * @example `HTTP`
             */
            protocol: string;
            /**
             * 采集器Output指定实例的访问用户名，默认为elastic。当**configType**为**collectorTargetInstance**或**collectorElasticsearchForKibana**时显示。
             * @example `elastic`
             */
            userName: string;
            /**
             * ACK集群所有采集的Pod节点数。当**configType**为**collectorDeployMachines**，且**type**为**ACKCluster**时显示。
             * @example `10`
             */
            totalPodsCount: string;
            /**
             * 采集器部署的机器类型，当**configType**为**collectorDeployMachine**时显示。支持：
             * - ECSInstanceId：ECS实例
             * - ACKCluster：容器Kubernetes集群
             * @example `ECSInstanceId`
             */
            type: string;
            /**
             * 启用Kibana Dashboard后，Kibana的公网访问地址。当**configType**为**collectorElasticsearchForKibana**时显示。
             * @example `https://es-cn-4591jumei000u****.kibana.elasticsearch.aliyuncs.com:5601`
             */
            kibanaHost: string;
            /**
             * 是否启用Monitoring。当**configType**为**collectorTargetInstance**，且**instanceType**为**elasticsearch**时显示。支持：
             * - true：启用
             * - false：不启用
             * @example `true`
             */
            enableMonitoring: boolean;
            /**
             * 配置类型。支持：
             * - collectorTargetInstance：采集器Output
             * - collectorDeployMachine：采集器的部署机器
             * - collectorElasticsearchForKibana：支持Kibana仪表盘的Elasticsearch实例信息
             * @example `collectorDeployMachine`
             */
            configType: string;
            /**
             * 采集器Output指定的实例类型，支持：elasticsearch、logstash。当**configType**为**collectorTargetInstance**时显示。
             * @example `elasticsearch`
             */
            instanceType: string;
            /**
             * 机器组ID。当**configType**为**collectorDeployMachine**时显示。
             * @example `default_ct-cn-5i2l75bz4776****`
             */
            groupId: string;
            /**
             * 启用Kibana Dashboard后，Kibana的私网访问地址。当**configType**为**collectorElasticsearchForKibana**时显示。
             * @example `es-cn-4591jumei000u****-kibana.internal.elasticsearch.aliyuncs.com:5601`
             */
            host: string;
            /**
             * 采集器关联的实例ID。当**configType**为**collectorTargetInstance**时，为采集器Output的实例ID；当**configType**为**collectorDeployMachines**，且**type**为**ACKCluster**时，为ACK集群ID。
             * @example `es-cn-n6w1o1****`
             */
            instanceId: string;
            /**
             * 采集器所部署的ECS机器列表信息。当**configType**为**collectorDeployMachines**，且**type**为**ECSInstanceId**时显示。
             */
            machines: {
                /**
                 * ECS上各采集器的状态。支持：**heartOk**（心跳正常）、**heartLost**（心跳异常）、**uninstalled**（未安装）和**failed**（安装失败）。
                 * @example `heartOk`
                 */
                agentStatus: string;
                /**
                 * ECS机器ID列表。
                 * @example `c1b9fde5172b84f82b9928e825a7b8988`
                 */
                instanceId: string;
            }[];
            hosts: string[];
        }[];
        collectorPaths: string[];
    };
}
