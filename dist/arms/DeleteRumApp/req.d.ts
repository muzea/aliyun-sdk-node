export interface DeleteRumAppRequest {
    /**
     * 应用ID。
     * @example `b590lhguqs@28f515462******`
     */
    "AppId": string;
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
