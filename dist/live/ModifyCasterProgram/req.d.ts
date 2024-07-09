export interface ModifyCasterProgramRequest {
    /**
     * 节目信息。
     */
    "Episode": {
        /**
         * 组件列表。按照元素顺序由下而上排列，组件将与视频源同步切换
         * - 当节点类型为**Component**时，本参数才有用且必传。
         * - 当节点类型为**Resource**时，表示组件与视频源绑定并同步切换。
         * @example `["a2b8e671-2fe5-4642-a2ec-bf93888****" ]`
         */
        ComponentId: string[];
        /**
         * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2016-06-29T10:04:00Z`
         */
        EndTime: string;
        /**
         * 节目ID。如果您通过[AddCasterEpisode接口](~~94745~~)添加导播台节目，请查看AddCasterEpisode接口调用返回的参数EpisodeId值。
         * @example `a2b8e671-2fe5-4642-a2ec-bf938887****`
         */
        EpisodeId: string;
        /**
         * 节目名称。
         * @example `program_name_2`
         */
        EpisodeName: string;
        /**
         * 节目类型。取值：
         * - **Resource**：视频源。
         * - **Component**：组件。
         * @example `Resource`
         */
        EpisodeType: string;
        /**
         * 视频源ID。 如果您通过[AddCasterVideoResource接口](~~60250~~)添加导播台视频源，请查看AddCasterVideoResource接口调用返回的参数ResourceId值。
         * @example `a2b8e671-2fe5-4642-a2ec-bf938887****`
         */
        ResourceId: string;
        /**
         * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2016-06-29T09:02:00Z`
         */
        StartTime: string;
        /**
         * 切换策略。 节点类型为**Resource**视频源时有效。
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
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `a2b8e671-2fe5-4642-a2ec-bf93880e****`
     */
    "CasterId": string;
}
