export interface AttachHostAccountsToHostShareKeyResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 接口调用的结果。
     */
    Results: {
        /**
         * 错误码。错误码为**OK**时，表示关联成功；其他错误码表示关联失败。
         * @example `OK`
         */
        Code: string;
        /**
         * 错误信息。
         * @example `The host account does not exist`
         */
        Message: string;
        /**
         * 主机共享密钥的ID。
         * @example `10267`
         */
        HostShareKeyId: string;
        /**
         * 主机账号的ID。
         * @example `1201`
         */
        HostAccountId: string;
    }[];
}
