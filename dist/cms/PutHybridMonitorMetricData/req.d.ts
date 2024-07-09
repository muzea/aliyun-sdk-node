export interface PutHybridMonitorMetricDataRequest {
    /**
     * 指标仓库名称。
     * 关于如何获取指标仓库名称，请参见[DescribeHybridMonitorNamespaceList](~~428880~~)。
     * @example `default-aliyun`
     */
    "Namespace": string;
    /**
     * 监控数据列表。
     * N的取值范围：1~100。
     */
    "MetricList": {
        /**
         * 监控指标名称。
         * N的取值范围：1~100。
         * 格式：由大写字母、小写字母、数字和下划线（_）组成。开头必须为大写字母或小写字母。
         * @example `CPU_Usage`
         */
        Name: string;
        /**
         * 监控指标的标签列表。
         * N的取值范围：1~100。
         * @example `app、ip、hostName等标识信息`
         */
        Labels: {
            /**
             * 监控指标的标签键。
             * N的取值范围：1~100。
             * 格式：由大写字母、小写字母、数字和下划线（_）组成。开头必须为大写字母、小写字母或下划线。
             * > Key和Value必须同时设置。
             * @example `IP`
             */
            Key: string;
            /**
             * 监控指标的标签值。
             * N的取值范围：1~100。
             * > Key和Value必须同时设置。
             * @example `192.168.XX.XX`
             */
            Value: string;
        }[];
        /**
         * 监控指标的取值。
         * N的取值范围：1~100。
         * 格式：整数或浮点数。
         * @example `90`
         */
        Value: string;
        /**
         * 监控数据上报的时间戳。
         * N的取值范围：1~100。
         * 单位：毫秒。默认值为当前时间。
         * @example `1640776119473`
         */
        TS: number;
    }[];
}
