export interface GetStackDriftDetectionStatusResponse {
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
    /**
     * 资源栈偏差检测时间。
     * @example `2020-02-27T07:47:47`
     */
    DriftDetectionTime: string;
    /**
     * 偏差检测状态原因。
     * @example `Detect stack drift successfully`
     */
    DriftDetectionStatusReason: string;
    /**
     * DRIFTED状态资源数。
     * @example `1`
     */
    DriftedStackResourceCount: number;
    /**
     * 资源栈偏差状态。取值：
     * - DRIFTED：资源栈与预期的模板配置不同，或者已偏离。如果资源栈的一个或多个资源已偏离，则认为资源栈已偏离。
     * - NOT_CHECKED：ROS没有检测资源栈是否与预期的模板配置不同。
     * - IN_SYNC：每个支持偏差检测的资源的当前配置与其预期的模板配置相匹配。不支持偏差检测资源的资源栈也将具有IN_SYNC状态。
     * @example `DRIFTED`
     */
    StackDriftStatus: string;
    /**
     * 偏差检测状态。取值：
     * - DETECTION_COMPLETE：已经对支持偏差检测的资源栈中的所有资源成功完成了资源栈偏差检测。
     * - DETECTION_FAILED：源栈中至少有一个资源未成功完成资源栈偏差检测。
     * - DETECTION_IN_PROGRESS：资源栈偏差检测操作正在进行中。
     * @example `DETECTION_COMPLETE`
     */
    DriftDetectionStatus: string;
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    StackId: string;
    /**
     * 偏差检测ID。
     * @example `a7044f0d-6f2e-4128-a307-4524ef88****`
     */
    DriftDetectionId: string;
}
