export interface CreateClientKeyRequest {
    /**
     * 绑定的应用接入点名称。
     * @example `aap_test`
     */
    "AapName": string;
    /**
     * Client Key加密口令。
     * 8~64位，支持数字、英文大小写、特殊字符`~!@#$%^&*?_-`，且必须包含其中的两种。
     * @example `bcfefe15-46f0****`
     */
    "Password": string;
    /**
     * ClientKey的有效期结束时间。
     * 按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
     *  >- 如果您未输入NotAfter，取值默认为ClientKey的创建时间加上5年。
     * - 如果您输入了NotAfter，必须输入NotBefore。
     * @example `2028-08-31T17:14:33Z`
     */
    "NotAfter"?: string;
    /**
     * ClientKey的有效期起始时间。
     * 按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
     *  >- 如果您未输入NotBefore，取值默认为ClientKey的创建时间。
     * - 如果您输入了NotBefore，必须输入NotAfter。
     * @example `2023-08-31T17:14:33Z`
     */
    "NotBefore"?: string;
}
