export interface GetCoordinateTicketRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~436773~~)获取无影云桌面支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 协同流ID。来自接口`ApplyCoordinationForMonitoring`返回的`Coid`。
     * @example `co-0sot77uale3****`
     */
    "CoId": string;
    /**
     * 桌面连接任务ID。首次请求不需要，首次请求如果没有返回ticket， 后续请求根据首次返回的taskId填写
     * @example `39cc15e5-6998-4b9f-9b2c-7a4cc3e2****`
     */
    "TaskId"?: string;
    /**
     * 便捷账号名称。管理员侧不需要。
     * @example `Alice`
     */
    "EndUserId"?: string;
    /**
     * 用户类型。
     * @example `TENANT_ADMIN`
     */
    "UserType": string;
}
