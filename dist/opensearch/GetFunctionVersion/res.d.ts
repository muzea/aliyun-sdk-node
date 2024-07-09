export interface GetFunctionVersionResponse {
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
     * @example `1638157479281`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `version not exist.`
     */
    Message: string;
    /**
     * 错误码
     * @example `Version.NotExist`
     */
    Code: string;
    /**
     * 结果体
     * @example `[]`
     */
    Result: {
        /**
         * 功能名称
         * @example `ctr`
         */
        FunctionName: string;
        /**
         * 功能类型
         * - PAAS
         * - SAAS
         * @example `PAAS`
         */
        FunctionType: string;
        /**
         * 模型类型
         * @example `tf_checkpoint`
         */
        ModelType: string;
        /**
         * 配置信息
         * @example `{             "createParameters": [                 {                     "name": "params1",                     "required": "true",                     "formItemProps": "{\"required\": true, \"pattern?\": \"/^[a-zA-Z][a-zA-Z0-9_]{0,29}$/\"}",                     "componentProps": "{\"component\": \"Input\", \"attributes\": {\"defaultValue\": \"value1\"}}"                 }             ],             "depends": [                 {                     "dependency": "依赖项",                     "condition": "条件",                     "description": ""                 }             ],             "usageParameters": []         }`
         */
        VersionConfig: {
            /**
             * 创建实例时使用的参数列表
             * @example `[                 {                     "name": "params1",                     "required": "true",                     "formItemProps": "{\"required\": true, \"pattern?\": \"/^[a-zA-Z][a-zA-Z0-9_]{0,29}$/\"}",                     "componentProps": "{\"component\": \"Input\", \"attributes\": {\"defaultValue\": \"value1\"}}"                 }             ]`
             */
            CreateParameters: {
                /**
                 * Name
                 * @example `params1`
                 */
                Name: string;
                /**
                 * Required
                 * @example `true`
                 */
                Required: string;
            }[];
            /**
             * 实例的依赖项列表
             * @example `[                 {                     "dependency": "依赖项",                     "condition": "条件",                     "description": ""                 }             ]`
             */
            Depends: {
                /**
                 * 条件
                 * @example `""`
                 */
                Condition: string;
                /**
                 * 依赖项
                 * @example `""`
                 */
                Dependency: string;
                /**
                 * 描述
                 * @example `""`
                 */
                Description: string;
            }[];
            /**
             * 实例在线使用过程中的参数列表
             * @example `[]`
             */
            UsageParameters: {
                /**
                 * Name
                 * @example `""`
                 */
                Name: string;
                /**
                 * Required
                 * @example `""`
                 */
                Required: string;
            }[];
        };
        /**
         * 版本ID
         * @example `101`
         */
        VersionId: number;
        /**
         * 版本名称
         * @example `v1`
         */
        VersionName: string;
    };
    /**
     * 任务最大运行时间
     * @example `123`
     */
    Latency: number;
}
