export interface UpdateInstanceGroupImageRequest {
    /**
     * 实例组ID列表。
     */
    "InstanceGroupIds": string[];
    /**
     * 镜像ID。
     * @example `imgc-075cllfeuazh****`
     */
    "ImageId": string;
}
