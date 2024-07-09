export interface DsgDesensPlanQueryListRequest {
    /**
     * 分页的页数。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示的数据条数，最大为100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 二级脱敏场景ID。您可调用[DsgSceneQuerySceneListByName](~~2786322~~)接口获取。
     * @example `123`
     */
    "SceneId": number;
    /**
     * 敏感字段名称。
     * @example `phone`
     */
    "RuleName"?: string;
    /**
     * 脱敏规则的负责人。
     * @example `user1`
     */
    "Owner"?: string;
    /**
     * 脱敏规则的生效状态。取值如下：
     * - 0：失效。
     * - 1：生效。
     * @example `1`
     */
    "Status"?: number;
}
