export interface CreateTaskOrderRequest {
    /**
     * 主群关联Id
     * @example `cid+lUpHxTIXt7DYqJDcpVxlA==`
     */
    "OpenGroupId": string;
    /**
     * 重要性描述
     * @example `重要性说明原因`
     */
    "ImportantDescription"?: string;
    /**
     * 是否紧急
     * @example `normal或者hurry`
     */
    "IsImportant": string;
    /**
     * 问题分类名称
     * @example `云服务器 ECS-ECS`
     */
    "ProductTypeName"?: string;
    /**
     * 建单人：固定值
     * @example `123`
     */
    "CustomerUserId"?: string;
    /**
     * 建单人姓名：快手客户
     * @example `小二`
     */
    "CustomerRealName"?: string;
    /**
     * taskTitle
     * @example `建单标题`
     */
    "TaskTitle": string;
    /**
     * productType
     * @example `3270`
     */
    "ProductType": string;
}
