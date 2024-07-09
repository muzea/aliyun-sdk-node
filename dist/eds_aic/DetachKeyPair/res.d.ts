export interface DetachKeyPairResponse {
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
         * 尝试解绑的总实例数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 解绑失败的实例数。
         * @example `0`
         */
        FailCount: number;
        /**
         * 解绑成功的实例ID列表。
         */
        DetachedInstanceIds: string[];
    };
    /**
     * 请求ID。
     * @example `69BCBBE4-FCF2-59B8-AD9D-531EB422****`
     */
    RequestId: string;
}
