export interface DeleteCallTagRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 号码标签名称，请确保传入的标签是已创建的号码标签。
     * @example `TagA`
     */
    "TagName": string;
}
