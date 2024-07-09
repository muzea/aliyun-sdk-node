export interface UpdatePublicNetworkResponse {
    /**
     * 请求ID。
     * @example `2A88ECA1-D827-4581-AD39-05149586****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 公网地址开关状态。
         * @example `false`
         */
        enablePublic: boolean;
    };
}
