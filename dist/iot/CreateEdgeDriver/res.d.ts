export interface CreateEdgeDriverResponse {
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
     * @example `BB179FE4-94AB-41B0-AE8A-66DDB7B8B13A`
     */
    RequestId: string;
    /**
     * 驱动ID。
     * @example `fec565038d7544978d9aed5c1a******`
     */
    DriverId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
}
