export interface GetDataServiceApplicationResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `正常`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: string;
    /**
     * App详情。
     */
    Data: {
        /**
         * API调用认证方式一，简单身份认证中的AppCode。
         * @example `CODE123`
         */
        ApplicationCode: string;
        /**
         * API调用认证方式二，加密签名身份认证中的AppKey。
         * @example `KEY123`
         */
        ApplicationKey: string;
        /**
         * API调用认证方式二，加密签名身份认证中的AppSecret。
         * @example `SECRET123`
         */
        ApplicationSecret: string;
        /**
         * 关联工作空间的ID。
         * @example `10001`
         */
        ProjectId: number;
        /**
         * 应用名称。
         * @example `测试应用`
         */
        ApplicationName: string;
        /**
         * App的ID。
         * @example `10000`
         */
        ApplicationId: number;
    };
}
