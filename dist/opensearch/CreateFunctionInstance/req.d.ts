export interface CreateFunctionInstanceRequest {
    /**
     * body参数
     * @example `{     "instanceName": "ctr_test",     "modelType": "tf_checkpoint",     "createParameters": [         {             "name": "title_field",             "value": "title"         },         {             "name": "description_field",             "value": ""         },         {             "name": "tags_field",             "value": ""         },         {             "name": "id_field",             "value": "item_id"         },         {             "name": "category_field",             "value": "cate"         }     ],     "description": "测试实例", }`
     */
    "Body"?: {
        /**
         * 实例名称，度为1-30个字符，以字母开头，可以包含大小写字母、数字和下划线
         * @example `ctr_test`
         */
        instanceName: string;
        /**
         * 模型类型，不同功能对应的模型类型如下：
         * - CTR模型：tf_checkpoint
         * - 人气模型：pop
         * - 类目模型：offline_inference
         * - 热词模型：offline_inference
         * - 底纹模型：offline_inference
         * - 热词模型（实时热搜）：near_realtime
         * -  底纹模型（个性化底纹）：near_realtime
         * - 下拉提示模型：offline_inference
         * - 分词模型：text
         * - 词权重模型：tf_checkpoint
         * - 同义词模型：offline_inference
         * @example `tf_checkpoint`
         */
        modelType: string;
        /**
         * 功能类型：
         * - PAAS：（默认）需要训练后才能使用
         * @example `PAAS`
         */
        functionType: string;
        /**
         * 描述信息
         * @example `测试实例`
         */
        description: string;
        /**
         * 创建参数列表
         * @example `[   { "name": "param1", "value": "val1"   } ]`
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
         * 使用参数
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
         * 周期训练信息，cron语法（Minutes Hours DayofMonth Month DayofWeek），为空表示不进行周期训练（默认），其中DayofWeek 0表示星期日
         * @example `0 0 ? * 0,1,2,3,4,5,6`
         */
        cron: string;
    };
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 功能名称，支持的模型有：
     * - CTR模型：ctr
     * - 人气模型：pop
     * - 类目模型：category
     * - 热词模型：hot
     * - 底纹模型：hint
     * - 下拉提示模型：suggest
     * - 分词模型：analyzer
     * - 词权重模型：termweight
     * - 同义词模型：synonym
     * @example `ctr`
     */
    "functionName": string;
}
