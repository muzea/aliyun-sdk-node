export interface DeleteImagesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像ID数组。可设置1~100个。
     */
    "ImageId": string[];
    /**
     * 是否同时删除关联的模板。
     * @example `true`
     */
    "DeleteCascadedBundle"?: boolean;
}
