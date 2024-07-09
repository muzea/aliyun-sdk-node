export interface GetConnectionTicketResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 任务状态。
     * @example `Running`
     */
    TaskStatus: string;
    /**
     * 任务ID。
     * @example `f3d1b31c-605e-4d04-a896****`
     */
    TaskId: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    BizRegionId: string;
    /**
     * 连接云应用的凭证。
     * > 非首次调用时显示此参数。
     * @example `DQpbRGVza3RvcF0NCkZvcmNlVGxzVHlwZT0xDQpHV1Rva2VuUGFydDE9MDAva09ROW1FUTU3dU****`
     */
    Ticket: string;
    /**
     * 交付组ID。
     * @example `aig-53fvrq1oan****`
     */
    AppInstanceGroupId: string;
    /**
     * 持久会话ID。
     * @example `p-0bxls9m3cl7s****`
     */
    AppInstancePersistentId: string;
    /**
     * 应用实例ID。
     * @example `ai-7ybdeiyoeh5e****`
     */
    AppInstanceId: string;
    /**
     * 操作系统类型。
     * @example `Windows`
     */
    OsType: string;
    /**
     * 租户ID（阿里云账号UID）。
     * @example `148871678899****`
     */
    TenantId: number;
}
