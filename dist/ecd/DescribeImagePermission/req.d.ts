export interface DescribeImagePermissionRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像ID。
     * @example `m-4zfb6zj728hhr****`
     */
    "ImageId": string;
}
