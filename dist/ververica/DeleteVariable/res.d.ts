export interface DeleteVariableResponse {
    /**
     * 请求ID。
     * @example `CBC799F0-AS7S-1D30-8A4F-882ED4DD****`
     */
    requestId: string;
    /**
     * 表示业务请求是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 固定值200。
     * @example `200`
     */
    httpCode: number;
    /**
     * - 当success为false，返回业务错误码；
     *
     * - 当success为true，返回空值。
     * @example `""`
     */
    errorCode: string;
    /**
     * - 当success为false，返回业务错误信息；
     * - 当success为true，返回空值。
     * @example `""`
     */
    errorMessage: string;
}
