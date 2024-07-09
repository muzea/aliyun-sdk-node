export interface CreateTtsQuestionResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D9AA9055-F73D-592C-832B-5AEECB093***`
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
         * ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4ba***`
         */
        Id: string;
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
