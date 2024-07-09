export interface CreateRumUploadFileUrlRequest {
    /**
     * 应用ID。
     * @example `iioe7jcnuk@582846f37******`
     */
    "Pid"?: string;
    /**
     * 文件版本号。
     * @example `1.0.0`
     */
    "VersionId"?: string;
    /**
     * 文件唯一ID。
     * @example `125bdb39-a415-4503-bd96-e293925fc64c`
     */
    "Uuid"?: string;
    /**
     * 文件名称
     * @example `test.js.map`
     */
    "FileName"?: string;
    /**
     * 文件类型类型，可传"application/zip", "text/plain", 或空字符串。
     * @example `text/plain`
     */
    "ContentType"?: string;
    /**
     * 应用名称。
     * @example `test-app`
     */
    "AppName"?: string;
    /**
     * 文件类型，source-map：SourceMap文件，mapping：安卓符号表文件，dsym：iOS的dSYM文件
     * @example `source-map`
     */
    "SourcemapType"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
