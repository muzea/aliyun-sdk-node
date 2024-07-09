export interface ListSchedulerInstancesResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 调度器实例列表
     */
    SchedulerInstances: {
        /**
         * 业务线名称
         * @example `CLOUD_CODE_PUBLISHER`
         */
        Business: string;
        /**
         * 最大并发
         * @example `5`
         */
        MaxConcurrency: number;
        /**
         * 实例id
         * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
         */
        InstanceId: string;
        /**
         * 基础策略
         * @example `{}`
         */
        BaseStrategy: string;
        /**
         * 拥有者id
         * @example `234852938`
         */
        OwnerId: string;
    }[];
}
