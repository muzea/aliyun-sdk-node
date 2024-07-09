export interface ListCloudAppsResponse {
    /**
     * 请求ID
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 云应用信息列表
     */
    CloudApps: {
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
         * 应用描述信息
         * @example `demo`
         */
        Description: string;
        /**
         * 应用上传状态，取值范围：
         * 1. Created
         * 2. Doing
         * 3. Success：终态
         * 4. Failed：终态
         * @example `Success`
         */
        Status: string;
        /**
         * 应用上传时间
         * @example `2024-05-28T14:28:14+08:00`
         */
        UploadTime: string;
        /**
         * 状态最新更新时间
         * @example `2024-05-28T14:48:34+08:00`
         */
        UpdateTime: string;
        /**
         * 状态描述信息
         * @example `upload success`
         */
        StatusDescription: string;
    }[];
    /**
     * 匹配的云应用信息总数
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
