export interface FaceCompareResponse {
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4ba***`
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
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        Id: string;
        /**
         * 请求 ID
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        RequestId: string;
        /**
         * 状态码
         * @example `200`
         */
        Code: string;
        /**
         * 信息。
         * @example `-`
         */
        Message: string;
        /**
         * 认证是否通过。
         * - T：通过。
         * - F：不通过。
         * @example `T`
         */
        Passed: string;
        /**
         * 人脸比对分。
         * @example `60.86`
         */
        VerifyScore: number;
        /**
         * 状态
         * @example `completed`
         */
        Status: string;
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * HTTP 状态码
     * @example `200`
     */
    HttpCode: number;
}
