export interface ModifyDedicatedHostsChargeTypeResponse {
    /**
     * 生成的订单ID。
     * @example `20413515388****`
     */
    OrderId: string;
    /**
     * 请求ID。
     * @example `B61C08E5-403A-46A2-96C1-F7B1216DB10C`
     */
    RequestId: string;
    FeeOfInstances: {
        /**
         * 订单费用详情。
         */
        FeeOfInstance: {
            /**
             * 专有宿主机ID。
             * @example `dh-bp181e5064b5sotrr****`
             */
            InstanceId: string;
            /**
             * 账单费用货币单位。
             * 中国站：CNY。
             * 国际站：USD。
             * @example `CNY`
             */
            Currency: string;
            /**
             * 费用数值。
             * @example `0`
             */
            Fee: string;
        }[];
    };
}
