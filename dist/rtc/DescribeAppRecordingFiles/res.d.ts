export interface DescribeAppRecordingFilesResponse {
    /**
     * Id of the request
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CF8`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNo: number;
    /**
     * 每页数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数量。
     * @example `10`
     */
    TotalCnt: number;
    /**
     * 录制文件列表。
     */
    Items: {
        /**
         * 频道ID。
         * @example `testchannelId`
         */
        ChannelId: string;
        /**
         * 录制任务ID。
         * @example `test001`
         */
        TaskId: string;
        /**
         * 录制文件存放路径。
         * @example `record/appid/12_task_local1/1712279809158_1712279844691/playlist.mp4`
         */
        FilePath: string;
        /**
         * 录制文件大小，单位：Byte。
         * @example `10000`
         */
        FileSize: number;
        /**
         * 录制文件时长，单位：ms。
         * @example `200`
         */
        FileDuration: number;
        /**
         * 参考开启录制任务vendor。
         * @example `1`
         */
        Vendor: number;
        /**
         * 参考录制任务region。
         * @example `1`
         */
        Region: number;
        /**
         * 用户自定义的bucket。
         * @example `rtc-bucket`
         */
        Bucket: string;
        /**
         * 录制任务开始时间戳，单位：ms。
         * @example `1712376012000`
         */
        StartTs: number;
        /**
         * 录制文件生成时间戳，单位：ms。
         * @example `1712376032000`
         */
        FileCreateTs: number;
    }[];
}
