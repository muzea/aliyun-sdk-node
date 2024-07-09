export interface DescribeSystemEventMetaListResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `A6582C8B-E67C-4A19-BC15-EAEFEBDC7995`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * Meta返回信息。
         */
        Resource: {
            /**
             * 事件状态。
             * @example `failed`
             */
            Status: string;
            /**
             * 事件类型。取值：
             * - StatusNotification：故障通知。
             * - Exception：异常。
             * - Maintenance：运维。
             * @example `Exception`
             */
            EventType: string;
            /**
             * 产品名称缩写。
             * @example `ADS`
             */
            Product: string;
            /**
             * 事件名称的描述信息。
             * @example `查询失败率高`
             */
            NameDesc: string;
            /**
             * 英文事件名称的描述信息。
             * @example `High query failure rate.`
             */
            NameDesc.En: string;
            /**
             * 事件名称。
             * @example `SelectFailureRate`
             */
            Name: string;
            /**
             * 事件状态描述。
             * @example `Operation Failed`
             */
            StatusDesc: string;
            /**
             * 报警级别。取值：
             * - CRITICAL：紧急。
             * - WARN：警告。
             * - INFO：信息。
             * @example `INFO`
             */
            Level: string;
        }[];
    };
}
