export interface ListCategoriesRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 类目类别。
     * @example `Ticket`
     */
    "Type"?: string;
    /**
     * 工单类目ID。指定类目ID，返回对应ID的子类目信息，不指定返回实例下类目的信息。
     * @example `43c2671b-***-***-86d0-6bd187905cc8`
     */
    "CategoryId"?: string;
}
