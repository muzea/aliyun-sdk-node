export interface DetachKeyPairResponse {
    /**
     * 密钥对的名称。
     * @example `testKeyPairName`
     */
    KeyPairName: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 解绑密钥对的实例总数量。
     * @example `2`
     */
    TotalCount: string;
    /**
     * 解绑密钥对失败的实例数量。
     * @example `0`
     */
    FailCount: string;
    Results: {
        /**
         * 解绑密钥对成功或失败的结果集合。
         */
        Result: {
            /**
             * 传递的操作状态码，其中200表示操作成功。
             * @example `200`
             */
            Code: string;
            /**
             * 传递的操作信息。例如，当`Code=200`时，`Message`为`successful`。
             * @example `successful`
             */
            Message: string;
            /**
             * 实例ID。
             * @example `i-bp1d6tsvznfghy7y****`
             */
            InstanceId: string;
            /**
             * 此次操作是否成功。
             * @example `true`
             */
            Success: string;
        }[];
    };
}
