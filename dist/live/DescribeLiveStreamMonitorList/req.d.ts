export interface DescribeLiveStreamMonitorListRequest {
    /**
     * 监播室ID。
     * >通过查看[CreateLiveStreamMonitor](~~352011~~)接口的返回参数获取MonitorId值。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    "MonitorId"?: string;
    /**
     * 当前页数值。
     * @example `2`
     */
    "PageNum"?: number;
    /**
     * 每页监播室数值个数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 监播室内状态。取值：
     * - 1：监播中。
     * - 0：未监播。
     * @example `1`
     */
    "Status"?: number;
    /**
     * 启动时间顺序。取值：
     * - 0：默认（按启动状态倒序，启动时间不参与排序）。
     * - 1：启动时间倒序。
     * - 2：启动时间正序。
     * @example `1`
     */
    "OrderRule"?: number;
}
