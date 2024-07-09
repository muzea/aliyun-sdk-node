export interface DescribeGroupQpsResponse {
    /**
     * 本次请求的ID。
     * @example `D6E46F10-F26C-4AA0-BB69-FE2743D9AE62`
     */
    RequestId: string;
    GroupQps: {
        /**
         * 返回指定的分组的请求量
         */
        MonitorItem: {
            /**
             * 对应时间节点的请求数量
             * @example `17`
             */
            ItemValue: string;
            /**
             * 时间节点
             * @example `2023-08-02T09:15:00Z`
             */
            ItemTime: string;
        }[];
    };
}
