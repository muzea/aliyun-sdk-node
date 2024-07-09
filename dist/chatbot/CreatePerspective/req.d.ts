export interface CreatePerspectiveRequest {
    /**
     * 视角名称，长度不超过50字
     * @example `移动端视角`
     */
    "Name"?: string;
    /**
     * 视角描述
     * @example `用于购物APP的移动端视角`
     */
    "Description"?: string;
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
