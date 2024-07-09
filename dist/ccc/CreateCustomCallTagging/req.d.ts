export interface CreateCustomCallTaggingRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 呼入控制标记列表，格式为JSON数组的字符串，要求数组元素个数范围为1-10000。数组的元素是一个对象，包括以下属性：number（格式要求为4-32位的数字）、description、callTagNameList，其中callTagNameList是一个数组，元素是号码标签，（确保号码标签是已创建的号码标签）。
     * @example `[{"number":"1312121****","description":"王先生","callTagNameList":["TagA"]},{"number":"1388888****","description":"张先生","callTagNameList":["TagB"]}]`
     */
    "CustomNumberList": string;
}
