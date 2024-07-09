export interface QueryRobotInfoListResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码详见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 机器人的基本信息，JSON格式。参数如下：
     * - **id**：机器人id。
     * - **robotName**：机器人名称。
     * - **robotType**：机器人类型。
     * - **auditStatus**：审核状态。
     * - **gmtCreate**：创建时间。
     * - **gmtModified**：修改时间。
     * - **partnerId**：合作伙伴ID。
     * - **asrId**：ASR模型ID。
     * - **asrType**：ASR类型，包括**公有**和**私有**。
     * - **remark**：备注说明。
     * @example `{["id":1000010920004, "gmtModified":"Thu Mar 21 15:38:55 CST 2019", "auditStatus":"AUDITPASS","gmtCreate":"Thu Mar 21 12:00:51 CST 2019","remark":"测试勿删，测试请通过","partnerId":100000022670001,"asrId":"a9a1d69081fd4266ad788346bf5e1b6c","robotType":"CUSTOM","asrType":"1","robotName":"催收场景5--ssml标记2-RVR-副本"},{"id":1000010920003,"gmtModified":"Thu Mar 21 11:51:10 CST 2019","auditStatus":"AUDITPASS","gmtCreate":"Thu Mar 21 11:44:57 CST 2019","remark":"测试勿删，内部测试请通过","partnerId":100000022670001,"asrId":"a9a1d69081fd4266ad788346bf5e1b6c","robotType":"CUSTOM","asrType":"1","robotName":"催收场景5-ssml标记2-RVR"]}`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `F59AF338-655D-48E8-9471-5EB07692B1CC`
     */
    RequestId: string;
}
