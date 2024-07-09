export interface CreateAppResponse {
    /**
     * 请求唯一标识，用于识别一个请求。
     * @example `126D4DDD-05A5-49B1-B18C-39C4A929****`
     */
    RequestId: string;
    /**
     * 应用基本信息。
     */
    AppInfo: {
        /**
         * 应用类型，取值范围如下：
         *
         *     1：iOS
         *     2：Android
         *     8：魔笔网页端
         *     9：魔笔移动端
         * @example `1`
         */
        Type: number;
        /**
         * 应用 appkey，接口请求时唯一标识一个应用。
         * @example `123456`
         */
        AppKey: string;
        /**
         * 应用描述信息。
         * @example `应用描述信息`
         */
        Description: string;
        /**
         * Android 应用包名。
         * @example `com.test.android`
         */
        PackageName: string;
        /**
         * 应用创建UTC时间。
         * @example `2020-12-16T06:25:52Z`
         */
        CreateTime: string;
        /**
         * 应用所属空间ID。
         * @example `123456`
         */
        ProductId: number;
        /**
         * iOS应用ID。
         * @example `com.test.ios`
         */
        BundleId: string;
        /**
         * 应用名称。
         * @example `我的应用`
         */
        Name: string;
        /**
         * 应用修改UTC时间。
         * @example `2020-12-16T06:25:52Z`
         */
        ModifyTime: string;
    };
}
