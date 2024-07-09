export interface UpdateRumFileStatusRequest {
    /**
     * 应用ID。
     * @example `atc8xxxx
    cf@d8deedfa9bf****`
     */
    "Pid"?: string;
    /**
     * 文件版本号。
     * @example `1.0.0`
     */
    "VersionId"?: string;
    /**
     * 文件唯一ID，不传系统将自动为您设置一个UUID。
     * @example `MS4wLjAtbWFpbi4wZjM0NzRlOSxxxxxx`
     */
    "Uuid"?: string;
    /**
     * 文件名称。
     * @example `test.js.map`
     */
    "FileName"?: string;
    /**
     * 文件大小，单位：字节。
     * @example `20`
     */
    "Size"?: string;
    /**
     * 文件状态，SUCCESS：成功，INIT：初始化。
     * @example `SUCCESS`
     */
    "Status"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
