export interface DeleteControlPolicyRequest {
    /**
     * 流量的源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。
     * 取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 访问控制策略的唯一标识ID。
     * 删除安全访问控制策略，需要提供该策略的唯一标识ID。您可调用[DescribeControlPolicy](~~138866~~)接口获取该ID。
     * @example `00281255-d220-4db1-8f4f-c4df221ad84c`
     */
    "AclUuid": string;
    /**
     * 安全访问控制策略管控的流量方向。
     * 取值：
     * - **in**：流量从外到内。
     * - **out**：流量从内到外。
     * @example `in`
     */
    "Direction": string;
}
