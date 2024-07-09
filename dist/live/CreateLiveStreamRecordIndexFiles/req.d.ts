export interface CreateLiveStreamRecordIndexFilesRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 播流名称。
     * @example `liveStream****`
     */
    "StreamName": string;
    /**
     * OSS存储Endpoint名称。
     * @example `cn-oss-****.aliyuncs.com`
     */
    "OssEndpoint": string;
    /**
     * OSS存储Bucket名称。
     * @example `liveBucket****`
     */
    "OssBucket": string;
    /**
     * OSS存储的录制文件名。
     * @example `{AppName}/{StreamName}/{Date}/{Hour}/{Minute}_{Second}.m3u8`
     */
    "OssObject": string;
    /**
     * 索引文件的开始时间。ts文件的上传时间在此之后则会被包含进索引文件。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-21T08:00:00Z`
     */
    "StartTime": string;
    /**
     * 索引文件的结束时间。ts文件的上传时间在此之前则会被包含进索引文件。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime": string;
    /**
     * 是否包含结束时间。传true会尝试多包含一个ts文件，创建的索引文件会完整覆盖StartTime和EndTime。
     * @example `false`
     */
    "EndTimeIncluded"?: boolean;
}
