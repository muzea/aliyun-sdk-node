export interface ListCustomImagesRequest {
    /**
     * 镜像来源。取值范围：
     * - self：自定义镜像
     * - others：共享镜像
     * @example `self`
     */
    "ImageOwnerAlias"?: string;
    /**
     * 基础镜像标签，仅管控节点使用。
     * @example `CentOS_7.2_64`
     */
    "BaseOsTag"?: string;
    /**
     * 指定实例规格。如果不指定实例规格，则默认查询所有实例规格支持的镜像列表。
     * @example `ecs.n1.tiny`
     */
    "InstanceType"?: string;
    /**
     * 集群ID。
     * - 如果指定集群ID，则查询集群所在地域下的所有镜像列表。
     * - 如果不指定集群ID，则默认查询所有集群支持的镜像列表。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId"?: string;
}
