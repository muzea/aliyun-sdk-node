export interface QueryNamespaceResponse {
    /**
     * 错误时的提示信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `abcde-fg`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Success`
     */
    ErrorCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的数据。
     */
    Data: {
        /**
         * 命名空间所属的地域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 命名空间名字。
         * @example `default`
         */
        Namespace: string;
    }[];
}
