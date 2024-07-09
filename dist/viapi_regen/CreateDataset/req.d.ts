export interface CreateDatasetRequest {
    /**
     * 工作空间ID。
     * @example `63`
     */
    "WorkspaceId": number;
    /**
     * 数据集名称。
     * @example `test2`
     */
    "Name": string;
    /**
     * 数据集描述。
     * @example `test2`
     */
    "Description"?: string;
    /**
     * 数据集归属类型。取值如下：
     * - ALIYUN： 用户选择自己本地的文件上传
     * - USER：用户选择自己OSS的数据上传
     * @example `ALIYUN`
     */
    "Type": string;
}
