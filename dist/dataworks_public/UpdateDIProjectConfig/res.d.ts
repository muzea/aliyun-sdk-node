export interface UpdateDIProjectConfigResponse {
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用的唯一ID。用于出现错误后定位日志，排查问题。
     * @example `0000-ABCD-EFG	`
     */
    RequestId: string;
    /**
     * 修改目标工作空间中数据集成同步解决方案任务默认全局配置的返回结果。
     */
    Data: {
        /**
         * 修改数据集成同步解决方案任务默认的全局配置是否成功。取值如下：
         * - success：修改成功。
         * - fail：修改失败。
         * @example `success`
         */
        Status: string;
    };
}
