export interface ReplayProblemRequest {
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
         * 复盘负责人ID
         * @example `3123`
         */
        replayDutyUserId: number;
        /**
         * 幂等token
         * @example `4361a0e1-6747-4834-96ce-0c4840fd3212`
         */
        clientToken: string;
    };
}
