export interface FindContainerNetworkConnectRequest {
    /**
     * 要查询的元素的查询类型。取值：
     * - **EDGE**：连接信息
     * @example `EDGE`
     */
    "CriteriaType"?: string;
    /**
     * 网络连接的开始时间。
     * @example `1666886400000`
     */
    "StartTime"?: number;
    /**
     * 配置网络连接的结束时间。
     * @example `1649260799999`
     */
    "EndTime"?: number;
    /**
     * 源节点信息，用于筛选源节点。
     */
    "SrcNode"?: {
        /**
         * 节点类型，取值：
         * - **app**：应用。表示节点类型为应用。
         * @example `app`
         */
        NodeType: string;
        /**
         * 指定要查询的容器集群的ID。
         * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
         * @example `c56xxx1775dea0`
         */
        ClusterId: string;
        /**
         * 集群的命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 容器应用名称。
         * @example `arms-prometheus-ack-arms-prometheus`
         */
        AppName: string;
        /**
         * Pod名称。
         * @example `abc-deployment-yacs-31144-39265-1384966-7f8c8cd578-h6mhb`
         */
        PodName: string;
        /**
         * 节点ID列表。
         */
        NodeIds: string[];
    };
    /**
     * 目的节点信息，用于筛选目的节点。
     */
    "DstNode"?: {
        /**
         * 节点类型，取值：
         * - **app**：应用。表示节点类型为应用。
         * @example `app`
         */
        NodeType: string;
        /**
         * 指定要查询的容器集群的ID。
         * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
         * @example `f5x833820xx`
         */
        ClusterId: string;
        /**
         * 集群的命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 容器应用名称。
         * @example `nginx-ingress-controller`
         */
        AppName: string;
        /**
         * Pod名称。
         * @example `abc-deployment-yacs-31144-39265-1384966-7f8c8cd578-h6mhb`
         */
        PodName: string;
        /**
         * 节点ID列表。
         */
        NodeIds: string[];
    };
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
}
