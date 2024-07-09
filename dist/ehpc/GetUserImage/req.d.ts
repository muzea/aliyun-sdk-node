export interface GetUserImageRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-ibug69*****`
     */
    "ClusterId": string;
    /**
     * 镜像名称。
     * @example `test.sif`
     */
    "ImageName": string;
    /**
     * 镜像类型，目前只支持singularity。
     * @example `singularity`
     */
    "ContainerType": string;
    /**
     * OSS Bucket中的镜像存放路径。
     * @example `testUserImages`
     */
    "ImagePath": string;
    /**
     * 存放镜像的OSS Bucket。
     * @example `XXXXXXX`
     */
    "OSSBucket": string;
    /**
     * OSS的Endpoint。
     * @example `vpc***-oss-cn-hangzhou.aliyuncs.com`
     */
    "OSSEndPoint": string;
}
