export interface UpdateContainerClusterRequest {
    /**
     * 集群ID。
     * @example `cc-000**************134`
     */
    "ClusterId": string;
    /**
     * 集群名称。
     * @example `ack_pv_backup_location`
     */
    "Name"?: string;
    /**
     * 集群描述。
     * @example `description ack pv backup`
     */
    "Description"?: string;
    /**
     * 网络类型，取值包括：
     * * **CLASSIC**：经典网络。
     * * **VPC**：专有网络。
     * @example `VPC`
     */
    "NetworkType"?: string;
    /**
     * 是否重新生成token。
     * @example `false`
     */
    "RenewToken"?: boolean;
}
