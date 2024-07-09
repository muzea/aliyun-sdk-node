export interface UpdateDepartmentRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 部门名称。
     * > 支持更新该参数。
     * @example `部门A`
     */
    "DepartmentName": string;
    /**
     * 部门ID。
     * 可调用[GetAllDepartment](~~2717975~~)接口，查看返回参数的**DepartmentId**，即部门ID。
     * > 不支持更新。
     * @example `12****`
     */
    "DepartmentId": number;
}
