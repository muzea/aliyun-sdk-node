export interface CreateProblemMeasureRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 措施类型
         * @example `1`
         */
        type: number;
        /**
         * 故障Id
         * @example `23`
         */
        problemId: number;
        /**
         * 措施内容
         * @example `措施内容`
         */
        content: string;
        /**
         * 验收标准
         * @example `标准`
         */
        checkStandard: string;
        /**
         * 验收人id
         * @example `123`
         */
        checkUserId: number;
        /**
         * 计划完成时间
         * @example `2020-01-23 00:00:00`
         */
        planFinishTime: string;
        /**
         * 负责人id
         * @example `123`
         */
        directorId: number;
        /**
         * 跟踪人id
         * @example `123`
         */
        stalkerId: number;
        /**
         * 状态 IMPROVED 改进 2 未改进UNIMPROVED
         * @example `IMPROVED`
         */
        status: string;
        /**
         * 幂等校验token
         * @example `4361a0e1-6747-4834-96ce-0c4840fd3812`
         */
        clientToken: string;
    };
}
