export interface GetRumUploadFilesRequest {
    /**
     * 文件类型，source-map：SourceMap文件，mapping：安卓符号表文件，dsym：iOS的dSYM文件。
     * @example `source-map`
     */
    "AppType"?: string;
    /**
     * 应用ID。
     * @example `aoxxxxxly@741623b4e91****`
     */
    "Pid"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
