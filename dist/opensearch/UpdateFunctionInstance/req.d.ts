export interface UpdateFunctionInstanceRequest {
    /**
     * body参数
     * @example `{}`
     */
    "Body"?: {
        /**
         * 周期训练信息，cron语法（Minutes Hours DayofMonth Month DayofWeek），为空表示不进行周期训练（默认），其中DayofWeek为0表示星期日
         * @example `"0 3 ? * 0,1,3,5"`
         */
        cron: string;
        /**
         * 创建参数列表
         * @example `{             "name": "title_field",             "value": "title"         }`
         */
        createParameters: {
            /**
             * 参数名称
             * @example `title_field`
             */
            name: string;
            /**
             * 参数值
             * @example `title`
             */
            value: string;
        }[];
        /**
         * 使用参数列表
         */
        usageParameters: {
            /**
             * 参数名称
             * @example `allow_dict_id`
             */
            name: string;
            /**
             * 参数值
             * @example `123`
             */
            value: string;
        }[];
        /**
         * 实例描述
         * @example `测试实例`
         */
        description: string;
    };
    /**
     * opensearch应用名
     * @example `"app_group_name"`
     */
    "appGroupIdentity": string;
    /**
     * 功能名称
     * @example `"ctr"`
     */
    "functionName": string;
    /**
     * 实例名称
     * @example `"ctr_test"`
     */
    "instanceName": string;
}
