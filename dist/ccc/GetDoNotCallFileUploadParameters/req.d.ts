export interface GetDoNotCallFileUploadParametersRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 禁止外呼号码文件的名称。
     * @example `blacklist.xlsx`
     */
    "FileName": string;
}
