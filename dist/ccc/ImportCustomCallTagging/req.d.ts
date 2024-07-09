export interface ImportCustomCallTaggingRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 呼入号码标记文件的OSS对象的ObjectKey。OSS配置的是云呼的客户公共存储空间，您可以通过云呼叫中心的呼入控制页面上传呼入号码标记文件到客户公共存储空间，上传成功后，调用该接口就会从OSS中读取文件内容，然后批量导入。该接口不建议直接调用，建议通过云呼叫中心提供的公有云默认CRM系统操作。
     * @example `temp/ImportCustomCallTagging.xlsx`
     */
    "FilePath": string;
}
