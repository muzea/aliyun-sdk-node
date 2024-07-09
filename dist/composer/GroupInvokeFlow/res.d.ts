export interface GroupInvokeFlowResponse {
    /**
     * 本次分组执行的状态：
     * - New：请求已经创建，待运行
     * - Started：已经开始运行
     * - Canceled：已经取消
     * - Failed：执行失败
     * - Completed：分组内所有执行已经完成
     * - Unknown：执行状态不确定，常见于系统错误
     * - TimedOut：执行超时
     * - Paused：执行被暂停
     * @example `Completed`
     */
    Status: string;
    /**
     * 本次运行的唯一标识符
     * @example `7bdbdb58-f028-4155-915e-f21e1f8fc48a`
     */
    GroupInvocationId: string;
    /**
     * 请求ID
     * @example `4F06F96E-D1F8-54ED-9611-4F621AD899B5`
     */
    RequestId: string;
    /**
     * 当前待运行的执行数
     * @example `10`
     */
    CurrentCount: number;
    /**
     * 是否运行成功。
     * - **true**：工作流已经被触发
     * - **false**：触发失败
     * > 如果需要查询工作流运行结果，请使用**GetInvocationLog**查询运行结果。
     * @example `true`
     */
    Success: boolean;
}
