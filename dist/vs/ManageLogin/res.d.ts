export interface ManageLoginResponse {
    /**
     * 请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 连接信息
     */
    LoginInfo: {
        /**
         * ssh 连接的host
         * @example `12.10.4.10`
         */
        LoginHostname: string;
        /**
         * ssh 连接端口
         * @example `10004`
         */
        LoginPort: number;
    };
}
