export interface GetCapacityResponse {
    /**
     * 容量明细。
     */
    Data: {
        /**
         * 威胁分析当前计费容量（GB）。
         * @example `10`
         */
        UsedCapacity: number;
        /**
         * 威胁分析用户购买容量（GB）。
         * @example `9000`
         */
        PreservedCapacity: number;
        /**
         * 威胁分析用户侧LogStore是否存在。取值：
         * - true：当前日志正常，日志分析可用
         * - false：当前正在清理日志，日志分析不可用
         * @example `true`
         */
        ExistLogStore: boolean;
    };
    /**
     * 请求消息ID。
     * @example `27D27DCB-D76B-5064-8B3B-0900DEF7****`
     */
    RequestId: string;
}
