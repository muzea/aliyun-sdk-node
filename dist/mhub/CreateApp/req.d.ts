export interface CreateAppRequest {
    /**
     * 指定创建应用所属的空间ID。
     * @example `123456`
     */
    "ProductId": string;
    /**
     * 应用名称。该参数长度不超过26个字符，并且不能用_以外的特殊字符。
     * @example `我的应用`
     */
    "Name": string;
    /**
     * 应用类型。取值范围如下：
     *
     *     1：iOS
     *     2：Android
     *     8：魔笔网页端
     *     9：魔笔移动端
     * @example `1`
     */
    "Type"?: number;
    /**
     * iOS应用ID。创建iOS应用时必填。
     * @example `com.test.ios`
     */
    "BundleId"?: string;
    /**
     * Android 应用包名。创建Android应用时必填。
     * @example `com.test.android`
     */
    "PackageName"?: string;
    /**
     * 图片 base64 字符串。
     * @example `图片 base64 字符串`
     */
    "EncodedIcon"?: string;
    /**
     * 应用所属的行业ID，取值范围如下：
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
    "IndustryId"?: string;
}
