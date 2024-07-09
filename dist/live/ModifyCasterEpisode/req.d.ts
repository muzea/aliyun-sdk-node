export interface ModifyCasterEpisodeRequest {
    /**
     * 组件列表。
     * 按照元素顺序由下而上排列，组件将与视频源同步切换。
     * - 当EpisodeType取值为**Component**视频源时，本参数才有用且必传。
     * - 当EpisodeType取值为**Resource**组件时，表示组件与视频源绑定并同步切换。
     * > N表示第几个组件ID。例如：ComponentId.1表示传入第一个组件ID；ComponentId.2表示传入第2个组件ID。
     * @example `["16A96B9A-F203-4EC5-8E43-CB92E68F****"]`
     */
    "ComponentId"?: string[];
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 节目ID。
     * @example `a2b8e671-2fe5-4642-a2ec-bf938623****`
     */
    "EpisodeId": string;
    /**
     * 节目名称。
     * @example `episode_name_1`
     */
    "EpisodeName"?: string;
    /**
     * 视频源ID。
     *
     * - 当EpisodeType取值为**Resource**视频源时，本参数才有用且必传。
     * - 当EpisodeType取值为**Component**组件时，本参数不可用。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E683****`
     */
    "ResourceId"?: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2016-06-29T09:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2016-06-29T10:20:00Z`
     */
    "EndTime"?: string;
    /**
     * 切换策略。 当EpisodeType取值为**Resource**视频源时有效。
     *
     * - **TimeFirst**：时间优先，直播类视频源只允许采用时间优先。
     * - **ContentFirst**：内容优先。
     * @example `TimeFirst`
     */
    "SwitchType"?: string;
}
