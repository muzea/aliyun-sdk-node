export interface QueryUserTagMetaListResponse {
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 返回组织内的用户标签列表。
     */
    Result: {
        /**
         * 标签名称。
         * @example `职位`
         */
        TagName: string;
        /**
         * 标签描述。
         * @example `用于区分部分职位`
         */
        TagDescription: string;
        /**
         * 标签 ID。
         * @example `pop_001`
         */
        TagId: string;
    }[];
}
