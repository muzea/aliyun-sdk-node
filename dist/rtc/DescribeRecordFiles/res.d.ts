export interface DescribeRecordFilesResponse {
    /**
     * 返回分页数。
     * @example `1`
     */
    TotalPage: number;
    /**
     * 请求ID。
     * @example `760bad53276431c499e30dc36f6b****`
     */
    RequestId: string;
    /**
     * 返回结果数。
     * @example `1`
     */
    TotalNum: number;
    /**
     * 文件列表。
     */
    RecordFiles: {
        /**
         * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-11-01T17:36:00Z`
         */
        StartTime: string;
        /**
         * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-10-02T17:36:00Z`
         */
        CreateTime: string;
        /**
         * 应用ID。
         * @example `yourAppId`
         */
        AppId: string;
        /**
         * 频道ID。
         * @example `yourChannelId`
         */
        ChannelId: string;
        /**
         * 录制文件OSS URL。
         * @example `http://rtc-demo.oss-cn-****.aliyuncs.com/record/10-15-1/****​/record-002_yourTaskId/example.m3u8`
         */
        Url: string;
        /**
         * 录制文件时长。
         * @example `1800`
         */
        Duration: number;
        /**
         * 任务ID。
         * @example `yourTaskId`
         */
        TaskId: string;
        /**
         * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2020-11-02T17:36:00Z`
         */
        StopTime: string;
    }[];
}
