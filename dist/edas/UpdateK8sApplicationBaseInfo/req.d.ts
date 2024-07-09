export interface UpdateK8sApplicationBaseInfoRequest {
    /**
     * 待修改的应用ID。
     * @example `4f038ddf-b27b-****-****-88e44375****`
     */
    "AppId": string;
    /**
     * 应用描述，不超过256个字符。
     * @example `app for pre-production`
     */
    "Description"?: string;
    /**
     * 应用负责人，不超过128个字符。
     * @example `张三`
     */
    "Owner"?: string;
    /**
     * 应用负责人电话号码。
     * @example `1361234xxxx`
     */
    "PhoneNumber"?: string;
    /**
     * 应用负责人电子邮箱。
     * @example `mymail@example.com`
     */
    "Email"?: string;
}
