export interface ImportDocumentsRequest {
    /**
     * schema id
     * @example `profile`
     */
    "SchemaId": string;
    /**
     * OSS文件的Key
     * @example `ccc-test/test-file.wav`
     */
    "OssFileKey": string;
    /**
     * 请求ID。
     * @example `7BEEA660-A45A-45E3-98CC-AFC65E715C23`
     */
    "RequestId"?: string;
    /**
     * 实例ID。
     * @example `b0eb2742-f37e-4c67-82d4-25c651c1c450`
     */
    "InstanceId": string;
}
