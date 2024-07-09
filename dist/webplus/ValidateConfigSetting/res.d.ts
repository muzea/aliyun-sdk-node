export interface ValidateConfigSettingResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `170E6BDE-8ACA-4013-B1D6-F0C2AAD*****`
     */
    RequestId: string;
    ConfigValidationResults: {
        /**
         * 配置有效性验证结果
         */
        ConfigValidationResult: {
            /**
             * 选项名称
             * @example `port`
             */
            OptionName: string;
            /**
             * 路径名称
             * @example `application.option`
             */
            PathName: string;
            /**
             * 结果信息
             * @example `Parsing configuration values fails. Please make sure the value is consistent with the declared type. Currently supported types are: String, Integer, List, Boolean, Float, Json.`
             */
            ResultMessage: string;
            /**
             * 结果重要性
             * @example `Error`
             */
            ResultSeverity: string;
            /**
             * 配置可选项
             */
            ConfigOption: {
                /**
                 * 正则匹配描述
                 * @example `""`
                 */
                RegexDesc: string;
                /**
                 * 最大值
                 * @example `65535`
                 */
                MaxValue: number;
                /**
                 * 编辑类型
                 * @example `{\"component\":\"NumberPicker\",\"props\":{}}`
                 */
                EditorType: string;
                /**
                 * 最小值
                 * @example `1024`
                 */
                MinValue: number;
                /**
                 * 默认值
                 * @example `8080`
                 */
                DefaultValue: string;
                /**
                 * 最大长度
                 * @example `-1`
                 */
                MaxLength: number;
                /**
                 * 可选项标签
                 * @example `Server Port`
                 */
                OptionLabel: string;
                /**
                 * 正则匹配模式
                 * @example `""`
                 */
                RegexPattern: string;
                /**
                 * 变更重要性
                 * @example `NoInterruption`
                 */
                ChangeSeverity: string;
                /**
                 * 可选项描述信息
                 * @example `This port will be used as the HTTP service port after the application is launched, and ports from 1024 to 65535 can be used.`
                 */
                OptionDescription: string;
                /**
                 * 可选项名称
                 * @example `port`
                 */
                OptionName: string;
                /**
                 * 路径名称
                 * @example `application.option`
                 */
                PathName: string;
                /**
                 * 是否为隐藏选项
                 * @example `false`
                 */
                HiddenOption: boolean;
                /**
                 * 值类型
                 * @example `Integer`
                 */
                ValueType: string;
                /**
                 * 最小长度
                 * @example `0`
                 */
                MinLength: number;
                /**
                 * 值可选项
                 * @example `""`
                 */
                ValueOptions: string;
                /**
                 * 是否为只读选项
                 * @example `false`
                 */
                ReadonlyOption: boolean;
            };
        }[];
    };
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
