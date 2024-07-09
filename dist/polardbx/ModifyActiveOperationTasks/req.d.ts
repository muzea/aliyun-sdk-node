export interface ModifyActiveOperationTasksRequest {
    /**
     * 地域IID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 运维事件ID。
     * @example `1`
     */
    "Ids": string;
    /**
     * 开始切换时间，格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2021-08-15T12:00:00Z`
     */
    "SwitchTime"?: string;
    /**
     * 是否立即执行：
     * - 1：立即执行
     * - 0：指定时间执行
     * @example `1`
     */
    "ImmediateStart"?: number;
}
