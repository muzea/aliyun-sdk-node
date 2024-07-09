export interface GetHoneypotAttackStatisticsResponse {
    /**
     * 统计信息数据。
     */
    Data: {
        /**
         * 攻击源统计信息的类型。取值：
         * - **TOP_ATTACKED_AGENT**：被攻击次数top 5的探针。
         * - **TOP_ATTACKED_IP**：被攻击次数top 5的IP地址。
         * - **ATTACK_EVENT_TYPE**：入侵事件类型。
         * - **ATTACK_HONEYPOT_TYPE**：被入侵蜜罐类型。
         * @example `TOP_ATTACKED_IP`
         */
        StatisticsType: string;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `2`
         */
        Count: number;
        /**
         * 统计信息列表。
         */
        HoneypotAttackStatistics: {
            /**
             * 统计值。
             * @example `112.168.1.**`
             */
            StatisticsValue: string;
            /**
             * 统计值的次数。
             * @example `10`
             */
            StatisticsCount: number;
        }[];
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3FACC60A-3FE4-5F49-9184-50730C8B****`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
