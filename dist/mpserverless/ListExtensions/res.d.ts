export interface ListExtensionsResponse {
    /**
     * 请求ID。
     * @example `DD0F8BC9-516F-4AEF-8D95-D290C2296D78`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 扩展能力信息。
     */
    Extensions: {
        /**
         * 扩展能力文档链接。
         * @example `https://help.aliyun.com/document_detail/137586.html`
         */
        ExtensionDocumentationLink: string;
        /**
         * 扩展能力唯一标识。
         * @example `ext-5d53a4fb1c9d446e2075a2cc`
         */
        ExtensionId: string;
        /**
         * 扩展能力描述。
         * @example `支持开发者在云函数中快速调用小程序生态的业务API。已支持支付宝特色能力，高德、钉钉相关能力敬请期待。`
         */
        ExtensionDesc: string;
        /**
         * 扩展能力名称。
         * @example `云调用`
         */
        ExtensionName: string;
        /**
         * 是否开启。
         * @example `true`
         */
        Enabled: string;
    }[];
}
