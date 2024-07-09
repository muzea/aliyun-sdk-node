export interface ModifyTagGroupsResponse {
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `5a865b03-d2b9-4ef9-be98-f21fa0d93744`
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
         * 标签组ID
         * @example `54629be9-0746-464a-ab59-4830242cf644`
         */
        TagGroupId: string;
        /**
         * 标签组索引
         * @example `1`
         */
        TagGroupIndex: number;
        /**
         * 标签组名称
         * @example `当前学历`
         */
        TagGroup: string;
        /**
         * 话术唯一ID
         * @example `365b955d-6f4d-4ab5-a6e1-9a301307f4b1`
         */
        ScriptId: string;
    }[];
    /**
     * 标签列表
     */
    Tags: {
        /**
         * 标签组名称
         * @example `当前学历`
         */
        TagGroup: string;
        /**
         * 标签名称
         * @example `本科`
         */
        TagName: string;
        /**
         * 标签索引
         * @example `1`
         */
        TagIndex: number;
        /**
         * 话术唯一ID
         * @example `365b955d-6f4d-4ab5-a6e1-9a301307f4b1`
         */
        ScriptId: string;
        /**
         * 标签唯一ID
         * @example `19b23e92-4ee3-4129-8c2e-e1968670d887`
         */
        TagId: string;
    }[];
}
