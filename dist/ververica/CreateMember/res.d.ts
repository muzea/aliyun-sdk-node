export interface CreateMemberResponse {
    /**
     * 请求ID。
     * @example `F989CA70-2925-5A94-92B7-20F5762B71C8`
     */
    requestId: string;
    /**
     * 表示业务请求是否成功。
     * @example `True`
     */
    success: boolean;
    /**
     * 业务状态码，统一为200；使用success表示业务请求是否成功。
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
    /**
     * - 当success为false，返回空值；
     * - 当success为true，返回授权信息。
     */
    data: any;
}
