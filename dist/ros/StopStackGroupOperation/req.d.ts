export interface StopStackGroupOperationRequest {
    /**
     * 资源栈所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 操作ID。
     * 您可以调用[ListStackGroupOperations](~~151342~~)获取操作ID。
     * @example `6da106ca-1784-4a6f-a7e1-e723863d****`
     */
    "OperationId": string;
}
