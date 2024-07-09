export interface ListSkillGroupRequest {
    /**
     * 客户请求唯一id，用于幂等校验，可以用uuid生成
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 技能组渠道类型,有以下枚举值：
     * 0：返回所有技能组
     * 1：热线技能组
     * 2：在线技能组
     * 3：在线+热线技能组
     * 4：工单技能组
     * 5：热线+工单节能组
     * 6：在线+工单技能组
     * 7：在线+热线+工单技能组
     * @example `2`
     */
    "ChannelType"?: number;
}
