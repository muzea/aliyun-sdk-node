export interface DescribeFlowLogSagsResponse {
    /**
     * 列表条条目数。
     * @example `35`
     */
    TotalCount: number;
    /**
     * 当前分页包含的条目数。
     * @example `4`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `8D945945-85F2-4BD7-A144-7DC0E8B5A0DC`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    Sags: {
        /**
         * 智能接入网关列表。
         */
        Sag: {
            /**
             * 智能接入网关实例描述。
             * @example `sag-100wm`
             */
            Description: string;
            /**
             * 智能接入网关实例ID。
             * @example `sag-6rm1awijm3ktic****`
             */
            SmartAGId: string;
            /**
             * 智能接入网关实例名称。
             * @example `ruijie-test-2`
             */
            Name: string;
        }[];
    };
}
