export interface ListSparkStatementsResponse {
    /**
     * 请求的唯一标识ID。
     * @example `C2AB7692-B9EF-4A50-BCFF-0DC5B6F080E8`
     */
    RequestId: string;
    /**
     * 代码块执行结果的列表。
     */
    Statements: {
        /**
         * 当前执行进度，是一个浮点数，代表执行的百分比，‘1’代表100%执行完成。
         * @example `1`
         */
        Progress: number;
        /**
         * 执行完成的毫秒级时间戳。
         * @example `1623033200754`
         */
        CompletedTime: number;
        /**
         * 代码块的执行状态，可能的状态有：
         * - waiting：等待执行。
         * - running：正在执行。
         * - available：执行完成。
         * - error：执行失败。
         * - cancelling：尝试终止。
         * - cancelled：已经终止执行。
         * @example `running`
         */
        State: string;
        /**
         * 代码块开始执行的毫秒级时间戳。
         * @example `1623033200750`
         */
        StartedTime: number;
        /**
         * 提交执行的代码块。
         * @example `print(2 + 2)`
         */
        Code: string;
        /**
         * 代码块的执行结果，执行结果是一个JSON格式的字符串，其结构如下。
         * - status：执行状态。
         * - execution_count：当前执行到此代码块的哪一行。
         * - data：代码执行结果。
         * @example `{\"status\":\"ok\",\"execution_count\":1,\"data\":{\"text/plain\":\"4\"}}`
         */
        Output: string;
        /**
         * 代码块的唯一ID。
         * @example `2`
         */
        Id: number;
    }[];
}
