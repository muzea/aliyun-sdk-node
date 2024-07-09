export interface DescribeEnsNetLevelResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    EnsNetLevels: {
        /**
         * 网络层级信息。
         */
        EnsNetLevel: {
            /**
             * 网络层级。取值：
             * - Big：大区。
             * - Middle：省份。
             * - Small：城市。
             * @example `Big`
             */
            EnsNetLevelCode: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `86A6D421-A0C7-4C01-8648-47377CA6A2CE`
     */
    RequestId: string;
}
