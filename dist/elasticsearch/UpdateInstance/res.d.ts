export interface UpdateInstanceResponse {
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
         * 数据节点的数量。
         * @example `2`
         */
        nodeAmount: number;
        /**
         * 实例创建时间。
         * @example `2018-07-13T03:58:07.253Z`
         */
        createdAt: string;
        /**
         * 实例的状态。支持：
         * - active：正常
         * - activating：生效中
         * - inactive：冻结
         * - invalid：失效
         * @example `active`
         */
        status: string;
        /**
         * 实例的付费方式。支持：
         * - prepaid：包年包月
         * - postpaid：按量付费
         * @example `postpaid`
         */
        paymentType: string;
        /**
         * 实例的私网访问域名。
         * @example `es-cn-abc.elasticsearch.aliyuncs.com`
         */
        domain: string;
        /**
         * 实例名称。
         * @example `test`
         */
        description: string;
        /**
         * 实例版本。
         * @example `5.5.3_with_X-Pack`
         */
        esVersion: string;
        /**
         * 实例ID。
         * @example `es-cn-abc`
         */
        instanceId: string;
        /**
         * 数据节点配置信息。
         */
        nodeSpec: {
            /**
             * 节点规格。
             * @example `elasticsearch.sn2ne.xlarge`
             */
            spec: string;
            /**
             * 节点存储空间大小，单位：GB。
             * @example `40`
             */
            disk: number;
            /**
             * 节点存储类型。支持：
             * - cloud_ssd：SSD云盘
             * - cloud_efficiency：高效云盘
             * @example `cloud_ssd`
             */
            diskType: string;
        };
        /**
         * Kibana节点配置。
         */
        kibanaConfiguration: {
            /**
             * 节点规格。
             * @example `elasticsearch.n4.small`
             */
            spec: string;
            /**
             * 节点数量。
             * @example `1`
             */
            amount: number;
            /**
             * 节点存储空间大小。
             * @example `20`
             */
            disk: number;
            /**
             * 节点存储类型（可忽略该参数）。
             * @example `cloud_ssd`
             */
            diskType: string;
        };
        /**
         * Master节点配置。
         */
        masterConfiguration: {
            /**
             * 节点规格。
             * @example `elasticsearch.sn2ne.large`
             */
            spec: string;
            /**
             * 节点数量。
             * @example `3`
             */
            amount: number;
            /**
             * 节点的存储空间大小，单位：GB。
             * @example `20`
             */
            disk: number;
            /**
             * 节点的存储类型。只支持cloud_ssd（SSD云盘）。
             * @example `cloud_ssd`
             */
            diskType: string;
        };
    };
    Code: string;
    Message: string;
}
