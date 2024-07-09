export interface GetUserUploadFileJobRequest {
    /**
     * 上传附件任务JobKey，您可以通过调用[CreateUploadFileJob](~~206059~~)、[CreateUploadOSSFileJob](~~206060~~)接口获取该参数。
     * @example `65254a49100e`
     */
    "JobKey": string;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `-1`
     */
    "Tid"?: number;
}
