export interface GetCheckDetailRequest {
    /**
     * 检查项的ID。
     * @example `2`
     */
    "CheckId": number;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 实例所在的地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
