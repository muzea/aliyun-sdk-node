export interface ValidateSqlStatementResponse {
    /**
     * 请求ID。
     * @example `CBC799F0-****-1D30-8A4F-882ED4DD5E02`
     */
    requestId: string;
    /**
     * 表示业务请求是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 业务状态码，统一为200。
     * @example `200`
     */
    httpCode: number;
    /**
     * 当success为false时，该值不为空，表示业务错误码；当success为true时，该值为空。
     * @example `""`
     */
    errorCode: string;
    /**
     * 当success为false时，该值不为空，表示业务错误信息；当success为true时，该值为空。
     * @example `""`
     */
    errorMessage: string;
    /**
     * 本数据结构代表sql验证结果详情。
     */
    data: any;
}
