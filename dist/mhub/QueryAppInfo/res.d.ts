export interface QueryAppInfoResponse {
    /**
     * 查询请求的ID。
     * @example `126D4DDD-05A5-49B1-B18C-39C4A929BFB2`
     */
    RequestId: string;
    /**
     * 应用的基本信息。
     */
    AppInfo: {
        /**
         * 应用状态，取值说明：
         * 0： 正常
         * -1：普通删除
         * -2：彻底删除。
         * @example `0`
         */
        Status: number;
        /**
         * 应用类型，取值说明：
         * 1：iOS
         * 2：Android
         * 8：魔笔网页端
         * 9：魔笔移动端
         * @example `1`
         */
        Type: number;
        /**
         * 推送开发者证书过期时间。UTC格式表达。
         * @example `2020-12-16T06:25:52Z`
         */
        CertDevelopExpiration: string;
        /**
         * 行业ID，取值说明：
         *
         * - 0：社交
         * - 1：摄影与摄像
         * - 2：效率
         * - 3：生活
         * - 4：美食佳饮
         * - 5：工具
         * - 6：娱乐
         * - 7：游戏
         * - 8：儿童
         * - 9：教育
         * - 10：报刊杂志
         * - 11：健康健美
         * - 12：旅游
         * - 13：音乐
         * - 14：体育
         * - 15：商务
         * - 16：新闻
         * - 17：财务
         * - 18：参考
         * - 19：导航
         * - 20：医疗
         * - 21：图书
         * - 22：天气
         * - 23：智能物联网
         * @example `1`
         */
        IndustryId: number;
        /**
         * Android应用的包名。
         * @example `com.test.android`
         */
        PackageName: string;
        /**
         * 应用创建时间。UTC格式表达。
         * @example `2020-12-16T06:25:52Z`
         */
        CreateTime: string;
        /**
         * 标识应用是否为只读状态。
         * > 该字段用于特定场景，如无需要可忽略。
         * @example `false`
         */
        Readonly: boolean;
        /**
         * 应用的名称。
         * @example `我的应用`
         */
        AppName: string;
        /**
         * 推送生产证书过期时间。UTC格式表达。
         * @example `2020-12-16T06:25:52Z`
         */
        CertProductExpiration: string;
        /**
         * 应用的AppKey，用于唯一标识应用。
         * @example `123456`
         */
        AppKey: string;
        /**
         * 标识推送配置开发者推送证书是否可用。
         * @example `false`
         */
        CertDevelopAvail: boolean;
        /**
         * icon图片的base64字符串。
         * @example `icon图片base64字符串`
         */
        EncodedIcon: string;
        /**
         * 应用所属工作空间的ID。
         * @example `1234`
         */
        ProductId: number;
        /**
         * iOS应用的BundleId。
         * @example `com.test.ios`
         */
        BundleId: string;
        /**
         * 推送配置生产推送证书是否可用。
         * @example `false`
         */
        CertProductAvail: boolean;
    };
}
