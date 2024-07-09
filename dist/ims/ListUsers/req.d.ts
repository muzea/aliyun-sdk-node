export interface ListUsersRequest {
    /**
     * 当请求的返回结果被截断时，可以使用`Marker`获取从当前截断位置之后的内容。
     * @example `EXAMPLE`
     */
    "Marker"?: string;
    /**
     * 返回结果的条数。当返回结果达到`MaxItems`限制被截断时，返回参数`IsTruncated`将等于true。
     * 取值范围：1~1000。默认值：1000。
     * @example `1000`
     */
    "MaxItems"?: number;
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
