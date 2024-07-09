export interface AsrTaskResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `DF4B0162-A5E0-5F85-BEFD-CAC36E876***`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `OK`
     */
    Code: number;
    /**
     * 错误信息
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 检测结果
         * @example `北京的天气`
         */
        Result: string;
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
}
