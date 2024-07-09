export interface ListTaskFlowEdgesByConditionResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `D86249CD-422F-5ACF-85BA-9187C986AE0B`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    Edges: {
        /**
         * 任务流边列表。
         */
        Edge: {
            /**
             * 任务流边ID。
             * @example `24***`
             */
            Id: number;
            /**
             * 边的终点节点ID。
             * @example `44***`
             */
            NodeEnd: number;
            /**
             * 边的起点节点ID。
             * @example `44***`
             */
            NodeFrom: number;
        }[];
    };
}
