export interface DescribeParameterModificationHistoryResponse {
    /**
     * 请求ID。
     * @example `963C20F0-7CE1-4591-AAF3-6F3CD1CE****`
     */
    RequestId: string;
    HistoricalParameters: {
        /**
         * 参数的修改记录列表。
         */
        HistoricalParameter: {
            /**
             * 变更前的参数值。
             * @example `-2`
             */
            OldParameterValue: string;
            /**
             * 参数名。
             * @example `script_check_enable`
             */
            ParameterName: string;
            /**
             * 变更后的参数值。
             * @example `0`
             */
            NewParameterValue: string;
            /**
             * 修改时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
             * @example `2022-09-05T09:56:10Z`
             */
            ModifyTime: string;
        }[];
    };
}
