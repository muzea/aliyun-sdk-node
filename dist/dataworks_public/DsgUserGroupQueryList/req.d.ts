export interface DsgUserGroupQueryListRequest {
    /**
     * 分页的页码数。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示的条数，最大为100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 用户组名称关键字。平台会根据该关键字模糊匹配，查询相关用户组信息。
     * @example `yun_group`
     */
    "Name"?: string;
    /**
     * 用户组的负责人。
     * @example `user1`
     */
    "Owner"?: string;
    /**
     * 引擎名称。如需查询MaxCompute用户组信息，可配置该参数。
     * @example `dev_project`
     */
    "ProjectName"?: string;
}
