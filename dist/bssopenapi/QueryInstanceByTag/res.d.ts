export interface QueryInstanceByTagResponse {
    /**
     * 状态码
     * @example `PARAM_ERROR`
     */
    Code: string;
    /**
     * 错误信息
     * @example `param is null`
     */
    Message: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `CAESEgoQCg4KCm`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `9EC6C0B7-3397-5FAE-9915-8972CDDB1211`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 实例信息的列表
     */
    TagResource: {
        /**
         * 资源ID
         * @example `spn-xxxxx`
         */
        ResourceId: string;
        /**
         * 资源类型
         * instance 节省计划实例
         * @example `instance`
         */
        ResourceType: string;
        /**
         * 标签列表
         */
        Tag: {
            /**
             * 标签键
             * @example `tag1`
             */
            Key: string;
            /**
             * 标签值
             * @example `10`
             */
            Value: string;
        }[];
    }[];
}
