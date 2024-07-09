export interface DescribeTagHitsSummaryResponse {
    /**
     * Http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口响应信息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `5391EB13-A0E7-402D-A407-B99D4ABAF22A`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 标签组信息
     */
    TagGroups: {
        /**
         * 标签组位置
         * @example `0`
         */
        TagGroupIndex: number;
        /**
         * 标签组名称
         * @example `标签组`
         */
        TagGroup: string;
        /**
         * 话术ID
         * @example `84fc7c41-f918-4a47-b742-a439b35a8567`
         */
        ScriptId: string;
        /**
         * ID
         * @example `8bb6f8ca-85a3-49f8-86a5-3127902a2156`
         */
        Id: string;
    }[];
    /**
     * 命中标签信息
     */
    TagHitsList: {
        /**
         * 命中数量
         * @example `1`
         */
        HitCount: number;
        /**
         * 标签组名称
         * @example `标签组`
         */
        TagGroup: string;
        /**
         * 标签名称
         * @example `标签`
         */
        TagName: string;
    }[];
}
