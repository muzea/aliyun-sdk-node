export interface ListCommunityImagesRequest {
    /**
     * 基础镜像操作系统标签。
     * @example `CentOS_7.2_64`
     */
    "BaseOsTag"?: string;
    /**
     * 指定实例规格。如果不指定实例规格，则默认查询所有实例规格支持的镜像列表。
     * @example `ecs.n1.tiny`
     */
    "InstanceType"?: string;
    /**
     * 指定集群ID。如果该集群支持多操作系统，则查询集群所在地域下的所有镜像列表。
     * 如果不指定集群ID，则默认查询所有集群支持的镜像列表。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId"?: string;
}
