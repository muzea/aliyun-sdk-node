export interface RunApplicationActionRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `C-C95F0A39D8FF****`
     */
    "ClusterId": string;
    /**
     * 动作名称。取值范围：
     * - start：启动。
     * - stop：停止。
     * - config：下发配置。
     * - restart：重启 。
     * - refresh_queues：刷新YARN队列。
     * - refresh_labels：刷新YARN标签。
     * @example `start`
     */
    "ActionName": string;
    /**
     * 操作对象。
     */
    "ComponentInstanceSelector": any;
    /**
     * 是否滚动执行。
     * @example `true`
     */
    "RollingExecute"?: boolean;
    /**
     * 运行策略。取值范围：
     * - FAILED_BLOCK：失败后阻塞。
     * - FAILED_CONTINUE：失败后继续。
     * @example `FAILED_CONTINUE`
     */
    "ExecuteStrategy"?: string;
    /**
     * 滚动执行间隔时间。单位：秒。
     * @example `10`
     */
    "Interval"?: number;
    /**
     * 每批次数量。
     * @example `1`
     */
    "BatchSize"?: number;
    /**
     * 描述。
     * @example `运行描述`
     */
    "Description"?: string;
}
