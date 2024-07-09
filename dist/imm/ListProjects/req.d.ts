export interface ListProjectsRequest {
    /**
     * 返回项目的最大个数，取值范围为0~200。不设置此参数或者设置为0时，则默认值为100。
     * @example `100`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。从NextToken开始按字典序返回项目信息列表。第一次调用此接口时，设置为空。
     * @example `MTIzNDU2Nzg6aW1tdGVzdDAx`
     */
    "NextToken"?: string;
    /**
     * 列出指定前缀的项目，长度限制为0~128字符。
     * @example `immtest`
     */
    "Prefix"?: string;
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值
         * @example `TestValue`
         */
        Value: string;
    }[];
}
