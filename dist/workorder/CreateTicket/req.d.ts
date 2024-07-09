export interface CreateTicketRequest {
    /**
     * 工单问题描述, 目前只支持纯文本格式
     * @example `ecs备份失败`
     */
    "Description": string;
    /**
     * 枚举值, 1 代表一般问题, 2 代表紧急问题
     * @example `1`
     */
    "Severity": number;
    /**
     * 问题分类ID, 从ListCategories接口中获取返回值CategoryId
     * @example `53812`
     */
    "CategoryId": string;
    /**
     * 工单标题
     * @example `ecs备份失败`
     */
    "Title"?: string;
    /**
     * 提交账号的阿里云uid，MPK虚商场景需要
     * @example `1289427240739141`
     */
    "CreatorId"?: string;
    /**
     * sdahkjdshga@qq.com
     * @example `163@163.com`
     */
    "Email"?: string;
    /**
     * 附件名称列表，GetAttachmentUploadUrl接口返回的ObjectKey字段
     */
    "FileNameList"?: string[];
    /**
     * 敏感信息
     */
    "SecretInfo"?: {
        /**
         * 敏感信息—文本内容
         * @example `身份证：3310xxxx`
         */
        Content: string;
        /**
         * 敏感信息—附件名称列表
         */
        FileNameList: string[];
    };
}
