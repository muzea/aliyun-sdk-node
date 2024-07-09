export interface CreatePluginRequest {
    /**
     * 插件名称。支持大小写英文字母、中文、数字、下划线（_）、长度为[4,50]个字符, 且不能以下划线开头。
     * @example `NewCors`
     */
    "PluginName": string;
    /**
     * 插件类型, 可选值：
     * - **ipControl**：IP访问控制
     * - **trafficControl**：流量控制
     * - **backendSignature**：后端签名
     * - **jwtAuth**：JWT(OpenId Connect)
     * - **cors**：CORS跨域资源访问
     * - **caching**：缓存
     * - **basicAuth**: Basic Auth
     * - **routing**：后端路由
     * - **accessControl**：参数访问控制
     * - **errorMapping**：错误码映射
     * - **circuitBreaker**：断路器（仅专享实例）
     * - **remoteAuth**：第三方鉴权（仅专享实例）
     * @example `cors`
     */
    "PluginType": string;
    /**
     * 插件定义语句，支持json、yaml
     * @example `---
    unit: SECOND
    apiDefault: 1000
    userDefault: 30
    appDefault: 30
    specials:
      - type: "APP"
        policies:
        - key: 10123123
          value: 10
        - key: 10123123
          value: 10`
     */
    "PluginData": string;
    /**
     * 描述，限200字以内
     * @example `createPlugin`
     */
    "Description"?: string;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     * @example `Key， Value`
     */
    "Tag"?: {
        /**
         * 标签键。
         * n 的取值范围为 `[1, 20]`
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * n 的取值范围为 `[1, 20]`
         * @example `' '`
         */
        Value: string;
    }[];
}
