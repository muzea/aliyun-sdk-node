export interface QueryUserTagValueListResponse {
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
     * 返回用户标签及标签值列表的请求结果。
     */
    Result: {
        /**
         * 标签的值。
         * @example `主管`
         */
        TagValue: string;
        /**
         * 标签名称。
         * @example `职位`
         */
        TagName: string;
        /**
         * 标签 ID。
         * @example `pop_001`
         */
        TagId: string;
    }[];
}
