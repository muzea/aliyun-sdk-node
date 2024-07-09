export interface ListInstanceRequest {
    /**
     * 分页-第几页，默认1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页-页面大小，默认10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 按机器人类型筛选
     * @example `scenario_im`
     */
    "RobotType"?: string;
    /**
     * 按机器人名称模糊搜索
     * @example `售前客服`
     */
    "Name"?: string;
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
