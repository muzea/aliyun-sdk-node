export interface DescribeLiveStreamRecordContentResponse {
    /**
     * 请求ID。
     * @example `62136AE6-7793-45ED-B14A-60D19A9486D3`
     */
    RequestId: string;
    RecordContentInfoList: {
        /**
         * 录制内容列表。
         */
        RecordContentInfo: {
            /**
             * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-12-01T07:46:00Z`
             */
            EndTime: string;
            /**
             * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-12-01T07:36:00Z`
             */
            StartTime: string;
            /**
             * 录制时长。单位：秒。
             * @example `10`
             */
            Duration: number;
            /**
             * OSS存储的Bucket名称。
             * @example `liveBucket****`
             */
            OssBucket: string;
            /**
             * OSS存储的录制文件名的规则。
             * @example `record/{Date}/{UnixTimestamp}_{Sequence}`
             */
            OssObjectPrefix: string;
            /**
             * OSS存储的Endpoint名称。
             * @example `cn-oss-****.aliyuncs.com`
             */
            OssEndpoint: string;
        }[];
    };
}
