export interface UpdateProblemNoticeRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 通告类型 PROBLEM_NOTIFY：故障通告 PROBLEM_UPDATE：故障更新 PROBLEM_UPGRADE：故障升级 PROBLEM_DEGRADE：故障降级 PROBLEM_RECOVER：故障恢复 PROBLEM_REISSUE： 故障补发 PROBLEM_CANCEL：故障取消
         * @example `PROBLEM_NOTIFY`
         */
        problemNotifyType: string;
        /**
         * 故障Id
         * @example `1312`
         */
        problemId: number;
        /**
         * 幂等校验Id
         * @example `4361a0e1-6747-4834-96ce-0c4840fd3812`
         */
        clientToken: string;
    };
}
