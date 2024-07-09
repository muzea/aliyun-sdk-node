export interface DescribeMPCoSResourceInfoResponse {
    /**
     * 请求标识。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The system is busy. Please try again later.`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D5C69894-9709-4653-B3D8-25234034C2FC`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应内容。
     */
    Data: {
        /**
         * 协同模型配额。
         * @example `200`
         */
        PhaseGroupQuota: number;
        /**
         * 成员配额。
         * @example `100`
         */
        MemberQuota: number;
        /**
         * 已添加成员个数。
         * @example `5`
         */
        UsedMember: number;
        /**
         * 已添加协同模型个数。
         * @example `10`
         */
        UsedPhaseGroup: number;
        /**
         * 阶段配额列表。
         */
        PhaseQuotaInfoList: {
            /**
             * 协同模型标识。
             * @example `383860792287****`
             */
            PhaseGroupId: string;
            /**
             * 协同模型名称。
             * @example `某协同模型`
             */
            PhaseGroupName: string;
            /**
             * 阶段配额。
             * @example `5`
             */
            PhaseQuota: number;
            /**
             * 已添加阶段个数。
             * @example `3`
             */
            UsedPhase: number;
        }[];
    };
}
