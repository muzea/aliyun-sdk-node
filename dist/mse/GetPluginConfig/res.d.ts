export interface GetPluginConfigResponse {
    /**
     * 请求ID。
     * @example `03A3E2F4-6804-5663-9D5D-2EC47A1*****`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * Code。
     * @example `200`
     */
    Code: number;
    /**
     * 错误码。
     * @example `500`
     */
    ErrorCode: string;
    /**
     * HTTP STATUS编码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口信息。
     * @example `success`
     */
    Message: string;
    /**
     * 动态错误编码。
     * @example `code`
     */
    DynamicCode: string;
    /**
     * 动态错误信息。
     * @example `message`
     */
    DynamicMessage: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 插件ID。
         * @example `1`
         */
        Id: number;
        /**
         * 创建人ID。
         * @example `123`
         */
        PrimaryUser: string;
        /**
         * 插件类型：
         * - 0：http filter
         * - 1：network filte
         * @example `0`
         */
        Type: number;
        /**
         * 插件目录。
         * 自定义：0
         * 认证权限：1
         * 安全防护：2
         * 传输协议：3
         * 流量管控：4
         * 流量观测：5
         * @example `0`
         */
        Category: number;
        /**
         * 插件名称。
         * @example `name`
         */
        Name: string;
        /**
         * 插件版本。
         * @example `v1`
         */
        Version: string;
        /**
         * 插件概要。
         * @example `这是一个插件。`
         */
        Summary: string;
        /**
         * README描述。
         * @example `read me`
         */
        Readme: string;
        /**
         * 英文README描述。
         * @example `read me`
         */
        ReadmeEn: string;
        /**
         * 插件配置样例
         */
        ConfigExample: string;
        /**
         * 插件执行阶段。
         * 默认阶段：0
         * 认证阶段：1
         * 鉴权阶段：2
         * 统计阶段：3
         * @example `0`
         */
        Phase: number;
        /**
         * 插件执行优先级。数值越大，优先级越高。
         * @example `1`
         */
        Priority: number;
        /**
         * 配置校验。
         * @example `# 配置必须字段的校验，如下例所示，要求插件配置必须存在 "name"、"age"、“friends” 字段
        name: John
        age: 18
        friends:
        - David
        - Anne`
         */
        ConfigCheck: string;
        /**
         * 模式。
         * @example `0`
         */
        Mode: number;
        /**
         * wasm实现语言。
         * C++：0
         * TinyGo：1
         * Rust：2
         * AssemblyScript：3
         * Zig：4
         * @example `0`
         */
        WasmLang: number;
        /**
         * 镜像名称。
         * @example `name`
         */
        ImageName: string;
        /**
         * 发布状态。
         * @example `1`
         */
        PublishState: number;
        /**
         * 启用状态。
         * 未启用：0
         * 启用：1
         * @example `1`
         */
        Status: string;
        /**
         * 网关插件配置列表。
         */
        GatewayConfigList: {
            /**
             * 插件配置ID。
             * @example `1`
             */
            Id: number;
            /**
             * 网关ID。
             * @example `1`
             */
            GatewayId: number;
            /**
             * 网关UniqueId。
             * @example `gw-ubuwqygbq4783gqb2y3f87q****`
             */
            GatewayUniqueId: string;
            /**
             * 网关插件ID。
             * @example `1`
             */
            PluginId: number;
            /**
             * 是否开启。
             * @example `true`
             */
            Enable: boolean;
            /**
             * 插件配置。
             * @example `# 配置必须字段的校验，如下例所示，要求插件配置必须存在 "name"、"age"、“friends” 字段
            name: John
            age: 18
            friends:
            - David
            - Anne`
             */
            Config: string;
            /**
             * 插件应用范围。
             * 全局：0
             * 域名：1
             * 路由：2
             * @example `0`
             */
            ConfigLevel: number;
            /**
             * 域名/路由资源列表（根据ConfigLevel区分）
             */
            ResourceList: {
                Id: number;
                /**
                 * 资源名称（域名/路由名）
                 * @example `test-route`
                 */
                Name: string;
            }[];
            /**
             * 创建时间。
             * @example `1667309705000`
             */
            GmtCreate: string;
            /**
             * 更新时间。
             * @example `1667309705000`
             */
            GmtModified: string;
        }[];
        /**
         * 路由级规则在GatewayConfigList中的起始下标。若不存在路由级规则，值为-1
         * @example `0`
         */
        RouteConfigStartIndex: number;
        /**
         * 域名级规则在GatewayConfigList中的起始下标。若不存在域名级规则，值为-1
         * @example `5`
         */
        DomainConfigStartIndex: number;
        /**
         * 实例规则在GatewayConfigList中的下标。若不存在实例级规则，值为-1
         * @example `7`
         */
        GatewayConfigStartIndex: number;
        /**
         * 网关插件版本信息列表。
         * @example `[{"id":1, "version": "1.0.0"}]`
         */
        VersionJson: string;
    };
}
