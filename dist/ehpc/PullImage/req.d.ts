export interface PullImageRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-nkKsP3****`
     */
    "ClusterId": string;
    /**
     * 仓库名。
     * @example `centos`
     */
    "Repository": string;
    /**
     * 镜像标签，如果不提供则默认为latest。
     * @example `latest`
     */
    "ImageTag"?: string;
    /**
     * 镜像类型，默认值为shifter。
     * @example `shifter`
     */
    "ContainerType"?: string;
}
