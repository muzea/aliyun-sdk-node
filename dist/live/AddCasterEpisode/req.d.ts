export interface AddCasterEpisodeRequest {
    /**
     * 组件列表。按照元素顺序由下而上排列。
     * 如果您通过[AddCasterComponent接口](~~63160~~)添加导播台组件，请查看AddCasterComponent接口调用返回的参数ComponentId值。
     * - 当资源类型为**Component**时，参数有用且必传。
     * - 当资源类型为**Resource**时，参数非必传，传入时表示组件与视频源绑定并同步切换。
     * >N表示第几个组件ID。例如：**ComponentId.1**表示传入第一个组件ID；**ComponentId.2**表示传入第2个组件ID。
     * @example `["a2b8e671-2fe5-4642-a2ec-bf93880e****"]`
     */
    "ComponentId"?: string[];
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台**> **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
    /**
     * 节点类型。 取值：
     *
     * - **Resource**：视频源。如果选择Resource类型，必须同时设置请求参数ResourceId和SwitchType。
     * - **Component**：组件。
     *
     * @example `Resource`
     */
    "EpisodeType": string;
    /**
     * 节目名称。
     * @example `episode_1`
     */
    "EpisodeName"?: string;
    /**
     * 视频源ID。
     * ><notice>当EpisodeType（节点类型）设为Resource时本参数有用且必传。
     * ></notice>
     * 如果您通过[AddCasterVideoResource接口](~~60250~~)添加导播台视频源，请查看AddCasterVideoResourcer接口调用返回的参数ResourceId值。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "ResourceId"?: string;
    /**
     * 起始时间。 格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     *
     * @example `2016-06-29T08:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。 格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     *
     * @example `2016-06-29T09:10:00Z`
     */
    "EndTime": string;
    /**
     * 切换策略。取值：
     * ><notice>当EpisodeType（节点类型）设为Resource时本参数才有效。
     * ></notice>
     *
     * - **TimeFirst**：时间优先 。
     * - **ContentFirst**：内容优先。
     * >更多关于视频源的信息，请参见[添加视频源](~~66094~~)。
     * @example `TimeFirst`
     */
    "SwitchType": string;
}
