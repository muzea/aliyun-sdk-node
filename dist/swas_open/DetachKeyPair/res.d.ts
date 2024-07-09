export interface DetachKeyPairResponse {
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F534F`
     */
    RequestId: string;
    /**
     * 解绑密钥对的实例总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 绑定密钥对失败的实例总数量。
     * @example `0`
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
         * 密钥对解绑是否成功。可能值：
         * - true：密钥对解绑成功。
         * - false：密钥对解绑失败。
         * @example `true`
         */
        Success: string;
        /**
         * 轻量应用服务器实例ID。
         * @example `aa6e71ddb35c46679bc4753d6219d604`
         */
        InstanceId: string;
    }[];
}
