export interface RevokeProblemRecoveryRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障ID
         * @example `1231`
         */
        problemId: number;
        /**
         * 通告类型 PROBLEM_NOTIFY：故障通告 PROBLEM_UPDATE：故障更新 PROBLEM_UPGRADE：故障升级 PROBLEM_DEGRADE：故障降级 PROBLEM_RECOVER：故障恢复 PROBLEM_REISSUE： 故障补发 PROBLEM_CANCEL：故障取消
         * @example `PROBLEM_UPGRADE`
         */
        problemNotifyType: string;
        /**
         * 幂等校验
         * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2EF`
         */
        clientToken: string;
    };
}
