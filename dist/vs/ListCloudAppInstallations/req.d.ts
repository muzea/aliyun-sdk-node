export interface ListCloudAppInstallationsRequest {
    /**
     * 云应用ID，对应唯一的应用包
     * @example `cap-b06b26edfhytbn b94a75ae1a79efc90eb`
     */
    "AppId"?: string;
    /**
     * 云应用服务实例ID，用于查询指定实例上安装的云应用
     * @example `render-9f8c57355d224ad7beaf95e145f22111`
     */
    "RenderingInstanceId"?: string;
    /**
     * 应用名
     * @example `com.aaa.bbb`
     */
    "AppName"?: string;
    /**
     * 应用版本
     * @example `1.0`
     */
    "AppVersion"?: string;
    /**
     * 查询列表的页码。起始值为1。
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，取值范围1～100。
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
}
