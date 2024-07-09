export interface ModifyCustomCallTaggingRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 呼入号码标记的号码，会根据号码匹配待修改的呼入号码标记。
     * @example `1312121****`
     */
    "Number": string;
    /**
     * 号码标签名称列表，请传入待修改的完整的号码标签列表，确保号码标签已创建。
     * @example `["TagA","TagB"]`
     */
    "CallTagNameList": string;
    /**
     * 新的呼入号码标记描述，非必填，默认为空，为空表示不修改。
     * @example `王先生`
     */
    "Description"?: string;
}
