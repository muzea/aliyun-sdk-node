export interface CreateSkillGroupRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的**实例管理**中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 技能组名称。
     * @example `在线自动化技能组`
     */
    "SkillGroupName": string;
    /**
     * 技能组描述。
     * @example `在线自动化技能组`
     */
    "Description"?: string;
    /**
     * 技能组对外显示名。
     * @example `在线自动化技能组`
     */
    "DisplayName"?: string;
    /**
     * 技能组类型。取值：
     * - **1**：热线。
     * - **2**：在线。
     * - **3**：工单。
     * @example `2`
     */
    "ChannelType": number;
    /**
     * 客户请求唯一ID。用于幂等校验，可以用UUID生成。
     * @example `46c1341e-2648-447a-****-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * 部门ID。
     * @example `123`
     */
    "DepartmentId"?: number;
}
