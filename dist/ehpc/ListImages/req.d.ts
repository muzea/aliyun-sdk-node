export interface ListImagesRequest {
    /**
     * 基础镜像标签，仅管控节点使用。
     * @example `CentOS_7.2_64`
     */
    "BaseOsTag"?: string;
    /**
     * 实例规格。
     * - 该参数传入值，查询指定实例规格支持安装的镜像信息。
     * - 该参数不传值，默认查询所有实例规格支持安装的镜像信息。
     * @example `ecs.n1.medium`
     */
    "InstanceType"?: string;
}
