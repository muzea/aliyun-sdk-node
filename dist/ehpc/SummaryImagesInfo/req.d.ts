export interface SummaryImagesInfoRequest {
    /**
     * 需要获取镜像信息的集群ID。
     * @example `ehpc-hz-ibug699XXX`
     */
    "ClusterId"?: string;
    /**
     * 需要获取镜像的类型，目前只支持singularity。
     * @example `singularity`
     */
    "ContainerType"?: string;
    /**
     * 镜像名称。您可以调用[SummaryImages](~~440783~~)查询指定集群上的全部镜像名称。
     * @example `test.sif`
     */
    "ImageName"?: string;
}
