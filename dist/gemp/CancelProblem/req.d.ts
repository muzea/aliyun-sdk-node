export interface CancelProblemRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障id
         * @example `312`
         */
        problemId: number;
        /**
         * 取消原因描述
         * @example `原因描述`
         */
        cancelReasonDescription: string;
        /**
         * 取消原因
         * @example `取消原因`
         */
        cancelReason: number;
        /**
         * PROBLEM_NOTIFY	通告类型 PROBLEM_NOTIFY：故障通告 PROBLEM_UPDATE：故障更新 PROBLEM_UPGRADE：故障升级 PROBLEM_DEGRADE：故障降级 PROBLEM_RECOVER：故障恢复 PROBLEM_REISSUE： 故障补发 PROBLEM_CANCEL：故障取消
         * @example `PROBLEM_NOTIFY`
         */
        problemNotifyType: number;
        /**
         * 幂等Token
         * @example `4361a0e1-6747-4834-96ce-0c4840fd3812`
         */
        clientToken: string;
    };
}
