export interface UpgradeEngineVersionRequest {
    /**
     * 实例ID。
     * @example `es-cn-n6w1o1x0w001c****`
     */
    "InstanceId": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF****`
     */
    "clientToken"?: string;
    /**
     * 是否进行升级前校验：
     * - true：校验
     * - false（默认）：不校验
     * ><warning> 版本升级校验涉及集群YML、插件配置、集群状态、索引、资源等检查，强烈建议升级前进行前置校验，否则可能带来升级问题。
     * ></warning>
     * @example `false`
     */
    "dryRun"?: boolean;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 升级后的版本。当type为engineVersion时，取值为实例版本，例如6.7；当type为aliVersion时，取值为内核版本，例如ali1.2.0。
         * @example `6.7`
         */
        version: string;
        /**
         * 升级类型，可选值：
         * - engineVersion（默认）：大版本升级
         * - aliVersion：内核版本升级
         * @example `engineVersion`
         */
        type: string;
    };
}
