export interface DescribeCasterProgramRequest {
    /**
     * 导播台ID。如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 节目ID。
     * @example `1872639A-F203-4EC5-8E43-CB92E68F****`
     */
    "EpisodeId"?: string;
    /**
     * 节点类型。取值：
     *
     * - **Resource**：视频源。
     * - **Component**：组件。
     * @example `Resource`
     */
    "EpisodeType"?: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2016-06-29T09:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2016-06-29T10:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 页码。
     * @example `5`
     */
    "PageNum"?: number;
    /**
     * 每页节目数量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 节目状态。 取值：
     *
     * - **0**：未播放。
     * - **1**：播放中。
     * - **2**：播放完毕。
     * @example `0`
     */
    "Status"?: number;
}
