export interface GetFunctionCurrentVersionResponse {
    /**
     * 状态码
     * @example `OK`
     */
    Status: string;
    /**
     * HTTP状态码。
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
     * 返回结果。
     * @example `{         "versionName": "v1",         "versionId": 101,         "functionName": "ctr",         "modelType": "tf_checkpoint",         "functionType": "PAAS",         "versionConfig": {             "createParameters": [                 {                     "name": "params1",                     "required": "true",                     "formItemProps": "{\"required\": true, \"pattern?\": \"/^[a-zA-Z][a-zA-Z0-9_]{0,29}$/\"}",                     "componentProps": "{\"component\": \"Input\", \"attributes\": {\"defaultValue\": \"value1\"}}"                 }             ],             "depends": [                 {                     "dependency": "依赖项",                     "condition": "条件",                     "description": ""                 }             ],             "usageParameters": []         }     }`
     */
    Result: {
        /**
         * 功能名称
         * @example `ctr`
         */
        FunctionName: string;
        /**
         * 功能类型：
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
                 * name
                 * @example `params1`
                 */
                Name: string;
                /**
                 * required
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
                 * name
                 * @example `""`
                 */
                Name: string;
                /**
                 * required
                 * @example `""`
                 */
                Required: string;
            }[];
        };
        /**
         * 版本id
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
     * 请求耗时（单位ms）
     * @example `123`
     */
    Latency: number;
}
