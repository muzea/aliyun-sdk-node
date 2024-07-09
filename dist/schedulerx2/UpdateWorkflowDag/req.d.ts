export interface UpdateWorkflowDagRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 命名空间ID，在控制台的命名空间页面中获取。
     * @example `adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    "Namespace": string;
    /**
     * 特殊第三方才需要填写
     * @example `schedulerx`
     */
    "NamespaceSource"?: string;
    /**
     * 应用分组ID，在控制台的应用管理页面中获取
     * @example `testSchedulerx.defaultGroup`
     */
    "GroupId": string;
    /**
     * 工作流ID
     * @example `123`
     */
    "WorkflowId": string;
    /**
     * 工作流DAG信息，包括了Node和Edge的信息，json格式
     * @example `{"nodes":[{"id":2300691},{"id":10518089},{"id":1758851}],"edges":[{"source":10518089,"target":1758851},{"source":10518089,"target":2300691}]}`
     */
    "DagJson": string;
}
