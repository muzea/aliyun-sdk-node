export interface ListTagResourcesRequest {
    /**
     * 资源类型，默认填写TEMPLATE。
     * @example `TEMPLATE`
     */
    "ResourceType": string;
    /**
     * 地域ID。默认取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询下一页标签的Token。
     * @example `23432453245`
     */
    "NextToken"?: string;
    /**
     * 每页显示条数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 产品名。默认取值：**dysms**。
     * @example `dysms`
     */
    "ProdCode"?: string;
    /**
     * 标签列表。标签列表和短信模板Code不能同时为空。最多可输入20个标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 短信模板Code。短信模板Code和标签不能同时为空。
     * @example `SMS_23423423`
     */
    "ResourceId"?: string[];
}
