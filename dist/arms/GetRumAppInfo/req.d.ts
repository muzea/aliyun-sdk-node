export interface GetRumAppInfoRequest {
    /**
     * 应用ID。
     * @example `atc889zkcf@d8deedfa9bf****`
     */
    "Pid"?: string;
    /**
     * 应用分组。
     * @example `default`
     */
    "AppGroup"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
