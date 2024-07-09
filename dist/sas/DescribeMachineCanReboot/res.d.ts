export interface DescribeMachineCanRebootResponse {
    /**
     * 当前是否能够重启。取值：
     * - **true** 可以重启
     * - **false** 不能重启
     * @example `true`
     */
    CanReboot: boolean;
    /**
     * 本次请求的ID。
     * @example `79CFF74D-E967-5407-8A78-EE03B925FDAA`
     */
    RequestId: string;
}
