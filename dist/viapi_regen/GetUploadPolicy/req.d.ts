export interface GetUploadPolicyRequest {
    /**
     * 服务ID。
     * @example `21`
     */
    "Id": number;
    /**
     * 文件名称。
     * @example `alpha_7101_0.png`
     */
    "FileName": string;
    /**
     * 上传策略类型。取值如下：
     * - `DATASET_UPLOAD_POLICY`：数据集上传策略
     * - ` LABELSET_UPLOAD_POLICY`：标注上传策略
     * - `SERVICE_VERIFY_DATA_UPLOAD_POLICY`：服务校验上传策略
     * @example `SERVICE_VERIFY_DATA_UPLOAD_POLICY`
     */
    "Type": string;
}
