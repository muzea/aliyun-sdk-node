export interface QueryAsyncTaskResponse {
    /**
     * 请求唯一标识
     * @example `867C4ABE-4381-5BC2-9810-5A5F334F71CF`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `True`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `Success`
     */
    Code: string;
    /**
     * 错误说明
     * @example `success`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 唯一任务ID
         * @example `3f7045e099474ba28ceca1b4eb6d6e21`
         */
        TaskId: string;
        /**
         * 任务名
         * @example `任务名称`
         */
        TaskName: string;
        /**
         * 任务标识，标识为哪一个任务
         * @example `MaterialDocumentUpload`
         */
        TaskCode: string;
        /**
         * 任务执行输入参数，JSON格式
         * @example `{"fileKey":"oss://default/xxxx/xxxx/xxx","fileName":"xxxxx.doc"}`
         */
        TaskParam: string;
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
         * 任务执行错误消息
         * @example `error`
         */
        TaskErrorMessage: string;
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
         * @example `3`
         */
        TaskRetryCount: string;
        /**
         * 创建日期
         * @example `2021-07-25 14:34:33`
         */
        CreateTime: string;
        /**
         * 创建者
         * @example `12121
        `
         */
        CreateUser: string;
        /**
         * 更新日期
         * @example `2023-04-27 18:07:43`
         */
        UpdateTime: string;
        /**
         * 更新者
         * @example `12121`
         */
        UpdateUser: string;
    };
}
