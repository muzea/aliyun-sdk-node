export interface ListTagResourcesRequest {
    /**
     * 资源名称。
     * N的取值范围为：1~50。 当资源类型为user时，资源名称为RAM用户名。
     * > 必须指定 ResourceId、ResourcePrincipalName两个参数中的一个参数，但不能同时指定。
     */
    "ResourcePrincipalName"?: string[];
    /**
     * 当请求的返回结果被截断时，可以使用NextToken获取从当前截断位置之后的内容。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 返回结果的条数。当返回结果达到PageSize限制被截断时，返回参数IsTruncated将等于true。
     * 取值范围：1~100。默认值：100。
     * @example `2`
     */
    "PageSize"?: number;
    /**
     * 资源类型。取值：
     * - user：RAM用户。
     * @example `user`
     */
    "ResourceType"?: string;
    /**
     * 资源ID。
     * N的取值范围为：1~50。 当资源类型为user时，资源ID为RAM用户ID。
     * > 必须指定 ResourceId、ResourcePrincipalName两个参数中的一个参数，但不能同时指定。
     */
    "ResourceId"?: string[];
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 标签键。
         * N的取值范围：1~20，N必须连续。
         * @example `operator`
         */
        Key: string;
        /**
         * 标签值。
         * N的取值范围：1~20，N必须连续。
         * @example `alice`
         */
        Value: string;
    }[];
}
