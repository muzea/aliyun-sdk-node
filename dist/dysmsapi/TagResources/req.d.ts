export interface TagResourcesRequest {
    /**
     * 资源类型，默认取值：**TEMPLATE**。
     * @example `TEMPLATE`
     */
    "ResourceType": string;
    /**
     * 地域ID，默认取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 产品名。默认取值：**dysms**。
     * @example `dysms`
     */
    "ProdCode"?: string;
    /**
     * 标签。
     */
    "Tag": {
        /**
         * 标签键。N的取值范围为\[1, 20]。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。N的取值范围为\[1, 20]。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 短信模板Code。
     * @example `SMS_23423423`
     */
    "ResourceId"?: string[];
}
