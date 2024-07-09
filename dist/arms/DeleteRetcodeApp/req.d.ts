export interface DeleteRetcodeAppRequest {
    /**
     * 应用主键ID。您可以通过**GetRetcodeAppByPid**接口查询。
     * @example `1231`
     */
    "AppId"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 前端监控应用名称。
     * @example `test-app`
     */
    "AppName"?: string;
    /**
     * 前端监控应用的标识串。
     * @example `aokcdqn3ly@741623b4e91****`
     */
    "Pid": string;
}
