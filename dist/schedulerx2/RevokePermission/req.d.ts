export interface RevokePermissionRequest {
    /**
     * 地域ID。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * 命名空间UID，在控制台的命名空间页面中获取。
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffcdf01`
     */
    "Namespace": string;
    /**
     * 特殊第三方才需要填写。
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 应用ID，在控制台的应用管理页面中获取。
     * @example `test.defalutGroup`
     */
    "GroupId": string;
    /**
     * 阿里云账号UID
     * @example `277641081920123456`
     */
    "UserId": string;
}
