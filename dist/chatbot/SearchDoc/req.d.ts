export interface SearchDocRequest {
    /**
     * 业务空间key,不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
    /**
     * 关键字
     * @example `搜索关键字`
     */
    "Keyword"?: string;
    /**
     * 类目ID列表
     */
    "CategoryIds"?: number[];
    /**
     * 任务状态
     * -1 排队中
     * 0 成功
     * 1 解析中
     * 2 处理中
     * 3 处理失败
     * @example `0`
     */
    "ProcessStatus"?: number;
    /**
     * 编辑状态：
     * 1   未发布
     * 2   已发布
     * 3   已更新未发布
     * @example `1`
     */
    "Status"?: number;
    /**
     * 搜索范围
     * 1  搜索标题
     * 2  搜索内容
     * @example `1`
     */
    "SearchScope"?: number;
    /**
     * 创建人名称
     * @example `张三`
     */
    "CreateUserName"?: string;
    /**
     * 修改人名称
     * @example `李四`
     */
    "ModifyUserName"?: string;
    /**
     * 创建开始时间
     * @example `2022-04-02T03:09:30Z`
     */
    "CreateTimeBegin"?: string;
    /**
     * 创建结束时间
     * @example `2022-05-02T03:09:30Z`
     */
    "CreateTimeEnd"?: string;
    /**
     * 修改开始时间
     * @example `2023-04-02T03:09:30Z`
     */
    "ModifyTimeBegin"?: string;
    /**
     * 修改结束时间
     * @example `2023-05-02T03:09:30Z`
     */
    "ModifyTimeEnd"?: string;
    /**
     * 生效开始时间
     * @example `2022-04-02T03:09:30Z`
     */
    "StartTimeBegin"?: string;
    /**
     * 生效结束时间
     * @example `2022-04-03T03:09:30Z`
     */
    "StartTimeEnd"?: string;
    /**
     * 失效开始时间
     * @example `2023-04-02T03:09:30Z`
     */
    "EndTimeBegin"?: string;
    /**
     * 失效结束时间
     * @example `2023-05-02T03:09:30Z`
     */
    "EndTimeEnd"?: string;
    /**
     * 分⻚-第⼏⻚
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数量
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 标签ID列表，多个标签时，采用“并集”逻辑进行筛选
     */
    "TagIds"?: number[];
}
