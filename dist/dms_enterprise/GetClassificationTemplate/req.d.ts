export interface GetClassificationTemplateRequest {
    /**
     * 实例ID。可调用[ListInstances](~~141936~~)或[GetInstance](~~141567~~)接口获取该参数的值。
     * @example `169****`
     */
    "InstanceId": number;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `23***`
     */
    "Tid"?: number;
}
