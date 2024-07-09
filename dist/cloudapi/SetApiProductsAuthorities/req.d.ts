export interface SetApiProductsAuthoritiesRequest {
    /**
     * APP的ID
     * @example `111385984`
     */
    "AppId": number;
    /**
     * API产品ID列表
     */
    "ApiProductIds": string[];
    /**
     * 授权有效时间的截止时间，请设置格林尼治标准时间(GMT), 如果为空，即为授权永久有效。
     * @example `2023-06-12T03:07:37Z`
     */
    "AuthValidTime"?: string;
    /**
     * 授权描述信息
     * @example `描述信息`
     */
    "Description"?: string;
}
