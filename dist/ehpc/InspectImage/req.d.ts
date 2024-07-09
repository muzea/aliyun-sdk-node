export interface InspectImageRequest {
    /**
     * 需获取构建信息的镜像所在的E-HPC集群ID。
     * @example `ehpc-hz-ibug699***`
     */
    "ClusterId"?: string;
    /**
     * 容器镜像类型。固定值，目前仅支持singularity。
     * @example `singularity`
     */
    "ContainerType"?: string;
    /**
     * 被查看inspect信息的镜像名称。
     * @example `test.sif`
     */
    "ImageName"?: string;
}
