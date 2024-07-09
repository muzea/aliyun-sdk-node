export interface DescribeClusterEventsResponse {
    /**
     * 事件列表。
     */
    events: {
        /**
         * 事件ID。
         * @example `e-9ad04f72-8ee7-46bf-a02c-e4a06b39****`
         */
        event_id: string;
        /**
         * 事件类型。
         * @example `nodepool_update`
         */
        type: string;
        /**
         * 事件源。
         * @example `cluster`
         */
        source: string;
        /**
         * 事件关联的操作对象。
         * @example `npdd89dc2b76c04f14b06774883b******`
         */
        subject: string;
        /**
         * 事件开始时间。
         * @example `2020-12-01T17:31:00Z`
         */
        time: string;
        /**
         * 集群ID。
         * @example `c82e6987e2961451182edacd74faf****`
         */
        cluster_id: string;
        /**
         * 事件描述。
         */
        data: {
            /**
             * 事件级别。
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
             * @example `Start to upgrade NodePool nodePool/npdd89dc2b76c04f14b06774883b******`
             */
            message: string;
        };
    }[];
    /**
     * 分页信息。
     */
    page_info: {
        /**
         * 每页大小，取值范围1-50。
         * 默认值：50。
         * @example `50`
         */
        page_size: number;
        /**
         * 分页页数。
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
