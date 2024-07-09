export interface ServiceInvokeRequest {
    /**
     * 移动端SDK生成
     * @example `eyJhdHRhY2htZW50IjoicGxhdGZvcm0iLCJ1c2VyVmVyaWZpY2F0aW9uIjoicmVxdWlyZWQifQ==`
     */
    "MobileExtendParamsJson"?: string;
    /**
     * 移动端SDK生成
     * @example `ba6f5596f00102cb1a7d971f8390b7ccb28e6bc4e8694d051f9299ccc69e1186`
     */
    "MobileExtendParamsJsonSign"?: string;
    /**
     * 服务端配置参数
     * @example `eyJhdHRhY2htZW50IjoicGxhdGZvcm0iLCJ1c2VyVmVyaWZpY2F0aW9uIjoicmVxdWlyZWQifQ==`
     */
    "ServerExtendParamsJson"?: string;
    /**
     * 认证方式
     * @example `IFAA`
     */
    "ServiceCode": string;
    /**
     * 操作类型
     * @example `SimpleAuthInit`
     */
    "DoraemonAction": string;
    /**
     * 应用外部ID
     * @example `A0000003`
     */
    "ApplicationExternalId": string;
    /**
     * 是否测试, 在生产环境下不生效
     * @example `false`
     */
    "TestModel"?: boolean;
    /**
     * 客户端IP
     * @example `127.0.0.1`
     */
    "XClientIp"?: string;
}
