export interface CancelVideoTaskRequest {
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId
     * @example `xxxxx`
     */
    "TenantId": number;
    /**
     * 应用开发者信息，代表一个业务配置
     */
    "App": {
        /**
         * App ID。在开发者中心-实例管理页面获取对应的appId，[参考文档](https://help.aliyun.com/document_detail/479093.html?spm=a2c4g.447644.0.0.406f66c95dI2Ee#6a48daa1ee899)。
         * @example `3d95xx946a`
         */
        AppId: string;
    };
    /**
     * 任务UUID，提交对应视频生成任务时返回的TaskUuid。
     * @example `xxxx-xxxx-xxxx`
     */
    "TaskUuid": string;
}
