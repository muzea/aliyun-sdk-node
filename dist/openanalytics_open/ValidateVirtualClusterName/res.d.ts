export interface ValidateVirtualClusterNameResponse {
    /**
     * 请求ID。
     * @example `C039FD4D-2F3C-4556-AF09-864D3A6485B2`
     */
    RequestId: string;
    /**
     * 校验返回的数据。
     */
    Data: {
        /**
         * 如果虚拟集群名称不合法，上报的错误信息。
         * @example `null`
         */
        Message: string;
        /**
         * 校验返回值，是否合法。取值：
         * - **true**：合法
         * - **false**：不合法
         * @example `true`
         */
        Legal: string;
    };
}
