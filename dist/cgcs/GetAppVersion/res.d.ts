export interface GetAppVersionResponse {
    /**
     * 应用版本ID。
     * @example `1432****`
     */
    AppVersionId: string;
    /**
     * 应用版本的创建时间。
     * @example `2022-04-06 02:00:00`
     */
    GmtCreate: string;
    /**
     * 应用最后修改时间。
     * @example `2022-04-06 02:00:00`
     */
    GmtModified: string;
    /**
     * 应用ID。
     * @example `4384****`
     */
    AppId: string;
    /**
     * 应用版本名称。
     * @example `exampleVersion`
     */
    AppVersionName: string;
    /**
     * 文件上传方式。取值：
     * - cloud_file_download：云端离线下载。
     * - local_file_upload：本地文件上传。
     * @example `local_file_upload`
     */
    FileUploadType: string;
    /**
     * 文件地址。
     * @example `https://www.example.com/exampleFile.tar`
     */
    FileAddress: string;
    /**
     * 应用版本状态。取值：
     * - file_uploading：上传中。
     * - file_upload_fail：上传失败。
     * - file_upload_success：上传成功。
     * - app_adapting：应用适配中。
     * - app_adapt_fail：应用适配失败。
     * - app_adapt_success：应用已适配。
     * - app_deploy_success：应用已部署。
     * - app_deleting：应用删除中。
     * - app_deleted：应用已删除。
     * @example `file_uploading`
     */
    AppVersionStatus: string;
    /**
     * 应用版本状态说明，例如：上传失败原因。
     * @example `文件大于上限`
     */
    AppVersionStatusMemo: string;
    /**
     * 应用文件上传完成时间。
     * @example `2022-04-06 02:00:00`
     */
    FileUploadFinishTime: string;
    /**
     * 应用文件大小。
     * 单位：Byte。
     * @example `1024`
     */
    FileSize: number;
    /**
     * 版本最小适配CU个数。
     * @example `0.31`
     */
    ConsumeCu: number;
    /**
     * 请求ID。
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
}
