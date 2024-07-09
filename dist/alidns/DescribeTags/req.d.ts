export interface DescribeTagsRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 资源类型。取值：DOMAIN。
     * @example `DOMAIN`
     */
    "ResourceType": string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页数，默认值：200。
     * @example `200`
     */
    "PageSize"?: number;
}
