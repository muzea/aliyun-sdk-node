export interface ListAsyncTasksResponse {
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 任务主键ID
         * @example `1`
         */
        Id: number;
        /**
         * 唯一任务ID，作用等价于id
         * @example `3f7045e099474ba28ceca1b4eb6d6e21`
         */
        TaskId: string;
        /**
         * 任务名
         * @example `任务名`
         */
        TaskName: string;
        /**
         * 任务标识，标识为哪一个任务
         * @example `MaterialDocumentUpload`
         */
        TaskCode: string;
        /**
         * 任务分类,多个任务分类一逗号分隔
         * @example `test`
         */
        TaskType: string;
        /**
         * 可选的任务定义配置，JSON格式,这里的参数会覆盖系统配置的定义
         * @example `{}`
         */
        TaskDefinition: string;
        /**
         * 任务执行输入参数，JSON格式
         * @example `{}`
         */
        TaskParam: string;
        /**
         * 任务执行时间，只会轮询任务到期可执行的任务、为空表示立即执行
         * @example `2023-10-14 14:30:00`
         */
        TaskExecuteTime: string;
        /**
         * 任务实际开始时间
         * @example `2023-03-20 10:53:00`
         */
        TaskStartTime: string;
        /**
         * 任务实际结束时间
         * @example `2023-03-09 00:00:00`
         */
        TaskEndTime: string;
        /**
         * 任务中间执行结果，当一个任务可分成多步骤时，每个步骤的输出，可保存在这里。后续从暂停中恢复可以读取中间结果，从中间结果继续
         * @example `{}`
         */
        TaskIntermediateResult: string;
        /**
         * 任务执行状态，0-待执行、1-执行中、2-执行成功、3-暂停、4-执行失败-可重试、5-执行失败-不可重试,6-任务取消
         * @example `1`
         */
        TaskStatus: number;
        /**
         * 任务执行错误消息-供客户端查看
         * @example `系统内部错误`
         */
        TaskErrorMessage: string;
        /**
         * 任务内部的执行错误消息,一些异常栈、内部线程栈等敏感信息打印在这里
         * @example `系统错误`
         */
        TaskInnerErrorMessage: string;
        /**
         * 任务执行进度信息
         * @example `{}`
         */
        TaskProgressMessage: string;
        /**
         * 任务执行结果信息
         * @example `{}`
         */
        TaskResult: string;
        /**
         * 任务已经重试的次数
         * @example `1`
         */
        TaskRetryCount: string;
        /**
         * 创建日期
         * @example `2020-12-23 15:41:58`
         */
        CreateTime: string;
        /**
         * 创建者
         * @example `1111`
         */
        CreateUser: string;
        /**
         * 更新日期
         * @example `2023-02-16 10:29:16`
         */
        UpdateTime: string;
        /**
         * 更新者
         * @example `111`
         */
        UpdateUser: string;
    }[];
    /**
     * 当前页。
     * @example `1`
     */
    Current: number;
    /**
     * 每页记录数
     * @example `10`
     */
    Size: number;
    /**
     * 总记录数
     * @example `20`
     */
    Total: number;
    /**
     * 请求唯一标识
     * @example `428DCC0D-3C63-5306-BD1B-124396AB97BE`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 错误说明
     * @example `错误`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
}
