export interface ListImagesRequest {
    /**
     * 当前页码。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页条数。
     * 默认值：20。
     * @example `10`
     */
    "PageSize"?: number;
    "ImageCategory"?: string;
    "ImageType"?: string;
    /**
     * 镜像ID数组。
     */
    "ImageIds"?: string[];
    /**
     * 镜像名称数组。
     */
    "ImageNames"?: string[];
}
