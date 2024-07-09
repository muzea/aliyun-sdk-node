export interface ModifyDBClusterConfigResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 实例ID。
         * @example `selectdb-cn-wny3li00g02`
         */
        DbInstanceName: string;
        /**
         * 实例数字ID。
         * @example `6585`
         */
        DbInstanceId: string;
        /**
         * 集群ID。
         * @example `selectdb-cn-wny3li00g02-be`
         */
        DbClusterId: string;
        /**
         * 任务ID
         * @example `107878719`
         */
        TaskId: number;
    };
    /**
     * 动态code，暂无使用，请忽略
     * @example `0`
     */
    DynamicCode: string;
    /**
     * 动态消息，暂无使用，请忽略
     * @example `An error occurred while processing your request.`
     */
    DynamicMessage: string;
    /**
     * 访问被拒绝详细信息。
     * @example `failed`
     */
    AccessDeniedDetail: string;
    /**
     * 请求ID。
     * @example `BC854513-E85E-54F3-9842-B9CCD3308CDD`
     */
    RequestId: string;
}
