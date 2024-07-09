export interface ListApplicationsRequest {
    /**
     * 当前页数。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时获取的每页数量。取值范围\[0,10000]。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 应用名称。
     * @example `demo-app`
     */
    "AppName"?: string;
    /**
     * 命名空间ID。
     * @example `cn-beijing:demo`
     */
    "NamespaceId"?: string;
    /**
     * 标签键值对。取值说明如下：
     * - **key**：标签键，长度范围\[1,128]。
     * - **value**：标签值，长度范围\[1,128]。
     * 区分大小写。如果指定多个标签，则会为指定资源同时创建并绑定多个标签。同一个资源上的同一个标签键只能对应一个标签值。如果您尝试添加已有标签键，则对应的标签值会更新为新值。
     * 不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
     * @example `[{"key":"key","value":"value"}]`
     */
    "Tags"?: string;
    /**
     * 对应用进行排序。取值说明如下：
     * - **runnings**：按照当前实例数进行排序。
     * - **instances**：按照目标实例数进行排序。
     * @example `runnings`
     */
    "OrderBy"?: string;
    /**
     * 根据应用实例运行状态对其进行排序。如果状态相同，则按照实例ID排序。取值说明如下：
     *   - **true**：按升序排序。表示根据启动实例的步骤来排列，例如实例最终想要变更为运行状态，需先经过启动容器、拉取镜像、初始化实例等步骤。
     *   - **false**：按降序排序。
     * 实例升序排列如下：
     * 1. **Error**：实例启动过程中出错。
     * 2. **CrashLoopBackOff**：容器无法启动，在启动过程中出错，重启后又出错。
     * 3. **ErrImagePull**：拉取实例中的容器镜像出错。
     * 4. **ImagePullBackOff**：无法获取容器镜像。
     * 5. **Pending**：实例等待调度中。
     * 6. **Unknown**：未知异常。
     * 7. **Terminating**：实例终止接入中。
     * 8. **NotFound**：无法找到实例。
     * 9. **PodInitializing**：实例初始化中。
     * 10. **Init:0/1**：实例初始化。
     * 11. **Running**：实例运行中。
     * @example `true`
     */
    "Reverse"?: boolean;
    /**
     * 设置筛选应用的维度。取值说明如下：
     * - **appName**：应用名称。
     * - **appIds**：应用ID。
     * - **slbIps**：SLB IP地址。
     * - **instanceIps**：实例IP地址。
     * @example `appName`
     */
    "FieldType"?: string;
    /**
     * 输入目标应用的应用名称、应用ID、SLB IP地址或实例IP地址。
     * @example `demo-app`
     */
    "FieldValue"?: string;
    /**
     * SAE应用类型
     * - micro_service
     * - web
     * - job
     * @example `micro_service`
     */
    "AppSource"?: string;
}
