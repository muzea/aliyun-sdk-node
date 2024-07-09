export interface OpenAckServiceRequest {
    /**
     * 待开通的服务类型。可选值：
     * - `propayasgo`：容器服务Kubernetes版（包括ACK托管集群和ACK专有集群）、容器服务Serverless版、注册集群。
     * - `edgepayasgo`：容器服务Edge版。
     * @example `propayasgo`
     */
    "type"?: string;
}
