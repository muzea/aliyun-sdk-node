export interface GetSparkStatementResponse {
    /**
     * 请求的唯一id
     * @example `C5DB60E0-6EB3-493C-8956-DA0D3A2EE656`
     */
    RequestId: string;
    /**
     * 描述了此段代码块的执行状态
     */
    Data: {
        /**
         * 代码当前执行进度, 为浮点数,`1`代表100%执行完成, `0.5` 代表执行了50%
         * @example `0.5`
         */
        Process: number;
        /**
         * 代码执行结束的毫秒级时间戳
         * @example `1623033200754`
         */
        CompletedTime: number;
        /**
         * 代码块的执行状态, 可能的状态有
         * - waiting 等待执行
         * - running 正在还行
         * - available 执行完成
         * - error 执行失败
         * - cancelling 在尝试终止
         * - cancelled 已经终止执行
         * @example `running`
         */
        State: string;
        /**
         * 代码开始执行的毫秒级时间戳
         * @example `1623033200750`
         */
        StartedTime: number;
        /**
         * 提交的代码块
         * @example `print(2+2)`
         */
        Code: string;
        /**
         * 代码块的执行结果, 执行结果是一个JSON格式的字符串, 其结构如下
         * - status	执行状态
         * - execution_count	当前执行到此代码块的哪一行
         * - data	代码执行结果
         * @example `"{\"status\":\"ok\",\"execution_count\":1,\"data\":{\"text/plain\":\"4\"}}"`
         */
        Output: string;
        /**
         * 代码块在此Spark作业中的唯一递增id
         * @example `1`
         */
        Id: number;
    };
}
