export interface PublishFeatureViewTableRequest {
    /**
     * 实例ID，可从接口ListInstances获取。
     * @example `fs-cn-********`
     */
    "InstanceId": string;
    /**
     * 特征视图ID，可从接口ListFeatureViews获取。
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
         * 模式，包括以下可选值：
         * ● Overwrite-覆盖写
         * ● Merge-合并
         * @example `Overwrite`
         */
        Mode: string;
        /**
         * 事件时间。
         * @example `2021-12-15T23:24:33.132+08:00`
         */
        EventTime: string;
        /**
         * 配置。
         * @example `{}`
         */
        Config: string;
        /**
         * 是否同步在线特征。
         * @example `true`
         */
        OfflineToOnline: boolean;
    };
}
