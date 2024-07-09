export interface DescribeParameterModificationHistoryResponse {
    /**
     * 请求ID。
     * @example `B1BB6E0E-B4EF-4145-81FA-A07719860248`
     */
    RequestId: string;
    HistoricalParameters: {
        /**
         * 参数的修改记录列表。
         */
        HistoricalParameter: {
            /**
             * 被修改参数的名称。
             * @example `operationProfiling.slowOpThresholdMs`
             */
            ParameterName: string;
            /**
             * 修改前的参数值。
             * @example `100`
             */
            OldParameterValue: string;
            /**
             * 修改后的参数值。
             * @example `200`
             */
            NewParameterValue: string;
            /**
             * 参数修改的时间。格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-03-12T07:58:24Z`
             */
            ModifyTime: string;
        }[];
    };
}
