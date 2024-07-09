export interface CreateCustomImageRequest {
    /**
     * 实例ID。
     * @example `acp-2zecay9ponatdc4m****`
     */
    "InstanceId": string;
    /**
     * 镜像名称。
     * @example `custom image name`
     */
    "ImageName": string;
    /**
     * 镜像描述。
     * @example `create for cc5g group auth rules test`
     */
    "Description"?: string;
}
