export interface AddCasterProgramRequest {
    /**
     * 节目单信息。
     */
    "Episode": {
        /**
         * 组件列表。按照元素顺序由下而上排列。
         * ><notice>当Episode.N.EpisodeType为**Component**时，本参数有用且必传。
         * ></notice>
         *  当节点类型为**Resource**时，表示组件与视频源绑定并同步切换。
         * @example `[ "a2b8e671-2fe5-4642-a2ec-bf931826****",  "a2b8e671-2fe5-4642-a2ec-28374657****"]`
         */
        ComponentId: string[];
        /**
         * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         *
         * @example `2016-06-29T10:02:00Z`
         */
        EndTime: string;
        /**
         * 节目名称。
         * @example `program_name_1`
         */
        EpisodeName: string;
        /**
         * 节点类型。
         *
         * - **Resource**：视频源。如果选择Resource类型，必须同时设置请求参数Episode.N.ResourceId和Episode.N.SwitchType。
         * - **Component**：组件。 如果选择Component类型，必须同时设置请求参数Episode.N.ComponentId.N。
         *
         * @example `Resource`
         */
        EpisodeType: string;
        /**
         * 视频源ID。
         * ><notice>当Episode.N.EpisodeType为**Resource**时，本参数有用且必传。
         * ></notice>
         *  当Episode.N.EpisodeType为**Component**时，本参数不可用。
         * 如果您通过[AddCasterVideoResource接口](~~60250~~)添加导播台视频源，请查看AddCasterVideoResource接口调用返回的参数ResourceId值。
         *
         * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
         */
        ResourceId: string;
        /**
         * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         *
         * @example `2016-06-29T09:00:00Z`
         */
        StartTime: string;
        /**
         * 切换策略。取值：
         * ><notice>当Episode.N.EpisodeType为**Resource**时，本参数才有用。
         * ></notice>
         *
         * - **TimeFirst**：时间优先，直播类视频源只允许采用时间优先。
         * - **ContentFirst**：内容优先。
         * @example `TimeFirst`
         */
        SwitchType: string;
    }[];
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**路径查看导播台名称。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    "CasterId": string;
}
