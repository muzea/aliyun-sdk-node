export interface UntagResourcesRequest {
    /**
     * 资源类型，默认填写TEMPLATE。
     * @example `TEMPLATE`
     */
    "ResourceType": string;
    /**
     * 地域，默认填写cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否删除该模板下的所有标签。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 产品名。默认取值：**dysms**。
     * @example `dysms`
     */
    "ProdCode"?: string;
    /**
     * 标签键。标签键的数量范围为[1, 20]。
     * @example `TestKey`
     */
    "TagKey"?: string[];
    /**
     * 短信模板Code。模板Code的数量范围为[1,20]。
     * @example `SMS_23423423`
     */
    "ResourceId"?: string[];
}
