export interface GetJMeterSceneRunningDataResponse {
    /**
     * 错误提示信息，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `A8E16480-15C1-555A-922F-B736A005E52D`
     */
    RequestId: string;
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 文档链接。
     * @example `空`
     */
    DocumentUrl: string;
    /**
     * 运行中的数据。
     */
    RunningData: {
        /**
         * 场景ID。
         * @example `DYYPZIH`
         */
        SceneId: string;
        /**
         * 压测流程的失败信息
         * @example `引擎租用失败`
         */
        ErrorMessage: string;
        /**
         * 压测任务id，也即报告id
         * @example `DYYPLDKS`
         */
        ReportId: string;
        /**
         * 压测流程是否出错
         * @example `false`
         */
        HasError: boolean;
        /**
         * 场景名称。
         * @example `test`
         */
        SceneName: string;
        /**
         * 压测计划持续时间，单位为s。
         * @example `600`
         */
        HoldFor: number;
        /**
         * 压测引擎数量。
         * @example `2`
         */
        AgentCount: number;
        /**
         * 压测引擎列表。
         */
        AgentIdList: string[];
        /**
         * 并发量。
         * @example `1000`
         */
        Concurrency: number;
        /**
         * 当前是否已经生成报告。
         * @example `false`
         */
        HasReport: boolean;
        /**
         * 是否调试。
         * @example `false`
         */
        IsDebugging: boolean;
        /**
         * 场景压测状态。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 目前消耗的VUM。
         * @example `100`
         */
        Vum: number;
        /**
         * 压测计划开始时间戳，单位为ms。
         * @example `1639970040000`
         */
        StartTimeTS: number;
        /**
         * 当前所处阶段。
         * @example `任务执行`
         */
        StageName: string;
        /**
         * 场景整体的采样状态。
         * @example `{ "failTps":0,"successRtAvg":33,"successRtMin":29,"successRtSum":99407,         "rtAvg":33.459104678559406,"rtMin":29,"failRtMax":0,"duration":997,         "samplerId":-1, "successRtMax":133,"fullStat":{       "requestBytesSum":629926,"successRtAvg":33,"successRtMin":29,"successRtSum":174551,"count":5206,"rtSeg99":53, "successTps":2397.9732842008293,"rtSeg90":36, "rtSeg50":32,            "rtSeg99Sum":53,"rtAvg":33.528812908182864, "rtMin":29,             "failRtMax":0,"duration":2171, "successCount":5206,            "rtSegStatCount":1,"tps":2397.9732842008293 }, "successCount":2971, "failRtSum":0,"failCount":0,"count":2971,"concurrency":100, "successTps":2979.939819458375,"tps":2979.939819458375,"failRtAvg":0,         "failRtMin":0,  "rtMax":133}`
         */
        AllSampleStat: any;
        /**
         * 每一个采样器的状态。
         */
        SampleStatList: any[];
    };
}
