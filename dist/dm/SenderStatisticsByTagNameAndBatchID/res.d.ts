export interface SenderStatisticsByTagNameAndBatchIDResponse {
    /**
     * 总数量
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `10A1AD70-E48E-476D-98D9-39BD92193837`
     */
    RequestId: string;
    data: {
        /**
         * 数据记录
         */
        stat: {
            /**
             * 无效率
             * @example `0%`
             */
            unavailablePercent: string;
            /**
             * 创建时间
             * @example `2021-07-02`
             */
            CreateTime: string;
            /**
             * 成功率
             * @example `100.00%`
             */
            succeededPercent: string;
            /**
             * 失败数量
             * @example `0`
             */
            faildCount: string;
            /**
             * 无效数量
             * @example `0`
             */
            unavailableCount: string;
            /**
             * 成功数量
             * @example `4`
             */
            successCount: string;
            /**
             * 请求数量
             * @example `4`
             */
            requestCount: string;
        }[];
    };
}
