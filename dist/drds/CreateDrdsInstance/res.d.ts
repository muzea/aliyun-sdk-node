export interface CreateDrdsInstanceResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `D99D4644-A70D-49A3-B8B4-767ACC50SE2R`
     */
    RequestId: string;
    /**
     * 结果详情。
     */
    Data: {
        /**
         * 订单ID。
         * @example `111111111111111`
         */
        OrderId: number;
        DrdsInstanceIdList: {
            /**
             * 实例信息。
             */
            drdsInstanceIdList: string[];
        };
    };
}
