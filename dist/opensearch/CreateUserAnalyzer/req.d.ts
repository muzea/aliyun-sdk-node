export interface CreateUserAnalyzerRequest {
    /**
     * 请求体
     */
    "body"?: {
        /**
         * 名称
         * @example `jmbon_analyzer`
         */
        name: string;
        /**
         * 基础分词器
         * @example `中文-通用分析`
         */
        business: string;
        /**
         * 基础分词器类型 (AUTO, MODEL, SYSTEM, USER)
         * @example `AUTO`
         */
        businessType: string;
        /**
         * 引擎类型 (HA3, ES)
         * @example `HA3`
         */
        type: string;
        /**
         * 用于指定模型定制分析器所属应用ID
         * @example `110123123`
         */
        businessAppGroupId: string;
    };
    /**
     * 是否只预检此次请求，取值含义如下：
     * - true：发送检查请求，不会创建终端节点。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。
     * - false（默认值）：立即触发创建终端节点。
     * @example `false`
     */
    "dryRun"?: boolean;
}
