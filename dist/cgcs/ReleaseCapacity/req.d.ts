export interface ReleaseCapacityRequest {
    /**
     * 项目ID。
     * @example `d9a8****`
     */
    "ProjectId": string;
    /**
     * 应用ID。
     * @example `13027****`
     */
    "AppId": string;
    /**
     * 区域ID。取值：
     * - huadong
     * - xinan
     * - huanan
     * - huabei
     * - huazhong
     * @example `huadong`
     */
    "DistrictId": string;
    /**
     * 期望释放的会话路数。
     * @example `100`
     */
    "ExpectReleaseSessionCapacity": number;
    /**
     * 版本ID。
     * @example `35067****`
     */
    "AppVersion"?: string;
}
