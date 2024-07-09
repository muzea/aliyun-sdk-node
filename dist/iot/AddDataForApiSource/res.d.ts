export interface AddDataForApiSourceResponse {
    /**
     * 200表示成功。其它表示错误码。错误码详情，请参见[错误码](~~87387~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 数据ID。
     * @example `1234567890`
     */
    Data: number;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `BB71E443-4447-4024-A000-EDE09934561E`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
