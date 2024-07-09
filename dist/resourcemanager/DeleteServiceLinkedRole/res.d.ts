export interface DeleteServiceLinkedRoleResponse {
    /**
     * 请求ID。
     * @example `B595E5BF-FF5F-4E7F-B95A-B90FE242FEB6`
     */
    RequestId: string;
    /**
     * 删除任务ID。
     * @example `task/acs-service-role/polardb.aliyuncs.com/AliyunServiceRoleForPolarDB/64c4f9cc-fac2-4692-ae1b-804ae4b9****`
     */
    DeletionTaskId: string;
}
