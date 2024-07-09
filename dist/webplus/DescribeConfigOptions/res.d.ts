export interface DescribeConfigOptionsResponse {
    /**
     * 技术栈配置信息
     */
    StackConfigOption: {
        /**
         * 技术栈类型
         * @example `ws-6c937c98a9c0296d0c48*****`
         */
        StackId: string;
        ConfigOptions: {
            /**
             * 配置选项列表
             */
            ConfigOption: {
                /**
                 * 正则匹配描述
                 * @example `“”`
                 */
                RegexDesc: string;
                /**
                 * 最大值
                 * @example `-1`
                 */
                MaxValue: number;
                /**
                 * 编辑类型
                 * @example `{"component":"Editor","props":{}}`
                 */
                EditorType: string;
                /**
                 * 最小值
                 * @example `-1`
                 */
                MinValue: number;
                /**
                 * 默认值
                 * @example `“”`
                 */
                DefaultValue: string;
                /**
                 * 最大长度
                 * @example `1024`
                 */
                MaxLength: number;
                /**
                 * 可选项标签
                 * @example `Start Command`
                 */
                OptionLabel: string;
                /**
                 * 正则匹配模式
                 * @example `“”`
                 */
                RegexPattern: string;
                /**
                 * 变更重要性
                 * @example `NoInterruption`
                 */
                ChangeSeverity: string;
                /**
                 * 选项描述信息
                 * @example `Web+ uses this command to launch an application`
                 */
                OptionDescription: string;
                /**
                 * 可选项名称
                 * @example `start`
                 */
                OptionName: string;
                /**
                 * 路径名称
                 * @example `application.commands`
                 */
                PathName: string;
                /**
                 * 是否是隐藏选项
                 * @example `false`
                 */
                HiddenOption: boolean;
                /**
                 * 值类型
                 * @example `String`
                 */
                ValueType: string;
                /**
                 * 最小长度
                 * @example `0`
                 */
                MinLength: number;
                /**
                 * 值类型的选项
                 * @example `“”`
                 */
                ValueOptions: string;
                /**
                 * 是否为只读选项
                 * @example `false`
                 */
                ReadonlyOption: boolean;
            }[];
        };
        /**
         * 技术栈名称
         * @example `Tomcat 8.5 / Java 8 / Aliyun Linux 2.1903`
         */
        StackName: string;
    };
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `EB4D295F-18CE-413D-85BE-EFCB508*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
