export interface DescribeSlowQueryStatusResponse {
    /**
     * 请求ID
     * @example `5C1C1C45-C64A-AD30-565F-140871D57E5E`
     */
    requestId: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 区域
         * - outer 外网
         * - internal 内网
         * @example `internal`
         */
        region: string;
        /**
         * 开通状态
         * - enabled 开通
         * - disabled 未开通
         * - n/a 未知
         * @example `disabled`
         */
        status: string;
        /**
         * 应用ID
         * @example `100298370`
         */
        appGroupId: string;
    };
}
