export interface DescribeRecoveryPointsResponse {
    /**
     * 错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 返回消息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `8260C928-1A54-545A-A3F2-51E6327D28E6`
     */
    RequestId: string;
    /**
     * 可用恢复点的总数
     * @example `15`
     */
    TotalCount: number;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
    RecoveryPoints: {
        /**
         * 恢复点信息。
         */
        recoveryPoint: {
            /**
             * 恢复点是否满足应用一致性
             * @example `false`
             */
            ApplicationConsistent: boolean;
            /**
             * 恢复点时间
             * @example `1637118000`
             */
            RecoveryPointTime: number;
            /**
             * 恢复点是否被禁用。
             * @example `false`
             */
            Disabled: boolean;
            /**
             * 恢复点ID
             * @example `rp-0000syrdl2f8a7te4063`
             */
            RecoveryPointId: string;
            /**
             * 恢复点是否已被使用
             * @example `false`
             */
            Used: boolean;
            /**
             * 恢复点被禁用的原因
             * @example `inconsistent`
             */
            DisableReason: string;
        }[];
    };
}
