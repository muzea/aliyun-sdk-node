export interface DescribeNodeToolExecutionHistoriesResponse {
    /**
     * 请求ID。
     * @example `FDC6EF03-8B7D-470D-AB81-BD9C9713A9E3`
     */
    RequestId: string;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页面大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `2`
     */
    TotalCount: number;
    Histories: {
        /**
         * nodetool执行历史列表。
         */
        History: {
            /**
             * 执行节点。
             * @example `core-1,core-2`
             */
            Nodes: string;
            /**
             * 如遇到报错，错误详细信息。
             * @example `See \"nodetool help\" or \"nodetool help`
             */
            ErrorMessage: string;
            /**
             * 是否已执行完。可选值：true/false。
             * @example `true`
             */
            IsEnded: boolean;
            /**
             * 集群创建时间。
             * @example `1576725956000`
             */
            CreateTime: number;
            /**
             * 执行的作业id。job-xxxx
             * @example `job-C3zcrKtZ****qapO`
             */
            JobId: string;
            /**
             * nodetool命令。
             * @example `settimeout misc`
             */
            Command: string;
            /**
             * 集群数据中心ID。
             * @example `cn-shanghai-f`
             */
            DataCenterId: string;
            /**
             * nodetool命令后的参数。
             * @example `10093`
             */
            Arguments: string;
            /**
             * 地域ID
             * @example `cn-shanghai`
             */
            RegionId: string;
            /**
             * 修改时间。
             * @example `1576725689000`
             */
            ModifyTime: number;
        }[];
    };
}
