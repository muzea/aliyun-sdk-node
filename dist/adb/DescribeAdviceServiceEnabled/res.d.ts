export interface DescribeAdviceServiceEnabledResponse {
    /**
     * 调用结果的信息。取值说明：
     * - 请求正常，返回**Success**。
     * - 请求异常，返回具体异常信息。
     * @example `[Advisor] Advisor feature is not available for instance: am-2ze0vp0j6t3to****`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `E031AABF-BD56-5966-A063-4283EF18DB45`
     */
    RequestId: string;
    /**
     * 建议服务是否开启。取值说明：
     * - 开启，返回**True**。
     * - 关闭，返回**False**。
     * @example `False`
     */
    Result: boolean;
}
