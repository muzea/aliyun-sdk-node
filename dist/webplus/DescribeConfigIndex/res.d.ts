export interface DescribeConfigIndexResponse {
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `0416FA4F-BB38-4237-AAC5-38F15E0*****`
     */
    RequestId: string;
    ConfigGroups: {
        /**
         * 配置组信息
         */
        ConfigGroup: {
            ConfigPaths: {
                /**
                 * 配置组路径
                 */
                ConfigPath: {
                    /**
                     * 路径名称
                     * @example `proxy`
                     */
                    PathName: string;
                    /**
                     * 是否为隐藏路径
                     * @example `false`
                     */
                    HiddenPath: boolean;
                    ConfigOptions: {
                        /**
                         * 配置组选项
                         */
                        ConfigOption: {
                            /**
                             * 正则描述信息
                             * @example `""`
                             */
                            RegexDesc: string;
                            /**
                             * 最大值
                             * @example `-1`
                             */
                            MaxValue: number;
                            /**
                             * 编辑类型
                             * @example `{"component":"Select","props":{}}`
                             */
                            EditorType: string;
                            /**
                             * 最小值
                             * @example `-1`
                             */
                            MinValue: number;
                            /**
                             * 选项标签
                             * @example `Reverse Proxy Type`
                             */
                            OptionLabel: string;
                            /**
                             * 默认值
                             * @example `nginx`
                             */
                            DefaultValue: string;
                            /**
                             * 最大长度
                             * @example `32`
                             */
                            MaxLength: number;
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
                             * 选项描述信息
                             * @example `The reverse proxy type used. After the reverse proxy starts, it will listen to the instance's port 80. Make sure that the port is not occupied by other programs. The reverse proxy will forward the received HTTP request to the application's service port.`
                             */
                            OptionDescription: string;
                            /**
                             * 选项名称
                             * @example `type`
                             */
                            OptionName: string;
                            /**
                             * 路径名称
                             * @example `proxy`
                             */
                            PathName: string;
                            /**
                             * 是否为隐藏选项
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
                             * @example `32`
                             */
                            MinLength: number;
                            /**
                             * 值选项
                             * @example `[{"value": "nginx", "label": "Nginx (1.14.2)"},{"value": "apache", "label": "Apache HTTP Server (2.4.6)"}]`
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
                     * 路径标签
                     * @example `Reverse Proxy`
                     */
                    PathLabel: string;
                }[];
            };
            /**
             * 配置组名称
             * @example `platform`
             */
            GroupName: string;
            /**
             * 配置组标签
             * @example `Platform`
             */
            GroupLabel: string;
        }[];
    };
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
    /**
     * 技术栈名称
     * @example `Tomcat 8.5 / Java 8 / Aliyun Linux 2.1903`
     */
    StackName: string;
    /**
     * 技术栈ID
     * @example `ws-6c937c98a9c0296d0c48*****`
     */
    StackId: string;
}
