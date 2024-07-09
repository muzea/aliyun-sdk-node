export interface QuerySkillGroupsRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的<b>实例管理</b>中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 当前页。取值大于**0**，默认值：**1**。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 每页大小。取值大于**0**，默认值：**20**。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 客户请求唯一ID。用于幂等校验，可以用UUID生成。
     * @example `46c1341e-2648-447a-****-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * 技能组渠道类型。取值：
     * - **0**：返回所有技能组。
     * - **1**：热线技能组。
     * - **2**：在线技能组。
     * - **3**：在线+热线技能组。
     * - **4**：工单技能组。
     * - **5**：热线+工单节能组。
     * - **6**：在线+工单技能组。
     * - **7**：在线+热线+工单技能组。
     * @example `2`
     */
    "ChannelType"?: number;
    /**
     * 部门ID。
     * @example `1023****`
     */
    "DepartmentId"?: number;
}
