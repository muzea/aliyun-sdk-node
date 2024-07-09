export interface CreatePictureSearchAppResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~288314~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 以图搜图应用实例ID。
     * @example `5a502d3fbab8410e8fd4be9037c7****`
     */
    Data: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `Name is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `3A754C90-1286-4C2C-A3BA-8BF5BAD4BF76`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
