export interface DescribeBindableSmartAccessGatewaysResponse {
    /**
     * 智能接入网关实例总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 分页查询时，每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `9731C2F5-B9A4-42FD-AFD2-361A403E6E85`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    SmartAccessGateways: {
        /**
         * 智能接入网关实例信息列表。
         */
        SmartAccessGateway: {
            /**
             * 智能接入网关实例ID。
             * @example `sag-00uc4vgxch1zsu****`
             */
            SmartAGId: string;
            /**
             * 智能接入网关实例名称。
             * @example `sdggd111`
             */
            Name: string;
            /**
             * 智能接入网关实例所属账号ID。
             * @example `168840159596****`
             */
            SmartAGUid: number;
        }[];
    };
}
