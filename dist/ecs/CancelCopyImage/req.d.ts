export interface CancelCopyImageRequest {
    /**
     * 目标镜像所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 正在被复制的镜像ID。
     * @example `m-bp1caf3yicx5jlfl****`
     */
    "ImageId": string;
}
