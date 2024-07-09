export interface ListLogstashResponse {
    /**
     * 请求ID。
     * @example `AC442F2F-5068-4434-AA21-E78947A9****`
     */
    RequestId: string;
    /**
     * 请求头信息。
     */
    Headers: {
        /**
         * 实例总记录数。
         * @example `10`
         */
        X-Total-Count: number;
    };
    /**
     * 当前请求返回的实例列表。
     */
    Result: {
        /**
         * 实例的付费模式。支持：prepaid（包年包月）、postpaid（按量付费）。
         * @example `postpaid`
         */
        paymentType: string;
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
         * @example `2018-07-13T03:58:07.253Z`
         */
        createdAt: string;
        /**
         * 实例的状态。支持四种状态：正常（active）、生效中（activating）、冻结（inactive）和失效（invalid）。
         * @example `active`
         */
        status: string;
        /**
         * 实例最后更新的时间。
         * @example `2018-07-18T10:10:04.484Z`
         */
        updatedAt: string;
        /**
         * 实例ID。
         * @example `ls-cn-n6w1o5jq****`
         */
        instanceId: string;
        /**
         * 实例版本。目前仅支持6.7.0_with_X-Pack、7.4.0_with_X-Pack。
         * @example `6.7.0_with_X-Pack`
         */
        version: string;
        /**
         * 实例标签。
         */
        Tags: {
            /**
             * 标签值。
             * @example `dev`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `env`
             */
            TagKey: string;
        }[];
        /**
         * 数据节点的配置信息。
         */
        nodeSpec: {
            /**
             * 实例规格。
             * @example `logstash.n4.small`
             */
            spec: string;
            /**
             * 节点磁盘大小。
             * @example `50`
             */
            disk: number;
            /**
             * 是否使用磁盘加密：
             * - true：使用
             * - false：不使用
             * @example `false`
             */
            diskEncryption: boolean;
            /**
             * 磁盘类型。
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
             * @example `vpc-abc`
             */
            vpcId: string;
            /**
             * 实例所在的可用区。
             * @example `cn-hangzhou-*`
             */
            vsArea: string;
            /**
             * 网络类型，目前仅支持专有网络VPC（Virtual Private Cloud）。
             * @example `vpc`
             */
            type: string;
            /**
             * 交换机ID。
             * @example `vsw-def`
             */
            vswitchId: string;
        };
        resourceGroupId: string;
    }[];
}
