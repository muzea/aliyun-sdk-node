export interface ListOIDCProvidersRequest {
    /**
     * 当请求的返回结果被截断时，可以使用`Marker`获取从当前截断位置之后的内容。
     * @example `EXAMPLE`
     */
    "Marker"?: string;
    /**
     * 返回结果的条数。当返回结果达到`MaxItems`限制被截断时，返回参数`IsTruncated`将等于`true`。
     *
     * 取值范围：1~100。默认值：100。
     * @example `100`
     */
    "MaxItems"?: number;
}
