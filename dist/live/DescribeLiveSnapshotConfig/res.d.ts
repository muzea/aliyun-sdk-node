export interface DescribeLiveSnapshotConfigResponse {
    /**
     * 分页的页码。
     * @example `2`
     */
    PageNum: number;
    /**
     * 请求ID。
     * @example `A3136B58-5876-4168-83CA-B562781981A0`
     */
    RequestId: string;
    /**
     * 排序。
     * @example `asc`
     */
    Order: string;
    /**
     * 总页数。
     * @example `10`
     */
    TotalPage: number;
    /**
     * 每页大小。
     * @example `11`
     */
    PageSize: number;
    /**
     * 符合条件的总个数。
     * @example `6`
     */
    TotalNum: number;
    LiveStreamSnapshotConfigList: {
        /**
         * 截图配置列表。
         */
        LiveStreamSnapshotConfig: {
            /**
             * 覆盖截图存储文件名。
             * @example `{liveApp****}/{liveStream****}.jpg`
             */
            OverwriteOssObject: string;
            /**
             * 截图周期。单位：秒。
             * @example `10`
             */
            TimeInterval: number;
            /**
             * 直播流所属的应用名称。
             * @example `liveApp****`
             */
            AppName: string;
            /**
             * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2016-05-20T01:33:38Z`
             */
            CreateTime: string;
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
             * 截图回调地址。
             * @example `https://learn.aliyundoc.com`
             */
            Callback: string;
            /**
             * 实时截图存储文件名。
             * @example `snapshot/{liveApp****}/{liveStream****}/{UnixTimestamp}.jpg`
             */
            SequenceOssObject: string;
            /**
             * OSS存储的Endpoint名称。
             * @example `cn-oss-****.aliyuncs.com`
             */
            OssEndpoint: string;
        }[];
    };
}
