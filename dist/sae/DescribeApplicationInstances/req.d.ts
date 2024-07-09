export interface DescribeApplicationInstancesRequest {
    /**
     * 应用ID。
     * @example `d700e680-aa4d-4ec1-afc2-6566b5ff****`
     */
    "AppId": string;
    /**
     * 应用分组ID。需要调用[DescribeApplicationGroups](~~126249~~)接口获取。
     * @example `b2a8a925-477a-4ed7-b825-d5e22500****`
     */
    "GroupId": string;
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时设置的每页行数。默认为**10**，取值范围\(0,1000000000)。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 根据应用实例运行状态对其进行排序。如果状态相同，则按照实例ID排序。取值说明如下：
     * - **true**：按倒序排序。
     * - **false**：按正序排序。
     * 实例正序排列如下：
     * 1. **Error**：实例启动过程中出错。
     * 2. **CrashLoopBackOff**：容器无法启动，在启动过程中出错，重启后又出错。
     * 3. **ErrImagePull**：拉取实例中的容器镜像出错。
     * 4. **ImagePullBackOff**：无法获取容器镜像。
     * 5. **Pending**：实例等待调度中。
     * 6. **Unknown**：未知异常。
     * 7. **Terminating**：终止实例接入中。
     * 8. **NotFound**：无法找到实例。
     * 9. **PodInitializing**：实例初始化中。
     * 10. **Init:0/1**：实例初始化。
     * 11. **Running**：实例运行中。
     * @example `true`
     */
    "Reverse"?: boolean;
}
