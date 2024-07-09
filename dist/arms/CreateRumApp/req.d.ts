export interface CreateRumAppRequest {
    /**
     * 应用名称。
     * @example `test-app`
     */
    "AppName": string;
    /**
     * 应用类型，Web&H5：web，小程序：miniapp，iOS：ios，Android：android。
     * @example `web`
     */
    "SiteType": string;
    /**
     * 来源，保留字段。
     * @example `arms`
     */
    "Source"?: string;
    /**
     * 应用组。
     * @example `default`
     */
    "AppGroup"?: string;
    /**
     * 应用描述信息。
     * @example `用户体验监控前端`
     */
    "Description"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxyexli2****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表，最多20个。
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `app`
         */
        Key: string;
        /**
         * 标签值。
         * @example `ecs`
         */
        Value: string;
    }[];
    /**
     * Android 应用包名。创建Android应用时必填。
     * @example `com.xxxx.xxxxxx`
     */
    "PackageName"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
