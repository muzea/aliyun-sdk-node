export interface GetDomainRequest {
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * domain id
         * @example `bj1`
         */
        domain_id: string;
        /**
         * 是否需要获取domain的已用quota，默认为false。当domain容量配额size_quota大于0时，传true可获取domain已用容量配额。
         * @example `true`
         */
        get_quota_used: boolean;
        /**
         * 需要获取的 domain 属性字段，英文逗号分隔，为空代表不获取任何枚举字段
         * @example `file_category`
         */
        fields: string;
    };
}
