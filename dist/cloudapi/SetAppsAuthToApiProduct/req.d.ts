export interface SetAppsAuthToApiProductRequest {
    /**
     * API产品ID
     * @example `117b7a64a8b3f064eaa4a47ac62aac5e`
     */
    "ApiProductId": string;
    /**
     * 应用ID列表
     */
    "AppIds": number[];
    /**
     * 授权有效时间的截止时间，请设置格林尼治标准时间(GMT), 如果为空，即为授权永久有效。
     * @example `2023-05-31T08:15:39Z`
     */
    "AuthValidTime"?: string;
    /**
     * 描述信息
     * @example `描述信息`
     */
    "Description"?: string;
}
