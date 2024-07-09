export interface GetConfigNumListRequest {
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 部门ID。
     * @example `12345`
     */
    "DepartmentId"?: number;
    /**
     * 坐席账号名称。实例内唯一（登录名）。
     * @example `123@123.com`
     */
    "AccountName"?: string;
}
