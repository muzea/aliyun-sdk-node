export interface ListTagsResponse {
    /**
     * http 状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口消息提示
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 标签组列表
     */
    TagGroups: {
        /**
         * 标签组id
         * @example `38c03261-9fe8-4b9b-8c3b-983a60319012`
         */
        TagGroupId: string;
        /**
         * 标签组位置
         * @example `1`
         */
        TagGroupIndex: number;
        /**
         * 标签组名字
         * @example `测试组1`
         */
        TagGroup: string;
        /**
         * 话术id
         * @example `8a4c6d3d-5ed6-44ca-b779-16c20f8862be`
         */
        ScriptId: string;
    }[];
    /**
     * 标签列表
     */
    Tags: {
        /**
         * 标签组名字
         * @example `测试组1`
         */
        TagGroup: string;
        /**
         * 标签名字
         * @example `是否查看`
         */
        TagName: string;
        /**
         * 标签位置
         * @example `1`
         */
        TagIndex: number;
        /**
         * 话术id
         * @example `8a4c6d3d-5ed6-44ca-b779-16c20f8862be`
         */
        ScriptId: string;
        /**
         * 标签id
         * @example `d62be647-6202-4b1f-9708-0baeec552635`
         */
        TagId: string;
    }[];
}
