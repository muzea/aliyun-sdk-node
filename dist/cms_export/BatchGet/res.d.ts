export interface BatchGetResponse {
    /**
     * 请求ID。
     * @example `251402CD-305C-1617-808E-D8C11FC8138D`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回的数据体。
     */
    Data: {
        /**
         * 用于再次调用本接口。
         * > 如果返回结果为`null`，则说明监控数据导出完成。
         * @example `eyJidWNrZXRzIjo0LCJjdXJzb3IiOiIxNjQxNDU0ODAwMDAwMWUxY2YxNWY0NTU0MTliZjllYTY4OWQ2ODI1OTU1Yzc1NmZjMDQ2OTMxMzczMzM2MzUzMTMxMzEzMzM0MzMzODM5MzEzMTMwMjQyYzY5MmQzMjdhNjU2MjY3N2E2NjZhNzczOTY2NmM3Mjc0NjM3MzY5Njg3NDcyMjQyYyIsImN1cnNvclZlcnNpb24iOiJxdWVyeSIsImVuZFRpbWUiOjE2NDE0NTUyMzYxMTIsImV4cG9ydEVuZFRpbWUiOjE2NDE0NTUyMzYxMTIsImV4cG9ydFN0YXJ0VGltZSI6MTY0MTQ1NDYzNjExMiwiZXhwcmVzc1JhbmdlIjpmYWxzZSwiaGFzTmV4dCI6dHJ1ZSwiaW5wdXRNZXRyaWMiOiJDUFVVdGlsaXphdGlvbiIsImlucHV0TmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJsaW1pdCI6MTAwMCwibG9nVGltZU1vZGUiOnRydWUsIm1hdGNoZXJzIjp7ImNoYWluIjpbeyJsYWJlbCI6InVzZXJJZCIsIm9wZXJhdG9yIjoiRVFVQUxTIiwidmFsdWUiOiIxNzM2NTExMTM0Mzg5MTEwIn1dfSwibWV0cmljIjoiQ1BVVXRpbGl6YXRpb24iLCJtZXRyaWNUeXBlIjoiTUVUUklDIiwibmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJuZXh0UGtBZGFwdGVyIjp7fSwib2Zmc2V0IjowLCJwYXJlbnRVaWQiOjEyNzA2NzY2Nzk1NDY3MDQsInN0YXJ0VGltZSI6MTY0MTQ1NDYzNjExMiwic3RlcCI6LTEsInRpbWVvdXQiOjEyMCwid2luZG93Ijo2MH0=`
         */
        Cursor: string;
        /**
         * 监控数据导出列表。
         */
        Records: {
            /**
             * 云产品的数据命名空间。
             * @example `acs_ecs_dashboard`
             */
            Namespace: string;
            /**
             * 云产品的监控项名称。
             * @example `cpu_idle`
             */
            Metric: string;
            /**
             * 监控项统计方法的键。
             * 监控项统计方法的格式：key-value键值对形式的集合。
             */
            MeasureLabels: string[];
            /**
             * 监控项统计方法的值。
             * 监控项统计方法的格式：key-value键值对形式的集合。
             */
            MeasureValues: string[];
            /**
             * 监控项维度的键。
             * 监控项维度的格式：key-value键值对形式的集合。
             */
            Labels: string[];
            /**
             * 监控项维度的值。
             * 监控项维度的格式：key-value键值对形式的集合。
             */
            LabelValues: string[];
            /**
             * 资源的标签键。
             * > 目前该参数为空。
             */
            Tags: string[];
            /**
             * 资源的标签值。
             * > 目前该参数为空。
             */
            TagValues: string[];
            /**
             * 监控数据的时间戳。
             * 单位：毫秒。
             * @example `1641454680000`
             */
            Timestamp: number;
            /**
             * 监控数据的统计周期。
             * 单位：秒。
             * @example `60`
             */
            Period: number;
        }[];
        /**
         * 每次最多返回的数据条数。
         * @example `1000`
         */
        Length: number;
        /**
         * 监控数据压缩类型的键。
         * > 当`CompressionType`为`normal`时，该参数为空。
         */
        CompressionKeys: string[];
        /**
         * 监控数据压缩类型的值。
         */
        CompressionValues: string[][];
        __anchorTs__: number;
    };
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
