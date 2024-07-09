export interface ModifyClientConfSetupRequest {
    /**
     * 策略标签类型。
     * @example `machineResource`
     */
    "StrategyTag": string;
    /**
     * 客户端策略标签值。
     * - major
     * - advanced
     * - basic
     * @example `major`
     */
    "StrategyTagValue": string;
    /**
     * 用户配置的客户端策略配置信息。
     * - cpu: 客户端占用主机资源的最大cpu比例
     * - mem: 客户端占用主机资源最大内存大小
     * @example `{
          "cpu": "20"
    }`
     */
    "StrategyConfig"?: string;
}
