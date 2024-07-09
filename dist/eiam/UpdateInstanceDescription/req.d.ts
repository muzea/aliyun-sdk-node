export interface UpdateInstanceDescriptionRequest {
    /**
     * 需要修改描述信息的实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 您想要更改的实例描述信息。
     * @example `生产环境使用。`
     */
    "Description"?: string;
}
