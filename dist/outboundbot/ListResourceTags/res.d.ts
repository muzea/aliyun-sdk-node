export interface ListResourceTagsResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
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
     * 资源标签信息
     * @example `{}`
     */
    ResourceTags: {
        /**
         * 页号
         * @example `1`
         */
        PageNumber: number;
        /**
         * 个数
         * @example `10`
         */
        PageSize: number;
        /**
         * 总计个数
         * @example `100`
         */
        TotalCount: number;
        /**
         * 资源标签列表
         * @example `[]`
         */
        List: {
            /**
             * 资源标签key
             * @example `name`
             */
            Key: string;
            /**
             * 资源标签值
             * @example `xxx`
             */
            Value: string;
        }[];
    };
}
