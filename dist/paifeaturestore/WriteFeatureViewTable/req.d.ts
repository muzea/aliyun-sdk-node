export interface WriteFeatureViewTableRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 特征视图ID，可从LIstFeatureViews获取。
     * @example `3`
     */
    "FeatureViewId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 分区表。
         */
        Partitions: any;
        /**
         * 文件数据源。
         */
        UrlDatasource: {
            /**
             * 数据源路径。
             * @example `xxx.xxx.com/file.csv`
             */
            Path: string;
            /**
             * 文件分隔符。
             * @example `,`
             */
            Delimiter: string;
            /**
             * 文件中是否省略header。
             * @example `true`
             */
            OmitHeader: boolean;
        };
        /**
         * 模式
         * ● Overwrite-覆盖写
         * ● Merge-合并
         * @example `Merge`
         */
        Mode: string;
    };
}
