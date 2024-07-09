export interface DescribePolicyAdvancedConfigResponse {
    /**
     * 访问控制策略严格模式的开启状态。取值：
     * - **on**：严格模式已开启。
     * - **off**：严格模式已关闭。
     * @example `off`
     */
    InternetSwitch: string;
    /**
     * 返回结果的请求ID。
     * @example `850A84D6-0DE4-4797-A1E8-00090125EEB1`
     */
    RequestId: string;
}
