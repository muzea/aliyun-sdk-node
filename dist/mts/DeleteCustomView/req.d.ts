export interface DeleteCustomViewRequest {
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
     * 自定义库实体entityID。
     * @example `1`
     */
    "CustomEntityId": string;
    /**
     * 自定义库实体下view图片ID。
     * @example `1`
     */
    "CustomViewId": string;
}
