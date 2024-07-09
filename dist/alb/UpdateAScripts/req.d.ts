export interface UpdateAScriptsRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `b1f642ac-5558-4a36-b7d9-cf53******`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会更新可编程脚本。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 可编程脚本信息列表。
     */
    "AScripts"?: {
        /**
         * 可编程脚本名称。
         * 长度为2~128个英文或中文字符，必须以大小写英文字母或中文开头，可包含数字，半角句号（.），下划线（_）和短划线（-）。
         * @example `Group1`
         */
        AScriptName: string;
        /**
         * 是否启用可编程脚本。取值：
         * - **true**：启用。
         * - **false**（默认值）：不启用。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * 可编程脚本内容。
         * @example `if and(match_re($uri, '^/1.txt$'), $arg_type) { rewrite(concat('/1.', $arg_type), 'break') }`
         */
        ScriptContent: string;
        /**
         * 扩展属性
         */
        ExtAttributes: {
            /**
             * Ascript脚本的属性名称。
             * 仅取值**EsDebug**：当请求携带_es_dbg参数，且值为此处配置的密钥时，开启相应的调试响应头，以输出规则执行记录。
             * @example `EsDebug`
             */
            AttributeKey: string;
            /**
             * 属性值，大小写英文字母或数字，长度为1~128个字符
             * @example `test123`
             */
            AttributeValue: string;
        }[];
        /**
         * 可编程脚本ID。
         * @example `as-mhqxcanmivn4g5****`
         */
        AScriptId: string;
        /**
         * 是否启用可编程脚本扩展属性。取值：
         * - true：启用。
         * - false(默认值)：不启用
         * @example `true`
         */
        ExtAttributeEnabled: boolean;
    }[];
}
