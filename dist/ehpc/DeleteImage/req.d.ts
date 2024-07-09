export interface DeleteImageRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 仓库名。
     * 您可以通过调用[ListContainerImages](~~87348~~)获取仓库名称。
     * @example `repo1`
     */
    "Repository": string;
    /**
     * 镜像标签。
     * 默认值：latest
     * @example `latest`
     */
    "ImageTag"?: string;
    /**
     * 容器类型。固定值：singularity
     * @example `singularity`
     */
    "ContainerType"?: string;
}
