export interface AttachKeyPairResponse {
    /**
     * 返回结果对象。
     */
    Data: {
        /**
         * ADB密钥对的ID。
         * @example `kp-6v2q33ae4tw3a****`
         */
        KeyPairId: string;
        /**
         * 尝试绑定的总实例数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 绑定失败的实例数。
         * @example `0`
         */
        FailCount: number;
        /**
         * 绑定成功的云手机实例ID列表。
         */
        AttachedInstanceIds: string[];
    };
    /**
     * 请求ID。
     * @example `69BCBBE4-FCF2-59B8-AD9D-531EB422****`
     */
    RequestId: string;
}
