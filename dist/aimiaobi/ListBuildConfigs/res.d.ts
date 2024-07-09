export interface ListBuildConfigsResponse {
    /**
     * 请求唯一标识
     * @example `DA021073-17CE-5CCF-9FEB-93226C766887`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 错误说明
     * @example `Success`
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
         * 主键ID
         * @example `主键ID，内置配置无该字段`
         */
        Id: number;
        /**
         * 区分政务和传媒,media:传媒,government:政务
         * @example `media`
         */
        Type: string;
        /**
         * 标签key值
         * @example `writingStyle`
         */
        Tag: string;
        /**
         * 标签描述
         * @example `文体`
         */
        TagDescription: string;
        /**
         * 标签可选的值列表
         */
        Keywords: {
            /**
             * 预设标签的KEY
             * @example `新闻评论`
             */
            Key: string;
            /**
             * 预设标签的描述
             * @example `新闻评论`
             */
            Description: string;
        }[];
        /**
         * 创建时间
         * @example `2023-04-11 06:14:07`
         */
        CreateTime: string;
        /**
         * 创建用户
         * @example `1`
         */
        CreateUser: string;
        /**
         * 更新时间
         * @example `2023-04-11 06:14:07
        `
         */
        UpdateTime: string;
        /**
         * 更新用户
         * @example `1`
         */
        UpdateUser: string;
        /**
         * 是否为内置
         * @example `true`
         */
        BuildIn: boolean;
    }[];
}
