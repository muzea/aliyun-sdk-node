export interface CreateAppInstanceGroupResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 交付组。
     */
    AppInstanceGroupModel: {
        /**
         * 交付组ID。
         * @example `aig-9ciijz60n4xsv****`
         */
        AppInstanceGroupId: string;
        /**
         * 订单ID。
         * @example `12345****`
         */
        OrderId: string;
        /**
         * 资源组ID。如果同时创建了资源组，则返回该参数。
         * @example `rg-ew7va2g1wl3vm****`
         */
        NodePoolId: string;
    };
}
