export interface DeleteClientIdsResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。错误码详情，请参见[错误码](~~87387~~)。
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
     * @example `89F22330-BAEE-****-****-41BA46D6E267`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
}
