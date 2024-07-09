export interface ListChainInstanceResponse {
    /**
     * 请求ID
     * @example `838D1602-6D8F-47FB-B60A-656645D2****`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 页号
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    InstanceId: string;
    /**
     * 页大小
     * @example `30`
     */
    PageSize: number;
    /**
     * 总数量
     * @example `1`
     */
    TotalCount: number;
    /**
     * 交付链执行记录列表
     */
    ChainInstances: {
        /**
         * 完成时间
         * @example `1636685856000`
         */
        EndTime: number;
        /**
         * 交付链执行状态，取值：
         * - `RUNNING`：运行中
         * - `COMPLETE`：完成
         * - `CANCELING`：取消中
         * - `CANCELED`：已取消
         * @example `COMPLETE`
         */
        Status: string;
        /**
         * 开始时间
         * @example `1636685776000`
         */
        StartTime: number;
        /**
         * 交付链执行结果，取值：
         * - `SUCCESS`：成功
         * - `FAILED`：失败
         * - `CANCELED`：取消
         * - `DENIED`：阻断
         * @example `SUCCESS`
         */
        Result: string;
        /**
         * 交付链实例ID
         * @example `F4CF4DDB-BEF2-5575-****-*******`
         */
        ChainInstanceId: string;
        /**
         * 命名空间
         * @example `test-ns`
         */
        RepoNamespaceName: string;
        /**
         * 仓库名称
         * @example `test-repo`
         */
        RepoName: string;
        /**
         * 交付链执行记录
         */
        Chain: {
            /**
             * 交付链 ID
             * @example `chi-m42gbku0****`
             */
            ChainId: string;
            /**
             * 交付链名称
             * @example `test-chain`
             */
            ChainName: string;
            /**
             * 交付链版本
             * @example `1`
             */
            Version: number;
        };
    }[];
}
