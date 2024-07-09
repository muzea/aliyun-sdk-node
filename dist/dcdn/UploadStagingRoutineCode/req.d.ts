export interface UploadStagingRoutineCodeRequest {
    /**
     * 边缘函数名, 同一个账号下命名唯一。
     * @example `test`
     */
    "Name": string;
    /**
     * 版本描述。
     * @example `desc`
     */
    "CodeDescription"?: string;
}
