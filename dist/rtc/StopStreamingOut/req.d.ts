export interface StopStreamingOutRequest {
    /**
     * 应用ID，通过控制台创建和查询，仅支持传单个ID。
     * @example `eo85****`
     */
    "AppId": string;
    /**
     * 已存在的频道ID，仅支持传单个ID。
     * @example `testid`
     */
    "ChannelId": string;
    /**
     * 已存在的旁路推流的任务ID，仅支持传单个ID。由大小写字母、数字、下划线、短划线（-）组成，最大55字节。不填，则由系统自动生成。
     * @example `123`
     */
    "TaskId": string;
}
