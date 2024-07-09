export interface CreateTaskGroupRequest {
    /**
     * 所属应用 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    "AppId"?: string;
    /**
     * 任务过期时间
     * @example `2020-10-10`
     */
    "ExpireAt"?: string;
    /**
     * 任务组名
     * @example `任务组`
     */
    "GroupName"?: string;
    /**
     * 规则 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    "RuleId"?: string;
    /**
     * 可执行的时间范围
     * @example `17:00`
     */
    "RunnableTimeFrom"?: string;
    /**
     * 可执行的时间范围
     * @example `18:00`
     */
    "RunnableTimeTo"?: string;
    /**
     * 执行周期，immediately-立刻，weekly-每周，monthly-每月
     * @example `immediately`
     */
    "TriggerPeriod"?: string;
    /**
     * 客户端幂等参数
     * @example `无`
     */
    "ClientToken"?: string;
    /**
     * 周期执行，比如每周3执行
     * @example `3`
     */
    "Day"?: number[];
    /**
     * 视频信息。
     */
    "VideoInfo": {
        /**
         * 视频地址
         * @example `18/mrtc//641905591891464_record_64190559189146412713.mp4`
         */
        VideoUrl: string;
        /**
         * 视频 meta 地址
         * @example `18/mrtc//641905591891464_record_64190559189146412713.mp4.meta`
         */
        VideoMetaUrl: string;
        /**
         * 规则id
         * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
         */
        RuleId: string;
    }[];
}
