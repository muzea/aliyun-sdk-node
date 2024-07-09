export interface DescribeLiveSnapshotDetectPornConfigResponse {
    /**
     * 分页的页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 排序。
     * @example `Asc`
     */
    Order: string;
    /**
     * 总页数。
     * @example `11`
     */
    TotalPage: number;
    /**
     * 每页大小。
     * @example `2`
     */
    PageSize: number;
    /**
     * 符合条件的总个数。
     * @example `6`
     */
    TotalNum: number;
    LiveSnapshotDetectPornConfigList: {
        /**
         * 审核配置列表。
         */
        LiveSnapshotDetectPornConfig: {
            /**
             * OSS存储的文件名。
             * @example ` {liveApp****}/{liveStream****}/{Date}/{Hour}/{Minute}_{Second}.jpg`
             */
            OssObject: string;
            /**
             * 应用名称。
             * @example `liveApp****`
             */
            AppName: string;
            /**
             * 采样间隔。单位：秒。
             * @example `80`
             */
            Interval: number;
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
             * OSS存储Endpoint名称。
             * @example `cn-oss-****.aliyuncs.com`
             */
            OssEndpoint: string;
            Scenes: {
                scene: string[];
            };
        }[];
    };
}
