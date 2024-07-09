export interface GetCommonImageRequest {
    /**
     * 需要获取的镜像名称。
     * @example `tensorflow-21.09-tf1-py3.sif`
     */
    "ImageName"?: string;
    /**
     * 镜像类型。
     * @example `singularity`
     */
    "ContainType"?: string;
    /**
     * 集群ID，将需要的镜像存入此集群。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId"?: string;
    /**
     * 集群所在的地域ID。您可以通过调用[describeregions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
