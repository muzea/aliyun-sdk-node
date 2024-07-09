export interface DescribeLiveStreamRecordIndexFilesResponse {
    /**
     * 分页的页码。
     * @example `10`
     */
    PageNum: number;
    /**
     * 请求ID。
     * @example `DE24625C-7C0F-4020-8448-9C31A50C1556`
     */
    RequestId: string;
    /**
     * 排序。
     * @example `asc`
     */
    Order: string;
    /**
     * 总页数。
     * @example `20`
     */
    TotalPage: number;
    /**
     * 每页大小。
     * @example `5`
     */
    PageSize: number;
    /**
     * 符合条件的总个数。
     * @example `12`
     */
    TotalNum: number;
    RecordIndexInfoList: {
        /**
         * 录制配置列表。
         */
        RecordIndexInfo: {
            /**
             * 索引文件地址。
             * @example `http://****​/atestObject****.m3u8`
             */
            RecordUrl: string;
            /**
             * 播流名称。
             * @example `liveStream****`
             */
            StreamName: string;
            /**
             * 创建时间。
             * @example `2016-05-27T09:40:56Z`
             */
            CreateTime: string;
            /**
             * 索引文件ID。
             * @example `c4d7f0a4-b506-43f9-8de3-07732c3f****`
             */
            RecordId: string;
            /**
             * 视频高。
             * @example `480`
             */
            Height: number;
            /**
             * OSS存储Bucket名称。
             * @example `liveBucket****`
             */
            OssBucket: string;
            /**
             * 主播流域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * OSS存储的录制文件名。
             * @example `liveObject****`
             */
            OssObject: string;
            /**
             * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-12-01T07:46:00Z`
             */
            EndTime: string;
            /**
             * 播流所属应用名称。
             * @example `liveApp****`
             */
            AppName: string;
            /**
             * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-12-01T07:36:00Z`
             */
            StartTime: string;
            /**
             * 视频宽。
             * @example `640`
             */
            Width: number;
            /**
             * 录制时长。单位：秒。
             * @example `588.849`
             */
            Duration: number;
            /**
             * OSS存储的Endpoint名称。
             * @example `cn-oss-****.aliyuncs.com`
             */
            OssEndpoint: string;
            Format: string;
        }[];
    };
}
