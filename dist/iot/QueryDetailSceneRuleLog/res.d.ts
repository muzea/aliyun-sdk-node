export interface QueryDetailSceneRuleLogResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `ED2DF141-B09A-4C8A-BAA5-30CCEE63036C`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
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
         * @example `15`
         */
        PageSize: number;
        /**
         * 场景联动规则日志总数量。
         * @example `1`
         */
        Total: number;
        /**
         * 场景联动规则日志详情列表。
         */
        LogList: {
            /**
             * 接口返回码。200表示成功，其它表示错误码，详情请参见**Message**参数中的错误信息提示。
             * @example `9201`
             */
            Code: string;
            /**
             * 接口返回的场景联动规则日志信息。
             * @example `device offline, productKey: a1c3t****, deviceName: my_device1`
             */
            Message: string;
            /**
             * 场景联动关联的子设备ProductKey和DeviceName。格式为`your_ProductKey/your_DeviceName`。
             * @example `a1c3t****​/my_device1`
             */
            PkDn: string;
        }[];
    };
}
