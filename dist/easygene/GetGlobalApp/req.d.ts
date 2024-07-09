export interface GetGlobalAppRequest {
    /**
     * 查询字段信息
     * @example `AppVersion, AppDescriptorFiles, DescriptorType, DAG, Document, Comment, Alias, NamespaceName, AppScope, AppName, AppDescription, RegionIds, Categories, Toolkit, AppVersions, AppDefaultVersion, AppFee, LastModified, Pinned, Contact, Links, AppType`
     */
    "Attributes"?: string[];
    /**
     * 命名空间
     * @example `sentieon`
     */
    "NamespaceName": string;
    /**
     * 应用名称
     * @example `joint-calling`
     */
    "AppName": string;
    /**
     * 应用版本
     * @example `1.0`
     */
    "AppVersion"?: string;
    /**
     * 地域ID
     * @example `cn-beijing`
     */
    "Location"?: string;
}
