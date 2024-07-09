export interface ListCheckStandardRequest {
    /**
     * 所属云厂商。取值：
     * - **ALIYUN**：阿里云
     */
    "Vendors"?: string[];
    /**
     * 云产品的资产类型。
     */
    "InstanceTypes"?: string[];
    /**
     * 云产品子类型。
     */
    "InstanceSubTypes"?: string[];
    /**
     * 检查项的目标云产品实例ID。
     */
    "InstanceIds"?: string[];
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
