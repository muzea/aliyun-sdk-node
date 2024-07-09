export interface CreateImageRequest {
    /**
     * 实例 id
     * @example `i-xxx`
     */
    "InstanceId": string;
    /**
     * 镜像名称。
     * @example `image-xxx`
     */
    "Name"?: string;
}
