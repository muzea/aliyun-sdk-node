export interface GetFunctionInstanceResponse {
    /**
     * 请求状态
     * @example `OK`
     */
    Status: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 请求id
     * @example `68ED4E1B-92B8-5821-A886-9C90686139EB`
     */
    RequestId: string;
    /**
     * 返回的错误信息
     * @example `instance not exist.`
     */
    Message: string;
    /**
     * 返回的错误码（没有错误为空）
     * @example `Instance.NotExist`
     */
    Code: string;
    /**
     * 实例详情
     * @example `{}`
     */
    Result: {
        /**
         * 所属信息
         */
        Belongs: {
            /**
             * 垂类
             * @example `general`
             */
            Category: string;
            /**
             * 行业
             * @example `ecommerce`
             */
            Domain: string;
            /**
             * 适用的语种缩写
             * @example `zh（默认）`
             */
            Language: string;
        };
        /**
         * 创建参数列表
         */
        CreateParameters: {
            /**
             * 参数名称
             * @example `param1`
             */
            Name: string;
            /**
             * 参数值
             * @example `value1`
             */
            Value: string;
        }[];
        /**
         * 使用参数列表
         */
        UsageParameters: {
            /**
             * 参数名称
             * @example `use_param1`
             */
            Name: string;
            /**
             * 参数值
             * @example `value1`
             */
            Value: string;
        }[];
        /**
         * 创建时间 （单位毫秒）
         * @example `1234`
         */
        CreateTime: number;
        /**
         * 训练信息，cron语法（Minutes Hours DayofMonth Month DayofWeek），为空表示不进行周期训练
         * @example `0 3 ? * 0,1,3,5 (周日，周一，周三，周五凌晨3点)`
         */
        Cron: string;
        /**
         * 实例描述
         * @example `instance descriptions`
         */
        Description: string;
        /**
         * 扩展信息（json string）
         * @example `{\"dataReport\":{},\"errors\":{}}`
         */
        ExtendInfo: string;
        /**
         * 功能名称
         * @example `ctr`
         */
        FunctionName: string;
        /**
         * 功能类型
         * @example `PAAS`
         */
        FunctionType: string;
        /**
         * 实例名称
         * @example `ctr_test`
         */
        InstanceName: string;
        /**
         * 模型类型
         * @example `tf_checkpoint`
         */
        ModelType: string;
        /**
         * 实例来源
         * - user 用户实例
         * - builtin 内置实例
         * @example `user`
         */
        Source: string;
        /**
         * 实例状态
         * 1. unavailable: 暂无可用模型（需要训练）
         * 2. available： 可用
         * @example `available`
         */
        Status: string;
        /**
         * 训练任务信息（没有任务则不显示）
         */
        Task: {
            /**
             * 任务状态
             * - "success"：成功
             * - "failed"：失败
             * - "untrained": 待训练
             * - "pending": 调度中
             * - "running"：训练中
             * @example `success`
             */
            DagStatus: string;
            /**
             * 上一次运行时间，单位：毫秒
             * @example `1234`
             */
            LastRunTime: number;
        };
        /**
         * 版本id
         * @example `101`
         */
        VersionId: number;
    };
    /**
     * api请求耗时（单位：毫秒）
     * @example `123`
     */
    Latency: number;
}
