export interface RenewResponse {
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 接口返回码。
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~375339~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 根据当前所在地展示对应语言的错误提示。
     * @example `InstanceId cannot be empty.`
     */
    LocalizedMessage: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的订单编号数据。
     */
    Data: {
        /**
         * 接口调用成功后生成的订单编号。
         * @example `21450******0275`
         */
        OrderNo: string;
        /**
         * 自定义的订单编号（SerialNo）。
         * @example `12345678`
         */
        SerialNo: string;
    };
}
