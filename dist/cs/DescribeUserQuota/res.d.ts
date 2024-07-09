export interface DescribeUserQuotaResponse {
    /**
     * 托管版集群配额。默认为20。如果超过默认值，需[到配额平台提交申请](https://quotas.console.aliyun.com/products/csk/quotas)扩容。
     * @example `20`
     */
    amk_cluster_quota: number;
    /**
     * ASK集群配额，默认为20。如果超过默认值，需[到配额平台提交申请](https://quotas.console.aliyun.com/products/csk/quotas)扩容。
     * @example `3`
     */
    ask_cluster_quota: number;
    /**
     * 单集群节点池配额，默认值为20。如果超过默认值，需[到配额平台提交申请](https://quotas.console.aliyun.com/products/csk/quotas)扩容
     * @example `10`
     */
    cluster_nodepool_quota: number;
    /**
     * 单账户总集群配额，默认为50。如果超过默认值，需[到配额平台提交申请](https://quotas.console.aliyun.com/products/csk/quotas)扩容。
     * @example `50`
     */
    cluster_quota: number;
    /**
     * 单集群节点数配额，默认为100。如果超过默认值，需[到配额平台提交申请](https://quotas.console.aliyun.com/products/csk/quotas)扩容。
     * @example `100`
     */
    node_quota: number;
    /**
     * 【该字段已废弃】
     * 边缘增强型节点池Quota。
     */
    edge_improved_nodepool_quota: {
        /**
         * 【该字段已废弃】
         * 每个边缘增强型节点池允许的最大带宽，单位：Mbps。
         * @example `10`
         */
        bandwidth: number;
        /**
         * 【该字段已废弃】
         * 每个账号下允许创建的边缘增强型节点池数量。
         * @example `3`
         */
        count: number;
        /**
         * 【该字段已废弃】
         * 每个边缘增强型节点池最大购买时长，单位：月。
         * >由于边缘增强型节点池为按量付费，您暂时无需关注该字段。
         * @example `3`
         */
        period: number;
    };
    /**
     * 新配额项，如存在该字段，则以该字段为准。
     */
    quotas: any;
}
