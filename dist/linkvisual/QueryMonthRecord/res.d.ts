export interface QueryMonthRecordResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 返回数据的长度为当月天数，每位数据表示当天是否有录像信息，其中：
     * - **1**：有录像。
     * - **0**：未录像。
     * @example `110111111011111001111100111110`
     */
    Data: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `tenant auth error.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `06DC77A0-4622-42DB-9EE0-25FIOHS82JK1`
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
