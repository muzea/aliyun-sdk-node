export interface UpdateStandardGroupRequest {
    /**
     * 安全规则集ID。您可调用[ListStandardGroups](~~465940~~)接口获取安全规则集ID。
     * @example `242***`
     */
    "GroupId": number;
    /**
     * 安全规则集名称。
     * @example `poc_test`
     */
    "GroupName": string;
    /**
     * 安全规则集的描述。
     * @example `生产环境测试规则
    `
     */
    "Description": string;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `23****`
     */
    "Tid"?: number;
}
