export interface DistributeImageRequest {
    /**
     * 分发地域列表。
     */
    "DistributeRegionList": string[];
    /**
     * 镜像ID。
     * @example `imgc-075cllfeuazh0****`
     */
    "ImageId": string;
}
