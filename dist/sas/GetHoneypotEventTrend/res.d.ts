export interface GetHoneypotEventTrendResponse {
    /**
     * 返回数据列表。
     */
    Data: {
        /**
         * 攻击的名称。
         * @example `ATTACK_EVENT`
         */
        KeyName: string;
        /**
         * 攻击事件发生的数量。
         * @example `5`
         */
        Count: number;
        /**
         * 攻击事件发生的时间戳。
         * @example `1686968163644`
         */
        TimeStamp: number;
    }[];
    /**
     * 返回条数
     * @example `5`
     */
    Count: number;
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口请求返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 接口请求返回的信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `21637690-9B21-5EEC-94DB-2A732480****`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
