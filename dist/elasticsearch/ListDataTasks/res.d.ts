export interface ListDataTasksResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 任务创建的时间。
         * @example `2020-07-30 06:32:18`
         */
        createTime: string;
        /**
         * 任务ID。
         * @example `et_cn_mfv1233r47272****`
         */
        taskId: string;
        /**
         * 任务状态。
         * @example `SUCCESS`
         */
        status: string;
        /**
         * 目标集群信息。
         */
        sinkCluster: {
            /**
             * 目标索引。
             * @example `product_info`
             */
            index: string;
            /**
             * 索引类型。
             * @example `_doc`
             */
            type: string;
            /**
             * 目标集群的公网访问地址。
             * @example `http://192.168.xx.xx:4101`
             */
            endpoint: string;
            /**
             * 集群所在的专有网络ID。
             * @example `vpc-2ze55voww95g82gak****`
             */
            vpcId: string;
            /**
             * 集群的访问端口号。
             * @example `9200`
             */
            vpcInstancePort: string;
            /**
             * 当前集群的实例ID或负载均衡SLB（Server Load Balancer）实例ID。
             * @example `es-cn-09k1rnu3g0002****-worker`
             */
            vpcInstanceId: string;
            /**
             * 目标集群类型。默认为elasticsearch。
             * @example `1`
             */
            dataSourceType: string;
        };
        /**
         * 源集群信息。
         */
        sourceCluster: {
            /**
             * 待迁移的索引。
             * @example `product_info`
             */
            index: string;
            /**
             * 集群的Settings配置。
             * @example `{\n  \"index\": {\n    \"replication\": {\n}.....}}`
             */
            settings: string;
            /**
             * 集群的Mapping配置。
             * @example `{\"_doc\":{\"properties\":{\"user\":{\"properties\":{\"last\":{\"type\":\"text\",...}}}}}}`
             */
            mapping: string;
            /**
             * 索引类型。
             * @example `_doc`
             */
            type: string;
            /**
             * 索引路由字段，默认使用主键字段。
             * @example `_id`
             */
            routing: string;
            /**
             * 源集群类型。默认为elasticsearch。
             * @example `1`
             */
            dataSourceType: string;
        };
    }[];
}
