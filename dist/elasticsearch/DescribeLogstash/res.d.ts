export interface DescribeLogstashResponse {
    /**
     * 请求ID。
     * @example `C9334241-4837-46C2-B24B-9BDC517318DE`
     */
    RequestId: string;
    /**
     * 当前实例的详细信息。
     */
    Result: {
        /**
         * 实例配置信息。
         * @example `{"slowlog.threshold.warn": "2s","slowlog.threshold.info": "1s","slowlog.threshold.debug": "500ms","slowlog.threshold.trace": "100ms" }`
         */
        config: any;
        /**
         * 实例的付费模式。支持：
         * - prepaid：包年包月
         * - postpaid：按量付费
         * @example `prepaid`
         */
        paymentType: string;
        /**
         * 实例所属的资源组ID。
         * @example `rg-aekzvowej3i****`
         */
        ResourceGroupId: string;
        /**
         * 实例的节点个数。
         * @example `2`
         */
        nodeAmount: number;
        /**
         * 实例名称。
         * @example `ls-cn-abc`
         */
        description: string;
        /**
         * 实例创建时间。
         * @example `2020-02-06T14:12:03.672Z`
         */
        createdAt: string;
        /**
         * 实例的状态。支持四种状态：
         * - 正常：active
         * - 生效中：activating
         * - 冻结：inactive
         * - 失效：invalid
         * @example `active`
         */
        status: string;
        /**
         * 实例所属的VPC ID。
         * @example `vpc-bp16k1dvzxtmagcva****`
         */
        vpcInstanceId: string;
        /**
         * 实例最后更新的时间。
         * @example `2020-02-06T14:22:36.850Z`
         */
        updatedAt: string;
        /**
         * 实例版本。
         * @example `7.4.0_with_X-Pack`
         */
        version: string;
        /**
         * 实例ID。
         * @example `ls-cn-abc`
         */
        instanceId: string;
        /**
         * 节点的访问信息。
         */
        endpointList: {
            /**
             * 节点所在的可用区ID。
             * @example `cn-hangzhou-b`
             */
            zoneId: string;
            /**
             * 端口号。
             * @example `9600`
             */
            port: string;
            /**
             * 节点的IP地址。
             * @example `172.16.**.**`
             */
            host: string;
        }[];
        /**
         * 实例标签。
         */
        Tags: {
            /**
             * 标签键。
             * @example `env`
             */
            tagKey: string;
            /**
             * 标签值。
             * @example `dev`
             */
            tagValue: string;
        }[];
        /**
         * 可用区信息。
         */
        ZoneInfos: {
            /**
             * 可用区状态。支持：
             * - ISOLATION：下线
             * - NORMAL：正常
             * @example `NORMAL`
             */
            status: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-b`
             */
            zoneId: string;
        }[];
        ExtendConfigs: any[];
        /**
         * 节点的配置信息。
         */
        nodeSpec: {
            /**
             * 节点的规格。
             * @example `elasticsearch.sn1ne.large`
             */
            spec: string;
            /**
             * 节点的磁盘大小。
             * @example `20`
             */
            disk: number;
            /**
             * 是否使用云盘加密：
             * - true：使用
             * - false：不使用
             * @example `true`
             */
            diskEncryption: boolean;
            /**
             * 节点的磁盘类型。
             * @example `cloud_ssd`
             */
            diskType: string;
        };
        /**
         * 网络配置。
         */
        networkConfig: {
            /**
             * 专有网络ID。
             * @example `vpc-bp16k1dvzxtmagcva****`
             */
            vpcId: string;
            /**
             * 实例所在的可用区。
             * @example `cn-hangzhou-*`
             */
            vsArea: string;
            /**
             * 网络类型。目前只支持专有网络VPC（Virtual Private Cloud）。
             * @example `vpc`
             */
            type: string;
            /**
             * 虚拟交换机ID。
             * @example `vsw-bp1k4ec6s7sjdbudw****`
             */
            vswitchId: string;
        };
    };
}
