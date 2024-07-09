export interface UntagResourcesRequest {
    /**
     * 资源类型。取值：
     * - user：RAM用户。
     * @example `user`
     */
    "ResourceType"?: string;
    /**
     * 是否解绑资源上全部的标签。取值：
     * - true：解绑全部标签。
     * - false（默认值）：不解绑全部标签。
     * > 当请求中未设置TagKey时，该参数才有效。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源名称。
     * N的取值范围为：1~50。 当资源类型为user时，资源名称为RAM用户名。
     * > 必须指定 ResourceId、ResourcePrincipalName两个参数中的一个参数，但不能同时指定。
     */
    "ResourcePrincipalName"?: string[];
    /**
     * 资源ID。
     * N的取值范围为：1~50。 当资源类型为user时，资源ID为RAM用户ID。
     * > 必须指定 ResourceId、ResourcePrincipalName两个参数中的一个参数，但不能同时指定。
     * @example `UntagResources`
     */
    "ResourceId"?: string[];
    /**
     * 资源的标签键。
     * N的取值范围：1~20，N必须连续。
     */
    "TagKey"?: string[];
}
