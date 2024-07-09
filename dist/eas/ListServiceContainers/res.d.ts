export interface ListServiceContainersResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82****`
     */
    RequestId: string;
    /**
     * 服务名称。
     * @example `foo`
     */
    ServiceName: string;
    /**
     * 服务实例的容器列表。
     */
    Containers: any[];
}
