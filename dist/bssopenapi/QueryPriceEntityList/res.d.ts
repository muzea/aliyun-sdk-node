export interface QueryPriceEntityListResponse {
    /**
     * Id of the request
     * @example `79EE7556-0CFD-44EB-9CD6-B3B526E3A85F`
     */
    RequestId: string;
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 返回信息
     * @example `Successful！`
     */
    Message: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 定价对象列表
         */
        PriceEntityInfoList: {
            /**
             * 定价对象code
             * @example `instance_type`
             */
            PriceEntityCode: string;
            /**
             * 定价对象名称
             * @example `云服务器实例`
             */
            PriceEntityName: string;
            /**
             * 定价对象因子列表
             */
            PriceFactorList: {
                /**
                 * 定价对象因子code
                 * @example `vm_region_no`
                 */
                PriceFactorCode: string;
                /**
                 * 定价对象因子名称
                 * @example `地域`
                 */
                PriceFactorName: string;
                /**
                 * 定价对象因子值列表
                 */
                PriceFactorValueList: string[];
            }[];
        }[];
    };
}
