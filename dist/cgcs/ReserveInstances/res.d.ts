export interface ReserveInstancesResponse {
    /**
     * 请求 ID
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
    /**
     * 预定成功返回的云渲染实例ID列表。
     */
    InstanceIds: string[];
}
