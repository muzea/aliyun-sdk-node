export interface CancelCopyImageRequest {
    /**
     * 复制镜像的目标地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目标地域下正在通过复制而生成的新镜像ID。
     * @example `m-gx2x1dhsmusr2****`
     */
    "ImageId": string;
}
