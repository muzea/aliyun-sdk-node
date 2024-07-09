export interface CreateProblemTimelineRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障id
         * @example `102`
         */
        problemId: number;
        /**
         * 关键节点码表：PROBLEM_KEY_NODE
         * @example `PROBLEM_KEY_NODE`
         */
        keyNode: string;
        /**
         * 节点内容
         * @example `时间线内容XXXX`
         */
        content: string;
        /**
         * 发生时间
         * @example `2021-06-06 12:11:22`
         */
        time: string;
        /**
         * 幂等标识
         * @example `601FA6A2-AC5C-4B59-BE11-378FTOKENA11`
         */
        clientToken: string;
    };
}
