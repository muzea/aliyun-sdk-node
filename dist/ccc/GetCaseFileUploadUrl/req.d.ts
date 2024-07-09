export interface GetCaseFileUploadUrlRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 预测式外呼活动名单文件名称，名称的格式要求为英文大小写字母，文件格式要求csv格式。
     * @example `case.csv`
     */
    "FileName": string;
}
