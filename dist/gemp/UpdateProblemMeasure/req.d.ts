export interface UpdateProblemMeasureRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 措施类型码表：PROBLEM_REPLAY_IMPROVEMENT
         * @example `3`
         */
        type: number;
        /**
         * 措施内容
         * @example `措施内容`
         */
        content: string;
        /**
         * 验收标准
         * @example `2`
         */
        checkStandard: string;
        /**
         * 验收人id
         * @example `123`
         */
        checkUserId: number;
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
         * 计划完成时间
         * @example `2021-01-21 00:00:00`
         */
        planFinishTime: string;
        /**
         * 措施Id
         * @example `1231`
         */
        measureId: number;
        /**
         * 状态 IMPROVED 改进 2 未改进UNIMPROVED
         * @example `UNIMPROVED`
         */
        status: string;
        /**
         * 幂等校验token
         * @example `4361a0e1-6747-4834-96ce-0c4840fd3812`
         */
        clientToken: string;
        /**
         * 故障Id
         * @example `1233`
         */
        problemId: number;
    };
}
