export interface GetCommonSwitchConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413****`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 同步状态。取值：
         * - **sync**：修改正在同步。
         * - **valid**：修改已生效。
         * @example `valid`
         */
        TargetSyncStatus: string;
        /**
         * 默认是否生效。取值：
         * - **add**：新增主机默认生效。
         * - **del**：新增主机默认不生效。
         * @example `add`
         */
        TargetDefault: string;
    };
}
