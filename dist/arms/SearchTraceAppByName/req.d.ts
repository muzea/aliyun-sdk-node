export interface SearchTraceAppByNameRequest {
    /**
     * 应用名称。
     * @example `test-app`
     */
    "TraceAppName"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 精确查找弹性伸缩资源时使用的标签键。标签键长度的取值范围：1~128。
         * `Tags`用于精确查找绑定了指定标签的弹性伸缩资源，由一个键值对组成。
         * - 仅指定`Tags.Key`时，则返回关联该标签键的所有资源。
         * - 仅指定`Tags.Value`时，则出现`MissingParameter.TagKey`的报错提示。
         * - 同时指定多个标签键值对时，仅同时满足所有标签键值对的弹性伸缩资源会被查找到。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。非必填，可以为空字符串。最多支持128个字符，不能以```acs:```开头，不能包含```http://```或者```https://```。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
