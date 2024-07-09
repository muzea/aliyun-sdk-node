export interface DescribeAddonsRequest {
    /**
     * 集群所在地域ID。
     * @example `cn-beijing`
     */
    "region": string;
    /**
     * - `Kubernetes`: ACK专有集群。
     * - `ManagedKubernetes`：ACK托管类的集群，包括ACK托管集群（ACK集群Pro版、ACK集群基础版）、ACK Serverless集群（Pro版、基础版）、ACK Edge集群（Pro版、基础版）、ACK灵骏集群（Pro版）。
     * - `ExternalKubernetes`：注册集群。
     * @example `ManagedKubernetes`
     */
    "cluster_type"?: string;
    /**
     * 集群类型，取值：
     * - `Default`：托管版集群。
     * - `Serverless`：Serverless集群。
     * - `Edge`：边缘集群。
     * @example `Default`
     */
    "cluster_profile"?: string;
    /**
     * 当您选择`cluster_type`为`ManagedKubernetes`并配置`profile`后，您可以进一步指定集群的规格。
     * - `ack.pro.small`：集群Pro版。
     * - `ack.standard`：集群基础版（取值为空时默认选择）。
     * @example `ack.pro.small`
     */
    "cluster_spec"?: string;
    /**
     * 集群版本。
     * @example `1.24.6-aliyun.1`
     */
    "cluster_version"?: string;
}
