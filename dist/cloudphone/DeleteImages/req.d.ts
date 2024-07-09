export interface DeleteImagesRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像ID列表。最大支持100个。
     * @example `cpm-xxxxxxxx`
     */
    "ImageId": string[];
    /**
     * 是否执行强制删除镜像。默认值：false
     * @example `false`
     */
    "Force"?: boolean;
}
