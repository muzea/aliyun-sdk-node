export interface CreateApplicationRequest {
    /**
     * 新建应用的名称
     * @example `app1`
     */
    "AppName"?: string;
    /**
     * 应用描述信息
     * @example `This is an application`
     */
    "AppDescription"?: string;
    /**
     * 新建应用的平台类型
     * @example `Java`
     */
    "CategoryName"?: string;
    /**
     * 是否使用共享OSS存储
     * @example `true`
     */
    "UsingSharedStorage"?: boolean;
    "RegionId"?: string;
}
