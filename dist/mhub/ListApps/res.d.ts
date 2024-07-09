export interface ListAppsResponse {
    /**
     * 当前账号状态，取值如下：
     * - enabled：开通状态
     * - disabled：禁用状态
     * - inDebt：停机24小时以内（含24小时）
     * -  inDebt24h：停机24小时以上
     * @example `enabled`
     */
    UbsmsStatus: string;
    /**
     * 请求的唯一标识，用于识别一个请求。
     * @example `126D4DDD-05A5-49B1-B18C-39C4A929BFB2`
     */
    RequestId: string;
    /**
     * 应用总数。
     * @example `10`
     */
    Total: number;
    AppInfos: {
        /**
         * 应用的详细信息。
         */
        AppInfo: {
            /**
             * 应用类型，取值范围如下：
             *
             *     1 ：iOS
             *     2 ：Android
             *     8 ：魔笔网页端
             *     9 ：魔笔移动端
             * @example `1`
             */
            Type: number;
            /**
             * 行业ID，取值范围如下：
             *
             *      * 0. 社交
             *      * 1. 摄影与摄像
             *      * 2. 效率
             *      * 3. 生活
             *      * 4. 美食佳饮
             *      * 5. 工具
             *      * 6. 娱乐
             *      * 7. 游戏
             *      * 8. 儿童
             *      * 9. 教育
             *      * 10. 报刊杂志
             *      * 11. 健康健美
             *      * 12. 旅游
             *      * 13. 音乐
             *      * 14. 体育
             *      * 15. 商务
             *      * 16. 新闻
             *      * 17. 财务
             *      * 18. 参考
             *      * 19. 导航
             *      * 20. 医疗
             *      * 21. 图书
             *      * 22. 天气
             *      * 23. 智能物联网
             * @example `1`
             */
            IndustryId: number;
            /**
             * 应用 appkey，接口请求时唯一标识一个应用。
             * @example `123456`
             */
            AppKey: string;
            /**
             * Android 应用包名。
             * @example `com.test.android`
             */
            PackageName: string;
            /**
             * 图片 base64 字符串。
             * @example `图片 base64 字符串`
             */
            EncodedIcon: string;
            /**
             * 应用名。
             * @example `我的应用`
             */
            Name: string;
            /**
             * iOS应用ID。创建iOS应用时必填。
             * @example `com.test.ios`
             */
            BundleId: string;
            /**
             * 是否为只读应用。仅特殊场景使用。
             * @example `false`
             */
            Readonly: boolean;
        }[];
    };
}
