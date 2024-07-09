export interface GetQualityProjectListRequest {
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `ccc_xp_pre***`
     */
    "InstanceId": string;
    /**
     * 质检任务ID（支持模糊搜索）。
     * @example `15`
     */
    "ProjectId"?: number;
    /**
     * 质检任务名（支持模糊搜索）。
     * @example `质检`
     */
    "ProjectName"?: string;
    /**
     * 质检任务状态。取值：
     * - **0**：启动
     * - **1**：关闭
     * @example `0`
     */
    "Status"?: number;
    /**
     * 当前页。默认为：**1**。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页大小。默认为：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 检查频次类型。取值：
     * - **1**：周期质检
     * - **4**：临时质检
     * @example `1`
     */
    "checkFreqType"?: number;
}
