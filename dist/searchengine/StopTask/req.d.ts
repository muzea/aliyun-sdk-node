export interface StopTaskRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 已停止的设备id
     * @example `tisplus_opensearch@datasource_flow_fsm@1865410598556969-ha-cn-pl32rf0****_api2@bj_vpc_domain_1@null@MANUAL-ha-cn-pl32rf0****_api2@1649729867698@028315`
     */
    "fsmId": string;
}
