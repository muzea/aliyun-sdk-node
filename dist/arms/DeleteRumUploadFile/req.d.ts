export interface DeleteRumUploadFileRequest {
    /**
     * 应用ID。
     * @example `atc889zkcf@d8deedfa9bf****`
     */
    "Pid"?: string;
    /**
     * 文件版本号。
     * @example `1.0.0`
     */
    "VersionId"?: string;
    /**
     * 文件唯一ID。
     * @example `MS4wLjAtbWFpbi4wZjM0NzRlOSxxxxxx`
     */
    "Uuid"?: string;
    /**
     * 文件名，带扩展名。
     * @example `test.js.map`
     */
    "FileName"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
