export interface ListLiveRecordFilesResponse {
    /**
     * 请求ID。
     * @example `DE24625C-7C0F-4020-8448-****`
     */
    RequestId: string;
    /**
     * 分页的页码。
     * @example `1`
     */
    PageNo: number;
    /**
     * 排序。
     * @example `asc`
     */
    SortBy: string;
    /**
     * 每页大小。
     * @example `10`
     */
    PageSize: string;
    /**
     * 符合条件的总个数。
     * @example `100`
     */
    TotalCount: string;
    /**
     * 索引文件列表
     */
    Files: {
        /**
         * 索引文件地址。
         * @example `http://****​/atestObject****.m3u8`
         */
        RecordUrl: string;
        /**
         * 开始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2015-12-01T07:36:00Z`
         */
        StartTime: string;
        /**
         * 结束时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2015-12-01T07:36:10Z`
         */
        EndTime: string;
        /**
         * 录制时长。单位：秒。
         * @example `100.0`
         */
        Duration: number;
        /**
         * 视频宽。
         * @example `480`
         */
        Width: number;
        /**
         * 视频高。
         * @example `640`
         */
        Height: number;
        /**
         * UTC格式创建时间。
         * @example `2016-05-27T09:40:56Z`
         */
        CreateTime: string;
        /**
         * 录制文件的储存相关信息。
         * @example `{ "Type": "oss", "Endpoint":"oss-cn-shanghai.aliyuncs.com", "Bucket": "test-bucket" }`
         */
        RecordOutput: string;
        /**
         * 索引文件ID。
         * @example `c4d7f0a4-b506-43f9-8de3-07732c3f****`
         */
        RecordId: string;
        /**
         * 直播流名。
         * @example `LiveStream***`
         */
        StreamUrl: string;
        /**
         * 录制任务名称。
         * @example `LiveRecordJob***`
         */
        JobName: string;
        /**
         * 录制文件格式。
         * @example `m3u8`
         */
        Format: string;
        /**
         * 录制任务ID。
         * @example `c4d7f0a4-b506-43f9-8de3-07732c3f****`
         */
        JobId: string;
    }[];
}
