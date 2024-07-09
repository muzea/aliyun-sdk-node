export interface UpgradeAICInstanceImageRequest {
    /**
     * 服务器实例ID列表。
     */
    "ServerIds": string[];
    /**
     * AIC镜像ID。
     * @example `m-****`
     */
    "ImageId": string;
    /**
     * 升级超时时间，单位：秒。
     * @example `1800`
     */
    "Timeout"?: number;
}
