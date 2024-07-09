export interface CreateCircuitBreakerRuleRequest {
    /**
     * 应用所属的微服务命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 应用名称。
     * @example `spring-cloud-a`
     */
    "AppName": string;
    /**
     * 熔断比例阈值：触发熔断的比例阈值，取值范围为0 - 1，代表0% - 100%。
     * @example `0.8`
     */
    "Threshold": number;
    /**
     * 规则的启用状态。
     * @example `true`
     */
    "Enable": boolean;
    /**
     * 接口名称：适用该规则的应用资源。需要与控制台接口详情处接口名称一致。
     * @example `/a`
     */
    "Resource": string;
    /**
     * 应用ID。
     * @example `hkhon1po62@c3df23522bXXXXX`
     */
    "AppId"?: string;
    /**
     * 集群所在地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 阈值类型：选择以慢调用比例或异常比例作为阈值。
     * @example `0`
     */
    "Strategy": number;
    /**
     * 熔断时长（单位毫秒）：即熔断触发后持续的时间。资源进入熔断状态后，在配置的熔断时长内，请求都会快速失败。取值需要为1000的整数倍，默认值为10000，即10秒。
     * @example `10000`
     */
    "RetryTimeoutMs"?: number;
    /**
     * 统计窗口时长（单位毫秒）：统计的时间窗口长度，取值范围为1秒~120分钟。默认值为20000，即20秒。
     * @example `20000`
     */
    "StatIntervalMs"?: number;
    /**
     * 慢调用RT（单位毫秒）：超过该时长则判定为慢请求，阈值类型为慢调用比例时必填。
     * @example `200`
     */
    "MaxAllowedRtMs"?: number;
    /**
     * 触发熔断的最小请求数目，若当前统计窗口请求数小于此值，即使达到熔断条件规则也不会触发。默认值为10。
     * @example `10`
     */
    "MinRequestAmount"?: number;
    /**
     * 熔断恢复每步最小通过数目，默认值为1。
     * @example `5`
     */
    "HalfOpenBaseAmountPerStep"?: number;
    /**
     * 熔断恢复阶段数，默认值为1。
     * @example `1`
     */
    "HalfOpenRecoveryStepNum"?: number;
    /**
     * 资源类型。
     * @example `0`
     */
    "ResourceType"?: number;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
