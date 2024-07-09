export interface GetRumAppsRequest {
    /**
     * 应用ID。
     * @example `b590lhguqs@28f515462******`
     */
    "AppId"?: string;
    /**
     * 应用分组。
     * @example `default`
     */
    "AppGroup"?: string;
    /**
     * 应用名称，仅支持传单个名称。
     * @example `test-app`
     */
    "AppName"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签。
     */
    "Tags"?: {
        /**
         * 标签键。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
