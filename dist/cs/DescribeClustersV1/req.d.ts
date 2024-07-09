export interface DescribeClustersV1Request {
    /**
     * 集群名称。
     * 命名规则：由数字、汉字、英文字符或短划线（-）组成，长度范围1~63个字符，且不能以短划线（-）开头。
     * @example `cluster-demo`
     */
    "name"?: string;
    /**
     * - `Kubernetes`: ACK专有集群。
     * - `ManagedKubernetes`：ACK托管类的集群，包括ACK托管集群（ACK集群Pro版、ACK集群基础版）、ACK Serverless集群（Pro版、基础版）、ACK Edge集群（Pro版、基础版）、ACK灵骏集群（Pro版）。
     * - `ExternalKubernetes`：注册集群。
     * @example `Kubernetes`
     */
    "cluster_type"?: string;
    /**
     * 每页显示的记录数。
     * @example `10`
     */
    "page_size"?: number;
    /**
     * 当前页码。
     * @example `3`
     */
    "page_number"?: number;
    /**
     * 当您选择`cluster_type`为`ManagedKubernetes`时，即ACK托管类的集群时，您可以进一步指定集群的子类型。
     * - `Default`：ACK托管集群，包括ACK集群Pro版和ACK集群基础版。
     * - `Edge`：ACK Edge集群，包括ACK Edge集群Pro版和ACK Edge集群基础版。
     * - `Serverless`：ACK Serverless集群，包括ACK Serverless集群Pro版和ACK Serverless集群基础版。
     * - `Lingjun`：ACK灵骏集群，提供Pro版。
     * @example `Default`
     */
    "profile"?: string;
    /**
     * 当您选择`cluster_type`为`ManagedKubernetes`并配置`profile`后，您可以进一步指定集群的规格。
     * - `ack.pro.small`：集群Pro版。
     * - `ack.standard`：集群基础版（取值为空时默认选择）。
     * @example `ack.pro.small`
     */
    "cluster_spec"?: string;
    /**
     * 集群地域。通过指定该字段，可以过滤出该地域下的集群列表。
     * @example `cn-hangzhou`
     */
    "region_id"?: string;
    /**
     * 集群ID。
     * @example `c3fb96524f9274b4495df0f12a6b5****`
     */
    "cluster_id"?: string;
}
