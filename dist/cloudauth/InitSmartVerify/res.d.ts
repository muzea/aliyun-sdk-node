export interface InitSmartVerifyResponse {
    /**
     * 返回码。取值：
     *   - **200**：成功。
     *   - 其他值：失败，详见**[错误码](~~186596~~)**。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0F591A7A-98B7-58D8-B9AC-3D71703AEE57`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    ResultObject: {
        /**
         * 认证请求ID，增强版实人认证服务认证请求的唯一标识。
         * 查询认证结果时，必须传入认证请求ID。
         * @example `91707dc296d469ad38e4c5efa6a0xxxx`
         */
        CertifyId: string;
    };
}
