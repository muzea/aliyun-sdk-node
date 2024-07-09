export interface CreateProblemTimelinesRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 故障id
         * @example `423`
         */
        problemId: number;
        /**
         * 时间线节点
         * @example `2018-01-01 18:01，谁做了什么事情\n2018-01-01 18:01，谁做了什么事情\n2018-01-01 18:01，谁做了什么事情`
         */
        timelineNodes: string;
        /**
         * clientToken
         * @example `e0b6735e-1a04-4d6b-a625-d2350612492c`
         */
        clientToken: string;
    };
}
