export interface DescribeRecordsResponse {
    /**
     * 第几个分页。
     * > 仅限录制查询。
     * @example `1`
     */
    PageNum: number;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 查询下个记录的开始时间。
     * > 仅限截图查询。
     * @example `2018-12-10T11:00:00Z`
     */
    NextStartTime: string;
    /**
     * 分页大小。
     * > 仅限录制查询。
     * @example `20`
     */
    PageSize: number;
    /**
     * 存储记录总数。
     * > 仅限录制查询。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 分页总数。
     * > 仅限录制查询。
     * @example `5`
     */
    PageCount: number;
    /**
     * 存储记录列表。
     */
    Records: {
        /**
         * 存储记录类型。取值范围：
         * - record（录制）
         * - snapshot（截图）
         * @example `record`
         */
        Type: string;
        /**
         * 高度。
         * @example `1080`
         */
        Height: number;
        /**
         * 存储文件的URL。
         * @example `http://my_oss_bucket.oss-cn-qingdao.aliyuncs.com/record/live/310*****007/2021-11-23-18-19-38_2021-11-23-18-33-48.m3u8`
         */
        Url: string;
        /**
         * 存储文件的Bucket。
         * @example `my_oss_bucket`
         */
        OssBucket: string;
        /**
         * 存储文件格式。取值范围：
         * - mp4
         * - flv
         * - hls
         * - jpg
         * @example `hls`
         */
        FileFormat: string;
        /**
         * 流ID。
         * @example `323*****997-cn-qingdao`
         */
        StreamId: string;
        /**
         * 存储文件的Object。
         * @example `record/live/310*****007/2021-11-23-18-19-38_2021-11-23-18-33-48.m3u8`
         */
        OssObject: string;
        /**
         * 存储记录结束时间。
         * @example `2021-11-23T18:33:48`
         */
        EndTime: string;
        /**
         * 存储记录开始时间。
         * @example `2021-11-23T18:19:32`
         */
        StartTime: string;
        /**
         * 宽度。
         * @example `1920`
         */
        Width: number;
        /**
         * 模板ID。
         * @example `388*****204-cn-qingdao`
         */
        TemplateId: string;
        /**
         * 存储记录ID。
         * > 仅限录制查询。
         * @example `2be2a673-6033-4874-b6f2-f2bc0a1*****`
         */
        Id: string;
        /**
         * OSS接入点。
         * @example `oss-cn-qingdao.aliyuncs.com`
         */
        OssEndpoint: string;
    }[];
}
