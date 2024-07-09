export interface RemoveImageLabelsRequest {
    /**
     * 镜像ID。如何获取镜像ID，请参见[ListImages](~~449118~~)  。
     * @example `image-d8df******dsjfd`
     */
    "ImageId": string;
    /**
     * label 的 key
     * @example `key1`
     */
    "LabelKey": string;
}
