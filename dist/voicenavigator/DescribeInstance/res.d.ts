export interface DescribeInstanceResponse {
    /**
     * 状态
     * @example `Published`
     */
    Status: string;
    /**
     * 更新时间
     * @example `1683216000000`
     */
    ModifyTime: number;
    /**
     * 描述
     * @example `导航测试实例描述信息`
     */
    Description: string;
    /**
     * 请求id
     * @example `790B5EA3-D251-1666-B1E0-4D1F4B33A592`
     */
    RequestId: string;
    /**
     * 实例id
     * @example `cd6fc91bc13445c2af7f2e3e31418520`
     */
    InstanceId: string;
    /**
     * 实例并发
     * @example `10`
     */
    Concurrency: number;
    /**
     * 适用操作列表
     */
    ApplicableOperations: string[];
    /**
     * 更新者
     * @example `2508711*******`
     */
    ModifyUserName: string;
    /**
     * 实例名称
     * @example `导航测试实例`
     */
    Name: string;
    /**
     * 实例能力类型<br>
     * DEFAULT：全能力<br>
     * VOICE_ONLY：只关注语音能力，不含对话干预
     * @example `VOICE_ONLY`
     */
    AbilityType: string;
    UnionSource: string;
    UnionInstanceId: string;
    NluServiceParamsJson: string;
}
