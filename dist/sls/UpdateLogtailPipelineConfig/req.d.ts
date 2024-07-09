export interface UpdateLogtailPipelineConfigRequest {
    /**
     * Project名称。
     * @example `test-project`
     */
    "project": string;
    /**
     * Logtail流水线配置名称。
     * @example `test-config`
     */
    "configName": string;
    /**
     * Logtail流水线配置内容。
     */
    "body"?: {
        /**
         * 配置名称。
         * ><notice>需要与外层的configName参数保持一致。></notice>
         * @example `test-config`
         */
        configName: string;
        /**
         * 日志样例。支持多条日志。
         * @example `2022-06-14 11:13:29.796 | DEBUG    | __main__:<module>:1 - hello world`
         */
        logSample: string;
        /**
         * 全局配置。
         */
        global: any;
        /**
         * 输入插件列表。
         * ><notice>目前，只允许配置1个输入插件。></notice>
         */
        inputs: any[];
        /**
         * 输入插件列表。
         * > 可分为原生处理插件和扩展处理插件，详情请参见[处理插件](~~64957~~)。
         * ><notice>
         * > - 原生插件仅可用于采集文本日志。
         * > - 不支持同时添加原生插件和扩展插件。
         * > - 使用原生插件时，须符合如下要求：
         * >   - 第一个处理插件必须为正则解析插件、分隔符模式解析插件、JSON解析插件、NGINX模式解析插件、Apache模式解析插件或IIS模式解析插件。
         * >   - 第一个处理插件之后仅允许存在1个时间解析处理插件，1个过滤插件和多个脱敏插件。></notice>
         */
        processors: any[];
        /**
         * 聚合插件列表。
         * ><notice>仅当使用了扩展处理插件时有效，且最多允许使用1个聚合插件。></notice>
         */
        aggregators: any[];
        /**
         * 输出插件列表。
         * ><notice>目前，只允许存在1个SLS输出插件。></notice>
         */
        flushers: any[];
    };
}
