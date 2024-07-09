export interface ListProblemTimeLinesResponse {
    /**
     * Id of the request
     * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
     */
    requestId: string;
    /**
     * 故障时间线列表
     */
    data: {
        /**
         * 创建时间
         * @example `2020-08-08 15:38:38`
         */
        createTime: string;
        /**
         * 关键节点 码表:PROBLEM_KEY_NODE (逗号分隔)
         * @example `PROBLEM_INJECTION,PROBLEM_HAPPEN`
         */
        keyNode: string;
        /**
         * 内容
         * @example `内容`
         */
        content: string;
        /**
         * 是否是关键字 true是 false不是 默认 false
         * @example `true`
         */
        isKey: boolean;
        /**
         * 修改时间
         * @example `2020-08-08 15:38:38`
         */
        updateTime: string;
        /**
         * 展示时间
         * @example `2020-08-08 15:38:38`
         */
        time: string;
        /**
         * 时间线id
         * @example `10000`
         */
        problemTimelineId: number;
        /**
         * 内容中的用户信息
         */
        usersInContent: {
            /**
             * 用户id
             * @example `232`
             */
            userId: number;
            /**
             * 用户名
             * @example `张老萨`
             */
            username: string;
            isValid: number;
        }[];
    }[];
}
