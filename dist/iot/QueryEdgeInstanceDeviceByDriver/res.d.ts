export interface QueryEdgeInstanceDeviceByDriverResponse {
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
     * @example `C2AEE142-A9ED-46C5-9EA4-BF0817F0D556`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时返回的数据。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中每页显示的记录数量。
         * @example `15`
         */
        PageSize: number;
        /**
         * 驱动下关联的子设备总数。
         * @example `1`
         */
        Total: number;
        /**
         * 子设备信息列表。
         */
        DeviceList: {
            /**
             * 子设备ID。
             * @example `Hathoyxglj9jpYPyw3WN******`
             */
            IotId: string;
        }[];
    };
}
