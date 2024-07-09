export interface DescribeCasterProgramResponse {
    /**
     * 导播台ID。
     * @example `LIVEPRODUCER_POST-cn-0pp1czt****`
     */
    CasterId: string;
    Episodes: {
        /**
         * 节点列表。
         */
        Episode: {
            ComponentIds: {
                /**
                 * 组件列表。
                 */
                ComponentId: string[];
            };
            /**
             * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2016-06-29T10:02:00Z`
             */
            EndTime: string;
            /**
             * 节目ID。
             * @example `1872639A-F203-4EC5-8E43-CB92E68F****`
             */
            EpisodeId: string;
            /**
             * 节目名称。
             * @example `program_name_1`
             */
            EpisodeName: string;
            /**
             * 节点类型。 取值：
             * - **Resource**：视频源。
             * - **Component**：组件。
             * @example `Resource`
             */
            EpisodeType: string;
            /**
             * 视频源ID。
             * @example `1872639A-F203-4EC5-8E43-CB92E837****`
             */
            ResourceId: string;
            /**
             * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2016-06-29T09:00:00Z`
             */
            StartTime: string;
            /**
             * 节目状态。
             * @example `0`
             */
            Status: number;
            /**
             * 切换策略。取值：
             * - **TimeFirst**：时间优先，直播节目只允许采用时间优先。
             * - **ContentFirst**：内容优先。
             *
             *
             * @example `TimeFirst`
             */
            SwitchType: string;
        }[];
    };
    /**
     * 启用标志。
     *
     * - **0**：不启用 。
     * - **1**：启用。
     * @example `1`
     */
    ProgramEffect: number;
    /**
     * 节目单名称。
     * @example `programs_name`
     */
    ProgramName: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 总记录数。
     * @example `1`
     */
    Total: number;
}
