export interface ListHotNewsWithTypeResponse {
    /**
     * 请求唯一标识
     * @example `3f7045e099474ba28ceca1b4eb6d6e21`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `DataNotExists`
     */
    Code: string;
    /**
     * 错误说明
     * @example `数据不存在`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 新闻类别。society: 社会时事，person: 人物新闻，government: 党政时事
         * @example `society`
         */
        NewsType: string;
        /**
         * 新闻类别名称
         * @example `社会时事`
         */
        NewsTypeName: string;
        /**
         * 新闻列表
         */
        News: {
            /**
             * 搜索源
             * @example `新浪热榜`
             */
            SearchSource: string;
            /**
             * 搜索源名称
             * @example `新浪热榜`
             */
            SearchSourceName: string;
            /**
             * 发布时间
             * @example `2023-04-11 06:14:07`
             */
            PubTime: string;
            /**
             * 来源
             * @example `新浪新闻综合`
             */
            Source: string;
            /**
             * 标签
             * @example `社会`
             */
            Tag: string;
            /**
             * 标题
             * @example `新闻标题`
             */
            Title: string;
            /**
             * 内容
             * @example `新闻内容`
             */
            Content: string;
            /**
             * 作者
             * @example `作者名称`
             */
            Author: string;
            /**
             * 文章URL
             * @example `http://xxxxx/xxx`
             */
            Url: string;
            /**
             * 文章摘要
             * @example `摘要`
             */
            Summary: string;
            /**
             * 内部文档唯一标识
             * @example `3f7045e099474ba28ceca1b4eb6d6e21`
             */
            DocUuid: string;
            /**
             * 系统更新时间
             * @example `2023-10-14 14:30:00`
             */
            UpdateTime: string;
            /**
             * 图片地址
             */
            ImageUrls: string[];
        }[];
        /**
         * 总页数
         * @example `77`
         */
        TotalPages: number;
    }[];
}
