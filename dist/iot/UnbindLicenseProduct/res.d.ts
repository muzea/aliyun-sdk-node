export interface UnbindLicenseProductResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见本文下方的**错误码**。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 表示取消产品授权License是否成功。
     * - **true**：取消产品授权License成功。
     * - **false**：取消产品授权License失败。
     * @example `true`
     */
    Data: boolean;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
