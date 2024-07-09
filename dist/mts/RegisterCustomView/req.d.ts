export interface RegisterCustomViewRequest {
    /**
     * 自定义类型，取值：
     * - landmark：自定义地标。
     * - object：自定义物体。
     * @example `landmark`
     */
    "Algorithm": string;
    /**
     * 自定义库ID。
     * @example `1`
     */
    "CustomGroupId": string;
    /**
     * 自定义库实体ID。
     * @example `2`
     */
    "CustomEntityId": string;
    /**
     * 图片URL。
     * @example `http://127.66.**.**​/image.jpeg`
     */
    "ImageUrl": string;
}
