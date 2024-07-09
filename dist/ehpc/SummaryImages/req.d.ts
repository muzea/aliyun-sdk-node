export interface SummaryImagesRequest {
    /**
     * 需要获取镜像信息的集群ID。
     * @example `ehpc-hz-jeJki6****`
     */
    "ClusterId": string;
    /**
     * 需要获取镜像的类型，目前只支持singularity。
     * @example `singularity`
     */
    "ContainerType": string;
}
