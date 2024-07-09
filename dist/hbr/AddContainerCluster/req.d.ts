export interface AddContainerClusterRequest {
    /**
     * 集群ID。
     * @example `cca8f35f0e0d84540b49d994511c2c87a`
     */
    "Identifier": string;
    /**
     * 集群名称。
     * @example `ack_pv_backup_location`
     */
    "Name"?: string;
    /**
     * 描述信息。
     * @example `description ack pv backup`
     */
    "Description"?: string;
    /**
     * 集群类型，仅支持ACK，表示阿里云容器服务。
     * @example `ACK`
     */
    "ClusterType": string;
    /**
     * 网络类型，取值包括：
     * * **CLASSIC**：经典网络。
     * * **VPC**：专有网络。
     * @example `VPC`
     */
    "NetworkType": string;
}
