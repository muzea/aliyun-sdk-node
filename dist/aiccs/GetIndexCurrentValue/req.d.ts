export interface GetIndexCurrentValueRequest {
    /**
     * 部门ID列表。多个ID以半角逗号（,）分隔。
     * 可调用[GetAllDepartment](~~2717975~~)接口，查看返回参数的**DepartmentId**，即部门ID。
     * > 当该参数不为空时：
     * > - 若GroupIds不为空，则优先以GroupIds参数对应技能组列表查询。
     * > - 若GroupIds为空，则优先以该参数对应部门列表查询。
     * @example `2332****,2334****`
     */
    "DepIds"?: string;
    /**
     * 技能组ID列表。多个ID以半角逗号（,）分隔。
     * 可调用[QuerySkillGroups](~~2717970~~)接口，查看返回参数的**SkillGroupId**，即技能组ID。
     * > 当该参数不为空时，优先以参数对应技能组列表查询。
     * @example `2323****,2324****`
     */
    "GroupIds"?: string;
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * > AICCS实例ID必填。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId"?: string;
}
