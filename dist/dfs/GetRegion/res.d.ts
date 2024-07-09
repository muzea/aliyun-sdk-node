export interface GetRegionResponse {
    /**
     * 请求ID。
     * @example `AEC07154-5A4C-4B34-BB74-0893C6E9****`
     */
    RequestId: string;
    /**
     * 可用区信息集合。
     */
    AvailableZones: {
        /**
         * 可用区ID。
         * @example `cn-hangzhou-b`
         */
        ZoneId: string;
        /**
         * 配置列表。
         */
        Options: {
            /**
             * 存储介质类型。
             * 包括：
             * - STANDARD：标准型
             * - PERFORMANCE：性能型
             * @example `STANDARD`
             */
            StorageType: string;
            /**
             * 协议类型。
             * 仅支持HDFS（Hadoop Distributed File System）。
             * @example `HDFS`
             */
            ProtocolType: string;
        }[];
    }[];
}
