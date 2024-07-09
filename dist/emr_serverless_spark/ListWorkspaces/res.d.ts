export interface ListWorkspacesResponse {
    /**
     * 工作空间列表。
     */
    workspaces: {
        /**
         * Workspace ID。
         * @example `w-******`
         */
        workspaceId: string;
        /**
         * 工作空间名称。
         * @example `spark批作业空间-1`
         */
        workspaceName: string;
        /**
         * 资源规格。
         * @example `100cu`
         */
        resourceSpec: string;
        /**
         * OSS路径。
         * @example `spark-result`
         */
        storage: string;
        /**
         * DLF Catalog信息。
         * @example `default`
         */
        dlfCatalogId: string;
        /**
         * 付费类型。
         * @example `PayAsYouGo or Subscription`
         */
        paymentType: string;
        /**
         * 订购周期（pre付费类型必填）。
         * @example `YEAR, MONTH, WEEK, DAY, HOUR, MINUTE`
         */
        paymentDurationUnit: string;
        /**
         * 订购周期数量（pre付费类型必填）。
         * @example `1`
         */
        duration: number;
        /**
         * 是否自动续费（pre付费类型必填）。
         * @example `true`
         */
        autoRenew: boolean;
        /**
         * 自动续费时长（pre付费类型必填）。
         * @example `1`
         */
        autoRenewPeriod: number;
        /**
         * 自动续费周期（pre付费类型必填）。
         * @example `YEAR, MONTH, WEEK, DAY, HOUR, MINUTE`
         */
        autoRenewPeriodUnit: string;
        /**
         * 工作空间状态。
         * @example `STARTING,RUNNING,TERMINATED`
         */
        workspaceStatus: string;
        /**
         * 失败原因。
         * @example `out of stock`
         */
        failReason: string;
        /**
         * 支付状态。
         * @example `PAID/UNPAID`
         */
        paymentStatus: string;
        /**
         * 地域ID。
         * @example `cn-shanghai`
         */
        regionId: string;
        /**
         * 工作空间创建时间。
         * @example `1684115879955`
         */
        createTime: number;
        /**
         * 工作空间释放时间。
         * @example `1687103999999`
         */
        endTime: number;
        /**
         * 工作空间状态的变更信息。
         */
        stateChangeReason: {
            /**
             * 错误码。
             * @example `0`
             */
            code: string;
            /**
             * 错误信息。
             * @example `Success`
             */
            message: string;
        };
        /**
         * 工作空间释放原因。
         * @example `SERVICE_RELEASE`
         */
        releaseType: string;
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
    /**
     * 下一页TOKEN。
     * @example `1`
     */
    nextToken: string;
    /**
     * 一次获取的最大记录数。
     * @example `20`
     */
    maxResults: number;
    /**
     * 记录总数。
     * @example `200`
     */
    totalCount: number;
}
