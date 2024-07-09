export interface ListProductsResponse {
    /**
     * 当前账号状态，返回值说明如下：
     *
     * - enabled：开通状态
     * - disabled：禁用状态
     * - inDebt：停机24小时以内（含24小时）
     * - inDebt24h：停机24小时以上
     * @example `enabled`
     */
    UbsmsStatus: string;
    /**
     * 请求的ID。
     * @example `126D4DDD-05A5-49B1-B18C-39C4A929BFB2`
     */
    RequestId: string;
    /**
     * 查询结果总数。
     * @example `10`
     */
    Total: number;
    ProductInfos: {
        /**
         * 项目的概要信息。
         */
        ProductInfo: {
            /**
             * 行业ID，返回值说明如下：
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
             * 项目下属应用的平台，包含Android和iOS两种类型。
             * @example `iOS`
             */
            Platforms: string;
            /**
             * 项目的创建时间。UTC格式表达。
             * @example `2020-12-16T06:25:52Z`
             */
            CreateTime: string;
            /**
             * icon图片的base64字符串。
             * @example `图片 base64`
             */
            EncodedIcon: string;
            /**
             * 项目的ID。
             * @example `1234`
             */
            ProductId: number;
            /**
             * 项目的名称。
             * @example `我的项目`
             */
            Name: string;
            /**
             * 标识项目是否为只读状态。
             * @example `false`
             */
            Readonly: boolean;
            /**
             * 简要描述项目信息。
             * @example `xxxx`
             */
            Description: string;
        }[];
    };
}
