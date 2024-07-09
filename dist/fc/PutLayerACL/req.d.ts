export interface PutLayerACLRequest {
    /**
     * 层名称
     * @example `my-layer`
     */
    "layerName": string;
    /**
     * 是否公开层。true或者false。
     * @example `true`
     */
    "public"?: string;
    /**
     * 设置层的访问权限，1：公开，0：私有，默认为私有
     * @example `1`
     */
    "acl"?: string;
}
