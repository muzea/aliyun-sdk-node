export interface GetImageRequest {
    /**
     * 镜像ID。如何获取镜像ID，请参见[ListImages](~~449118~~)  。
     * @example `image-4c62******53uor`
     */
    "ImageId": string;
    /**
     * 是否显示非必要信息，非必要信息目前包含Labels。
     * 取值如下：
     * - false（默认值）：不显示非必要信息。
     * - true：显示非必要信息。
     * @example `false`
     */
    "Verbose"?: boolean;
}
