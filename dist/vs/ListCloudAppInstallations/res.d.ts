export interface ListCloudAppInstallationsResponse {
    /**
     * 请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 安装信息列表
     */
    InstallationInfos: {
        /**
         * 应用ID
         * @example `cap-b06b26edfhytbn b94a75ae1a79efc90eb`
         */
        AppId: string;
        /**
         * 应用名
         * @example `com.aaa.bbb`
         */
        AppName: string;
        /**
         * 应用版本
         * @example `1.5.0`
         */
        AppVersion: string;
        /**
         * 云应用服务实例ID
         * @example `render-9f8c57355d224ad7beaf95e145f22111`
         */
        RenderingInstanceId: string;
        /**
         * 云应用安装状态，取值范围：
         * 1. 中间态：install-init、installing
         * 2. 终态：installed、install-failed
         * @example `installed`
         */
        Status: string;
        /**
         * 安装时间
         * @example `2024-05-28T14:48:34+08:00`
         */
        InstallationTime: string;
        /**
         * 状态最新更新时间
         * @example `2024-05-28T14:50:04+08:00`
         */
        UpdateTime: string;
        /**
         * 状态描述信息
         * @example `install success`
         */
        StatusDescription: string;
    }[];
    /**
     * 安装记录总数
     * @example `100`
     */
    TotalCount: number;
    /**
     * 查询列表的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数
     * @example `10`
     */
    PageSize: number;
}
