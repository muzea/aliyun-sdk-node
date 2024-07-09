export interface UAIDVerificationResponse {
    /**
     * 访问被拒绝详细信息。
     * @example `-`
     */
    AccessDeniedDetail: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `68A40250-50CD-034C-B728-0BD******177`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 获取到的UAID的值。
         * @example `B1E0C1********9F757AF52A035`
         */
        Uaid: string;
    };
    /**
     * 请求状态码。取值：
     * - **OK**：成功。
     * @example `OK`
     */
    Code: string;
}
