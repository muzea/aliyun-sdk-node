interface DescribeScheduledTasksRequest {
    /**
    * 定时任务所属伸缩组的地域ID。
    * @example `cn-qingdao`
    */ "RegionId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
    /**
    * 定时任务列表的页码，起始值：1。
    * 默认值：1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数，最大值：50。
    * 默认值：10。
    * @example `50`
    */ "PageSize"?: number;
    /**
    * ScheduledAction.N为对应定时任务在触发时需要执行的操作，N的取值范围：1～20。
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.1"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.2"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.3"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.4"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.5"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.6"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.7"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.8"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.9"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.10"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.11"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.12"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.13"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.14"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.15"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.16"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.17"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.18"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.19"?: string;
    /**
    * @example `ari:acs:ess:cn-qingdao:1344371:scalingrule/cCBpdYdQuBe2cUxOdu6piOk`
    */ "ScheduledAction.20"?: string;
    /**
    * ScheduledTaskId.N为待查询定时任务的ID，N的取值范围：1～20。
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.1"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.2"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.3"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.4"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.5"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.6"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.7"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.8"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.9"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.10"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.11"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.12"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.13"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.14"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.15"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.16"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.17"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.18"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.19"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId.20"?: string;
    /**
    * ScheduledTaskName.N为待查询定时任务的名称，N的取值范围：1～20。
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.1"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.2"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.3"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.4"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.5"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.6"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.7"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.8"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.9"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.10"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.11"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.12"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.13"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.14"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.15"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.16"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.17"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.18"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.19"?: string;
    /**
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskName.20"?: string;
}
export { DescribeScheduledTasksRequest };