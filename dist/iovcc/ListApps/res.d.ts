export interface ListAppsResponse {
    /**
     * 请求ID
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 自定义应用对象列表
     */
    Apps: {
        /**
         * 应用名称
         * @example `app_test`
         */
        AppName: string;
        /**
         * 应用标识
         * @example `ZBjeuffe`
         */
        AppKey: string;
        /**
         * 应用运行系统类型。
         * - 0：YunOS
         * - 1：Android
         * - 2：iOS
         * @example `1`
         */
        OsType: number;
        /**
         * 应用包名
         * @example `com.aliyun.test`
         */
        AppPackage: string;
    }[];
}
