export interface QueryProductInfoResponse {
    /**
     * 查询请求的ID。
     * @example `126D4DDD-05A5-49B1-B18C-39C4A929BFB2`
     */
    RequestId: string;
    /**
     * 项目的详细信息。
     */
    ProductInfo: {
        /**
         * icon图片的base64字符串。
         * @example `icon图片base64字符串`
         */
        EncodedIcon: string;
        /**
         *   * 0. 社交
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
         * 项目的名称。
         * @example `我的项目`
         */
        Name: string;
        /**
         * 标识项目是否只读。
         * > 该字段用于特定场景，如无需要可忽略。
         * @example `false`
         */
        Readonly: boolean;
        /**
         * icon图片的名称。
         * @example `icon图片名称`
         */
        IconName: string;
    };
}
