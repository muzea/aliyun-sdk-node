export interface GetActiveIdpConfigResponse {
    /**
     * 本次请求的ID。
     * @example `4D169859-A4F2-5EC8-853B-8447787C0D8A`
     */
    RequestId: string;
    /**
     * 身份源配置。
     */
    Data: {
        /**
         * 身份源配置ID。
         * @example `idp-cfg001`
         */
        Id: string;
        /**
         * 身份源配置名称。
         * @example `测试身份源`
         */
        Name: string;
        /**
         * 身份源配置类型。
         * @example `DingTalk`
         */
        Type: string;
        /**
         * 身份源配置描述。
         * @example `示例身份源`
         */
        Description: string;
    };
}
