export interface TagResourcesRequest {
    /**
     * 资源类型。取值：
     * - user：RAM用户。
     * @example `user`
     */
    "ResourceType"?: string;
    /**
     * 资源ID。
     * N的取值范围为：1~50。
     * 当资源类型为user时，资源ID为RAM用户ID。
     * >必须指定 `ResourceId`、`ResourcePrincipalName`两个参数中的一个参数，但不能同时指定。
     */
    "ResourceId"?: string[];
    /**
     * 资源名称。
     * N的取值范围为：1~50。
     * 当资源类型为user时，资源名称为RAM用户名。
     * >必须指定 `ResourceId`、`ResourcePrincipalName`两个参数中的一个参数，但不能同时指定。
     * @example `TagResources`
     */
    "ResourcePrincipalName"?: string[];
    /**
     * 资源的标签键。
     * N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含`http://`或者`https://`。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `operator`
         */
        Key: string;
        /**
         * 资源的标签值。
         * N的取值范围：1~20。可以为空字符串。最多支持128个字符，不能包含`http://`或者`https://`。
         * @example `alice`
         */
        Value: string;
    }[];
}
