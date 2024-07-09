export interface DescribeContainerClusterResponse {
    /**
     * 请求ID。
     * @example `CC94B755-C3C2-5B9D-BD77-E0FE819A4DB2`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码。200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页大小。最小值为1，最大值为99，默认值为10。
     * @example `100`
     */
    PageSize: number;
    /**
     * 分页页码，从1开始，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录数。
     * @example `8`
     */
    TotalCount: number;
    /**
     * 集群列表信息。
     */
    Clusters: {
        /**
         * 集群token，用于集群中hbr客户端注册使用。
         * @example `eyJhY2Nvd******A/VnZpgXQC5A==`
         */
        Token: string;
        /**
         * 描述信息。
         * @example `description ack pv backup`
         */
        Description: string;
        /**
         * 集群类型，仅支持ACK，表示阿里云容器服务Kubernetes版中的容器集群。
         * @example `ACK`
         */
        ClusterType: string;
        /**
         * 集群标识。
         * @example `c5bbd0931a30947f4ab85efd19380a72d`
         */
        Identifier: string;
        /**
         * 网络类型，返回值包括：
         * * **CLASSIC**：经典网络。
         * * **VPC**：专有网络。
         * @example `VPC`
         */
        NetworkType: string;
        /**
         * 集群名称。
         * @example `ack_pv_backup_location`
         */
        Name: string;
        /**
         * 客户端状态：
         * - **MISS**：失联。
         * - **UNKNOWN**：未知。
         * - **READY**：就绪。
         * @example `READY`
         */
        AgentStatus: string;
        /**
         * 集群ID。
         * @example `cl-0006gwppd0jtttpmb0ri`
         */
        ClusterId: string;
    }[];
}
