export interface QueryVideoTaskInfoRequest {
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId
     * @example `xxxxxx`
     */
    "TenantId": number;
    /**
     * App信息，代表一个业务配置
     */
    "App": {
        /**
         * App ID。在开发者中心-实例管理页面获取对应的appId，[参考文档](https://help.aliyun.com/document_detail/479093.html?spm=a2c4g.2527854.0.0.6f124ecfkSTD3w#6a48daa1ee899)。
         * @example `3d95xx946a`
         */
        AppId: string;
    };
    /**
     * 任务UUID，提交对应视频生成任务时返回的TaskUuid。
     * @example `xxxx-xxxx-xxx`
     */
    "TaskUuid"?: string;
    /**
     * 要检索的视频任务标题，长度<10字符
     * @example `测试`
     */
    "Title"?: string;
    /**
     * 任务类型：
     * - 1:  3D数字人视频合成。
     * - 3:  2D数字人视频合成。
     * @example `1`
     */
    "Type"?: number;
    /**
     * 任务业务状态，已过期和已取消的任务不支持查询：
     * - 1: 等待执行
     * - 2:  执行中
     * - 3:  成功
     * - 4：失败
     * 不传默认查询全部状态
     * @example `3`
     */
    "Status"?: number;
    /**
     * ID排序规则，支持asc-正序（最新数据在后）和desc-倒序（最新数据在前）
     * @example `desc`
     */
    "OrderById"?: string;
    /**
     * 分页，页数，从1开始
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页，每页数量
     * @example `10`
     */
    "PageSize"?: number;
}
