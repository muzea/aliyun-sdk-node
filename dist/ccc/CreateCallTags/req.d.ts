export interface CreateCallTagsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 号码标签名称列表，格式为JSON数组的字符串，数组元素是待创建的号码标签名称，号码标签名称的长度要求1-10个字符。
     * @example `["TagA","TagB"]`
     */
    "CallTagNameList": string;
}
