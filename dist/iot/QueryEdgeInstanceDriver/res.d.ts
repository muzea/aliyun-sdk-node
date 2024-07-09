export interface QueryEdgeInstanceDriverResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `77F540BC-A0EF-46A4-ABDE-18644C69AAF5`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中每页显示的记录数量。
         * @example `30`
         */
        PageSize: number;
        /**
         * 驱动数量。
         * @example `1`
         */
        Total: number;
        /**
         * 驱动列表。
         */
        DriverList: {
            /**
             * 驱动创建时间。
             * @example `2019-06-26 17:22:25`
             */
            GmtCreate: string;
            /**
             * 驱动最后一次更新时间。
             * @example `2019-06-26 17:22:25`
             */
            GmtModified: string;
            /**
             * 驱动ID。
             * @example `9c1ae7bd59f1469abbdccc959228****`
             */
            DriverId: string;
            /**
             * 订单编号。
             * @example `11123458765423`
             */
            OrderId: string;
            /**
             * 驱动版本号。
             * @example `1.0.0`
             */
            DriverVersion: string;
        }[];
    };
}
