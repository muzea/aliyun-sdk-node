export interface RecoverProblemRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障ID
         * @example `123`
         */
        problemId: number;
        /**
         * 恢复时间
         * @example `2020-02-01 00:00:00`
         */
        recoveryTime: string;
        /**
         * 通告类型 PROBLEM_NOTIFY：故障通告 PROBLEM_UPDATE：故障更新 PROBLEM_UPGRADE：故障升级 PROBLEM_DEGRADE：故障降级 PROBLEM_RECOVER：故障恢复 PROBLEM_REISSUE： 故障补发 PROBLEM_CANCEL：故障取消
         * @example `PROBLEM_UPDATE`
         */
        problemNotifyType: string;
    };
}
