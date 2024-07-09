export interface DescribeImageRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 仓库名。
     * @example `repo1`
     */
    "Repository": string;
    /**
     * 镜像标签。默认值：latest
     * @example `latest`
     */
    "ImageTag"?: string;
    /**
     * 容器类型。取值：singularity
     * @example `singularity`
     */
    "ContainerType"?: string;
}
