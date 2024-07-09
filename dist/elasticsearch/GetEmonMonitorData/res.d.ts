export interface GetEmonMonitorDataResponse {
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果。
     * @example `""`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `2D184B55-FA51-43F7-A1EF-E68A0545****`
     */
    RequestId: string;
    /**
     * 请求是否成功：
     * - true：成功
     * - false：不成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 指标查询返回的结果里，时序曲线数据点的完整度。1.0表示100%完整。
         * @example `1.0`
         */
        integrity: number;
        /**
         * queries里如果有通配符，result会包含多条匹配到的时间序列数据，summary是在每个时间点上对这些时间线的value集合，按照query里提供的aggregator类型来聚合。目前聚合方式仅支持avg。
         * @example `10`
         */
        summary: number;
        /**
         * 请求到达服务端的时间戳，用于排查问题。
         * @example `1522127381471`
         */
        messageWatermark: number;
        /**
         * 指标实时监控数据。格式为`{时间戳:数据}`。
         * @example ` { "1586249280": 465.1980465119913, "1586249300": 213.45243650423305 }`
         */
        dps: any;
        /**
         * 查询标签。
         * @example `{"taskName":"et-xxx","userId":"123456"}`
         */
        tags: any;
        /**
         * 指标名称。
         * @example `elasticbuild.elasticsearch.source.total_doc_count`
         */
        metric: string;
    }[];
}
