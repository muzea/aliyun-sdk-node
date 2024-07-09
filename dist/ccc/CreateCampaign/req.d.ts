export interface CreateCampaignRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 预测式外呼名单列表，不能与CaseFileKey（从文件导入）同时使用，文件导入和列表导入只能选择一种。
     */
    "CaseList"?: {
        /**
         * 业务ID，客户业务系统标识，用于集成场景。
         * @example `01`
         */
        ReferenceId: string;
        /**
         * 联系人电话号码。
         * @example `1888888888`
         */
        PhoneNumber: string;
        /**
         * 客户自定义变量，格式为JSON对象，对象最多包含10个属性，每个属性的名称和值均由客户自定义。
         * @example `{"name":"customer","客户标签":"tag"}`
         */
        CustomVariables: string;
    }[];
    /**
     * 预测式外呼活动关联的技能组ID。
     * @example `skillgroup@ccc-test`
     */
    "QueueId": string;
    /**
     * 预测式外呼活动名称。
     * @example `test-campaign`
     */
    "Name": string;
    /**
     * 预测式外呼名单文件，是一个OSS对象的Key，通过GetCaseFileUploadUrl接口获取。
     * @example `ccc-test/namelist.csv`
     */
    "CaseFileKey"?: string;
    /**
     * 预测式外呼活动关联的联系流ID。
     * @example `c1f2bc75-422e-43c7-9c9d9d95633a`
     */
    "ContactFlowId": string;
    /**
     * 预测式外呼活动开始时间，格式为Unix时间戳，单位毫秒。
     * @example `1634140800000`
     */
    "StartTime": string;
    /**
     * 预测式外呼活动结束时间，格式为Unix时间戳，单位毫秒。
     * @example `1634313600000`
     */
    "EndTime": string;
    /**
     * 预测式外呼活动的可外呼时段，格式为JSON对象，对象包含两个属性，beginTime和EndTime，例如：[{"beginTime":"00:00:00","endTime":"23:00:00" }]。
     * @example `[{"beginTime":"00:00:00","endTime":"23:00:00" }]`
     */
    "CallableTime": string;
    /**
     * 预测式外呼活动的策略模式。
     * @example `PACING`
     */
    "StrategyType": string;
    /**
     * 预测式外呼活动的策略参数，PID策略下的格式参数示例：{"abandonRate":"5","historicalConnectedRate":"35"}，PACING策略下的格式参数示例：{"ratio":1}。abandonRate表示期望呼损率，historicalConnectedRate表示历史参考接通率，ratio表示固定外呼比例。
     * @example `{"ratio":1}`
     */
    "StrategyParameters": string;
    /**
     * 预测式外呼活动的最大尝试次数，表示当活动的号码呼叫失败时，最多重呼几次。
     * @example `1`
     */
    "MaxAttemptCount": number;
    /**
     * 预测式外呼活动的最小重呼间隔，表示失败重呼时的最小间隔，单位分钟。
     * @example `1`
     */
    "MinAttemptInterval": number;
    /**
     * 是否是模拟活动，用于测试，普通客户无需关心。
     * @example `无`
     */
    "Simulation"?: boolean;
    /**
     * 模拟参数，用于测试，普通客户无需关心。
     * @example `无`
     */
    "SimulationParameters"?: string;
    /**
     * 是否在活动到期前保持执行状态。默认值fasle，当活动的所有联系人都呼叫完成后，活动会自动变为已完成状态；如果为True，当活动的所有联系人都呼叫完成后，活动不会自动变成已完成状态，仍是执行中状态，可以继续像活动中追加联系人，进而继续进行拨打，直到任务到期或手动终止。
     * @example `false`
     */
    "ExecutingUntilTimeout"?: boolean;
}
