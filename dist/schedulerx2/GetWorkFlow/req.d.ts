export interface GetWorkFlowRequest {
    /**
     * 地域
     * @example `public`
     */
    "RegionId": string;
    /**
     * 命名空间ID
     * @example `4a06d5ea-f576-4326-842c-fb14ea043d8d`
     */
    "Namespace": string;
    /**
     * 命名空间来源
     * @example `source`
     */
    "NamespaceSource"?: string;
    /**
     * 应用分组ID
     * @example `hxm.test`
     */
    "GroupId": string;
    /**
     * 工作流ID
     * @example `1234`
     */
    "WorkflowId": number;
}
