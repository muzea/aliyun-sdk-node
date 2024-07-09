export interface CancelStackOperationRequest {
    /**
     * 资源栈ID。
     * @example `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`
     */
    "StackId": string;
    /**
     * 资源栈所属的地域ID。
     * 您可以调用[DescribeRegions](~~131035~~)接口查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 取消类型。取值：
     * - Quick：相对较快地取消资源栈操作。停止新的调度，并在相对适合的时机停止运行中的资源。使用此类型可能导致资源状态不正确，影响后续资源栈操作。
     * - Safe（默认值）：相对安全地取消资源栈操作。停止新的调度，并且等待运行中的资源结束运行。
     * @example `Safe`
     */
    "CancelType"?: string;
    /**
     * 允许取消的资源栈操作。
     */
    "AllowedStackOperations"?: string[];
}
