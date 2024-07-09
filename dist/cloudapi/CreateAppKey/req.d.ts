export interface CreateAppKeyRequest {
    /**
     * APP的ID
     * @example `111053351`
     */
    "AppId": string;
    /**
     * App的key
     * @example `204203237`
     */
    "AppKey"?: string;
    /**
     * 应用AppSecret
     * @example `6f0a4ad7918a4b41a57fc087d5b066d0`
     */
    "AppSecret"?: string;
}
