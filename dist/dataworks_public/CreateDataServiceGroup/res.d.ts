export interface CreateDataServiceGroupResponse {
    /**
     * 创建的业务流程ID。
     * @example `ds_12345`
     */
    GroupId: string;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EF****`
     */
    RequestId: string;
}
