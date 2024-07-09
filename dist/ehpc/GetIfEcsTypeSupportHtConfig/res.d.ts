export interface GetIfEcsTypeSupportHtConfigResponse {
    /**
     * 请求ID。
     * @example `80CA7A93-7291-4402-B63D-86DF334E0A1F`
     */
    RequestId: string;
    /**
     * 是否默认开启超线程。可能值：
     * - true：默认开启超线程
     * - false：默认不开启超线程
     * >SCC规格族默认不开启超线程，其他规格族默认开启超线程。
     * @example `true`
     */
    DefaultHtEnabled: boolean;
    /**
     * ECS实例规格。
     * @example `ecs.g6.large`
     */
    InstanceType: string;
    /**
     * 是否支持超线程配置。可能值：
     * - true：支持超线程
     * - false：不支持超线程
     * @example `true`
     */
    SupportHtConfig: boolean;
}
