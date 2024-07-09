export interface UpdateProblemTimelineRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 时间线id
         * @example `3940`
         */
        problemTimelineId: number;
        /**
         * 关键节点码表：PROBLEM_KEY_NODE (逗号分隔)
         * @example `NodeTest`
         */
        keyNode: string;
        /**
         * 节点内容
         * @example `故障分析`
         */
        content: string;
        /**
         * 发生时间
         * @example `2021-01-08 10:10:10`
         */
        time: string;
        /**
         * 故障id
         * @example `234`
         */
        problemId: number;
        /**
         * 幂等标识
         * @example `c26f36de-1ec8-496a-a828-880676c5ef81`
         */
        clientToken: string;
    };
}
