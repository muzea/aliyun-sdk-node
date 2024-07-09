export interface DescribeLiveStreamSnapshotInfoResponse {
    /**
     * 下一个起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 当此时间范围内的内容超出了Limit的取值范围，则返回此参数，为下一个文件的创建时间。可以将此时间当做StartTime，重新调用此接口获取下一段内容，不传则表示未超出Limit取值范围。
     * @example `2015-12-01T17:36:00Z`
     */
    NextStartTime: string;
    /**
     * 请求ID。
     * @example `62136AE6-7793-45ED-B14A-60D19A9486D3`
     */
    RequestId: string;
    LiveStreamSnapshotInfoList: {
        /**
         * 截图内容列表。
         */
        LiveStreamSnapshotInfo: {
            /**
             * OSS存储的文件名。
             * @example `{liveApp****}/{liveStream****}.jpg`
             */
            OssObject: string;
            /**
             * OSS存储Bucket名称。
             * @example `liveBucket****`
             */
            OssBucket: string;
            /**
             * 截图产生时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2015-12-01T17:36:00Z`
             */
            CreateTime: string;
            /**
             * OSS存储的Endpoint名称。
             * @example `cn-oss-****.aliyuncs.com`
             */
            OssEndpoint: string;
            /**
             * 截图方式。取值：
             * - **true**：覆盖截图。
             * - **false**：序列截图。
             * @example `false`
             */
            IsOverlay: boolean;
            /**
             * 截图文件创建的毫秒级时间戳。
             * @example `1653641526637`
             */
            CreateTimestamp: number;
        }[];
    };
}
