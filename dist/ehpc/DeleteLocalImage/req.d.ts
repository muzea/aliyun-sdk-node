export interface DeleteLocalImageRequest {
    /**
     * 需要删除镜像的集群ID。
     * @example `ehpc-hz-ibug69****`
     */
    "ClusterId": string;
    /**
     * 需要删除镜像的名称。
     * @example `test.sif`
     */
    "ImageName": string;
    /**
     * 需要删除镜像的类型，目前只支持singularity。
     * @example `singularity`
     */
    "ContainerType": string;
}
