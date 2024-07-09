export interface ListHoneypotProbeUuidRequest {
    /**
     * 管理节点ID。
     * > 您可以调用[ListHoneypotNode](~~ListHoneypotNode~~)接口获取该值
     * @example `a882e590-b87b-45a6-87b9-d0a3e5a0****`
     */
    "ControlNodeId"?: string;
    /**
     * 探针类型。取值：
     * - **host_probe**：主机探针
     * - **vpc\_black\_hole_probe**：VPC黑洞探针
     * @example `host_probe`
     */
    "ProbeType"?: string;
    /**
     * 请求和接收消息的语言类型。默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
