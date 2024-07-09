export interface UpdateMemberResponse {
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
     * 当success为true，返回创建的成员；当success为false，该值为空。
     */
    data: any;
}
