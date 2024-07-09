export interface GrantPermissionRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 命名空间UID
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffcdf01`
     */
    "Namespace": string;
    /**
     * 特殊第三方才需要填写。
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 应用分组ID
     * @example `test.defaultGroup`
     */
    "GroupId": string;
    /**
     * 用户ID
     * @example `277641081920123456`
     */
    "UserId": string;
    /**
     * 用户名
     * @example `lilei`
     */
    "UserName": string;
    /**
     * 是否允许grantoption。取值如下：-**true**：允许。-**false**：不允许。
     * @example `false`
     */
    "GrantOption"?: boolean;
}
