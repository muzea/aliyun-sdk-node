export interface SearchFaqRequest {
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
    /**
     * 关键字
     * @example `搜索标题`
     */
    "Keyword"?: string;
    /**
     * 类目唯一标识
     */
    "CategoryIds"?: number[];
    /**
     * 知识状态：-1-已删除未发布，1-未发布，2-已发布，3-已更新未发布
     * @example `1`
     */
    "Status"?: number;
    /**
     * 搜索范围：1-搜索标题相似问，2-搜索答案，3-搜索全部
     * @example `1`
     */
    "SearchScope"?: number;
    /**
     * 创建人
     * @example `test01`
     */
    "CreateUserName"?: string;
    /**
     * 修改人
     * @example `test01`
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
     * 页码默认1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页数量，默认10，最大100
     * @example `10`
     */
    "PageSize"?: number;
}
