export interface SetClusterInterceptionConfigRequest {
    /**
     * 集群ID。多个集群ID使用英文逗号（,）分隔。
     * >您可以调用[ListClusterInterceptionConfig](~~ListClusterInterceptionConfig~~)获取该参数。
     * @example `c60b77fe62093480db6164a3c2fa****`
     */
    "ClusterIds": string;
    /**
     * 需要设置的开关类型。取值：
     * - **0**：拦截功能开关
     * - **1**：拦截类型开关
     * - **2**：拦截历史开关
     * @example `0`
     */
    "SwitchType": number;
    /**
     * 开关操作。取值：
     * - **1**：开启
     * - **0**：关闭
     * @example `1`
     */
    "SwitchOn": number;
}
