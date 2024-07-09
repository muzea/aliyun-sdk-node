export interface ListAccessPagesResponse {
    /**
     * 请求Id。
     * @example `AF8361BD-5ECB-139A-B019-2E0350CC****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误消息。
     * @example `InternalError`
     */
    Message: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 访问页面列表集合。
     * 数据是数组结构。
     */
    Data: {
        /**
         * 访问页面的Id。
         * @example `a-062wec3cwmayw****`
         */
        AccessPageId: string;
        /**
         * 访问页面的状态。
         * - 0 : 上线
         * - 1 :  维护
         * - 2 : 创建中
         * - 3 :  创建失败
         * @example `1`
         */
        AccessPageState: string;
        /**
         * 访问页面的名字。
         * @example `notepad_test`
         */
        AccessPageName: string;
        /**
         * 项目Id。
         * @example `p-062wec3cwmayu****`
         */
        ProjectId: string;
        /**
         * 项目的名字。
         * @example `notepad_demo`
         */
        ProjectName: string;
        /**
         * 内容的Id。
         * @example `c-05to6wm3w5d53****`
         */
        ContentId: string;
        /**
         * 内容的名字。
         * @example `notepad测试`
         */
        ContentName: string;
        /**
         * 访问页面的Url链接。
         * @example `id=a-062wec3cwmayw****&token=9E9A62937B0E41F4AEFE5EC9B238156CCDFB682954003AEE940A05FB2568****`
         */
        AccessUrl: string;
        /**
         * 访问页面Url链接的过期时间。
         * @example `2023-11-23T08:48:15.000+00:00`
         */
        UrlExpireTime: string;
        /**
         * 访问页面的访问模式（暂未启用）。
         * @example `暂未启用`
         */
        AccessMode: string;
        /**
         * 访问页面的创建时间。
         * @example `2023-11-16T08:48:15.000+00:00`
         */
        GmtCreate: string;
        /**
         * 有效时间单位的可选项。
         * - Month
         * - Minute
         * - Hour
         * - Day
         * @example `Hour`
         */
        Unit: string;
        /**
         * 访问页面Url链接的有效时间。
         * @example `168`
         */
        EffectTime: number;
    }[];
    /**
     * 当前用户的访问页面总数。
     * @example `22`
     */
    Count: string;
    /**
     * 返回数据每页的数量。
     * @example `20`
     */
    PageSize: string;
    /**
     * 返回数据的页数。
     * @example `1`
     */
    PageNumber: string;
}
