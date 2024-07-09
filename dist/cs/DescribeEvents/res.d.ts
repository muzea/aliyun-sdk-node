export interface DescribeEventsResponse {
    /**
     * 事件详情。
     */
    events: {
        /**
         * 事件ID。
         * @example `A234-1234-1234`
         */
        event_id: string;
        /**
         * 事件类型。取值：
         * - `cluster_create`：创建集群。
         * - `cluster_scaleout`：扩容集群。
         * - `cluster_attach`：添加已有节点。
         * - `cluster_delete`：删除集群。
         * - `cluster_upgrade`：升级集群。
         * - `cluster_migrate`：迁移集群。
         * - `cluster_node_delete`：移除节点。
         * - `cluster_node_drain`：清空节点。
         * - `cluster_modify`：修改集群。
         * - `cluster_configuration_modify`：修改集群管控配置。
         * - `cluster_addon_install`：安装组件。
         * - `cluster_addon_upgrade`：升级组件。
         * - `cluster_addon_uninstall`：卸载组件。
         * - `runtime_upgrade`：升级运行时。
         * - `nodepool_upgrade`：升级节点池。
         * - `nodepool_update`：更新节点池。
         * @example `nodepool_upgrade`
         */
        type: string;
        /**
         * 事件来源。
         * @example `/clusters/cf62854ac2130470897be7a27ed1f****​/nodepools`
         */
        source: string;
        /**
         * 事件主体。
         * @example `nodePool-id`
         */
        subject: string;
        /**
         * 事件开始时间。
         * @example `2022-11-23T20:48:01+08:00`
         */
        time: string;
        /**
         * 集群ID。
         * @example `cluster-id`
         */
        cluster_id: string;
        /**
         * 事件描述。
         */
        data: {
            /**
             * 事件等级。
             * @example `info`
             */
            level: string;
            /**
             * 事件状态。
             * @example `Started`
             */
            reason: string;
            /**
             * 事件详情。
             * @example `Start to upgrade NodePool nodePool/nodePool-A`
             */
            message: string;
        };
    }[];
    /**
     * 分页信息。
     */
    page_info: {
        /**
         * 每页显示数量。
         * @example `50`
         */
        page_size: number;
        /**
         * 分页查询页数。
         * @example `1`
         */
        page_number: number;
        /**
         * 结果总数。
         * @example `3`
         */
        total_count: number;
    };
}
