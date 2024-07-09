export interface AttachKeyPairResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 绑定密钥对的实例总数量。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 绑定密钥对失败的实例总数量。
     * @example `2`
     */
    FailCount: number;
    /**
     * 结果列表。
     */
    Results: {
        /**
         * 结果码。
         * @example `200`
         */
        Code: string;
        /**
         * 结果信息。
         * @example `success`
         */
        Message: string;
        /**
         * 绑定密钥对是否成功。可能值：
         * - true：绑定密钥对成功。
         * - false：绑定密钥对失败。
         * @example `true`
         */
        Success: string;
        /**
         * 实例ID。
         * @example `aa6e71ddb35c46679bc4753d6219d604`
         */
        InstanceId: string;
    }[];
}
