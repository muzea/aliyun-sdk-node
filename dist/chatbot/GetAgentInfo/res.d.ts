export interface GetAgentInfoResponse {
    /**
     * Id of the request
     * @example `FC384CE1-8D42-1900-84E1-F33F990F2B5E`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息
     * @example `Parameter.Invalid`
     */
    Message: string;
    /**
     * 业务空间数据
     */
    Data: {
        /**
         * 业务空间名称
         * @example `业务空间_881`
         */
        AgentName: string;
        /**
         * 业务空间签名，用于PAAS接口指定业务空间时使用
         * @example `4e7400028e6f4a7393ed3acf6a7b8927_p_beebot_public`
         */
        AgentKey: string;
    };
}
