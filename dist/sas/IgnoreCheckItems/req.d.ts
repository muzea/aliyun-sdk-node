export interface IgnoreCheckItemsRequest {
    /**
     * 指定要忽略的服务器UUID列表。
     * > 您可以调用[DescribeCloudCenterInstances](~~141932~~)接口获取服务器的UUID。
     */
    "UuidList"?: string[];
    /**
     * 指定需要忽略的检查项列表。
     */
    "CheckAndRiskTypeList"?: {
        /**
         * 检查项ID。
         * @example `52`
         */
        CheckId: number;
        /**
         * 基线风险类别。
         * @example `weak_password`
         */
        RiskType: string;
    }[];
    /**
     * 操作类型。取值如下：
     * - **1**：忽略
     * - **2**：取消忽略
     * @example `1`
     */
    "Type": number;
    /**
     * 加白理由。
     * @example `already config in another way`
     */
    "Reason"?: string;
    /**
     * 请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 数据来源。取值：
     * - **default**：主机基线
     * - **agentless**：agentless基线
     * @example `agentless`
     */
    "Source"?: string;
    /**
     * 检查项ID列表。
     */
    "CheckIds"?: number[];
}
