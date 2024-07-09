export interface ListFunctionInstancesResponse {
    /**
     * 请求状态
     * @example `"OK"`
     */
    Status: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 总条数
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求id
     * @example `A4D487A9-A456-5AA5-A9C6-B7BF2889CF74`
     */
    RequestId: string;
    /**
     * 错误信息，正常为空
     * @example `instance not exist.`
     */
    Message: string;
    /**
     * 错误码，正常为空
     * @example `Instance.NotExist`
     */
    Code: string;
    /**
     * 结果列表
     * @example `[]`
     */
    Result: {
        /**
         * 	实例归属信息
         * @example `{}`
         */
        Belongs: {
            /**
             * 垂类
             * @example `"general"`
             */
            Category: string;
            /**
             * 行业
             * @example `"ecommerce"`
             */
            Domain: string;
            /**
             * 适用的语种缩写
             * @example `"zh"	`
             */
            Language: string;
        };
        /**
         * 实例的参数列表
         * @example `[]`
         */
        CreateParameters: {
            /**
             * 名字
             * @example `"param1"`
             */
            Name: string;
            /**
             * 值
             * @example `"value1"`
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
         * 创建时间
         * @example `1234`
         */
        CreateTime: number;
        /**
         * 训练信息，cron语法（Minutes Hours DayofMonth Month DayofWeek），为空表示不进行周期训练
         * @example `0 3 ? * 0,1,3,5 (周日，周一，周三，周五凌晨3点)`
         */
        Cron: string;
        /**
         * 描述
         * @example `" "`
         */
        Description: string;
        /**
         * 扩展信息，json string，包含模型评价信息，错误信息等
         * @example `"{\"dataReport\":{},\"errors\":{}}"`
         */
        ExtendInfo: string;
        /**
         * 功能名称
         * @example `"ctr"`
         */
        FunctionName: string;
        /**
         * 功能类型
         * @example `"PAAS"`
         */
        FunctionType: string;
        /**
         * 实例名称
         * @example `"ctr_test"`
         */
        InstanceName: string;
        /**
         * 模型类型
         * @example `"tf_checkpoint"`
         */
        ModelType: string;
        /**
         * 实例来源
         * - user 用户实例
         * - builtin 内置实例
         * @example `"user"`
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
         * 版本ID
         * @example `123`
         */
        VersionId: number;
    }[];
    /**
     * api请求耗时 （单位毫秒）
     * @example `123`
     */
    Latency: number;
}
