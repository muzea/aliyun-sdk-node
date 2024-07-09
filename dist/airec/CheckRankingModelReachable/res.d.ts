export interface CheckRankingModelReachableResponse {
    /**
     * 返回结果
     * @example `true`
     */
    result: boolean;
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 当前请求的RequestID。
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `An internal server error occurred`
     */
    message: string;
}
