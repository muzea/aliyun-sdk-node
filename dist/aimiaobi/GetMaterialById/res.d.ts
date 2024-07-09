export interface GetMaterialByIdResponse {
    /**
     * 请求唯一标识
     * @example `3f7045e099474ba28ceca1b4eb6d6e21`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `false`
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
         * 主键
         * @example `32`
         */
        Id: number;
        /**
         * 文档类型，pdf、word、url、image
         * @example `pdf`
         */
        DocType: string;
        /**
         * 文档标题
         * @example `文档标题`
         */
        Title: string;
        /**
         * 文档摘要
         * @example `文档摘要`
         */
        Summary: string;
        /**
         * 作者
         * @example `文档作者`
         */
        Author: string;
        /**
         * 发布时间
         * @example `2023-04-11 06:14:07
        `
         */
        PubTime: string;
        /**
         * 文档标签用于分类等、不同keyword之间逗号分割
         */
        DocKeywords: string[];
        /**
         * 内部文档保存的URL
         * @example `https://www.example.com`
         */
        Url: string;
        /**
         * 临时的对外公开的URL
         * @example `https://www.example.com
        `
         */
        PublicUrl: string;
        /**
         * 外部客户上传的URL，仅用作记录保存
         * @example `https://www.example.com
        `
         */
        ExternalUrl: string;
        /**
         * 文档来源，user_upload、search、viewpoint
         * @example `user_upload`
         */
        SrcFrom: string;
        /**
         * 解析后的文本内容，对于图片来说为空
         * @example `文本内容`
         */
        TextContent: string;
        /**
         * 网页内容
         * @example `网页内容`
         */
        HtmlContent: string;
        /**
         * 公开属性，按位存储，第一位表示是否在业务空间内共享、第二位表示是否在租户内共享，第三位表示在系统范围内共享
         * @example `1`
         */
        ShareAttr: number;
        /**
         * 创建时间
         * @example `2023-03-21 11:34:19`
         */
        CreateTime: string;
        /**
         * 修改时间
         * @example `2022-04-08 19:33:01`
         */
        UpdateTime: string;
        /**
         * 创建用户ID
         * @example `1`
         */
        CreateUser: string;
        /**
         * 修改用户ID
         * @example `1`
         */
        UpdateUser: string;
        /**
         * 图片文档类型的Base64缩略图
         * @example `Base64编码的缩略图`
         */
        ThumbnailInBase64: string;
    };
}
