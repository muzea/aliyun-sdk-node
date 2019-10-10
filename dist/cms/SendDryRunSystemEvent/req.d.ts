interface SendDryRunSystemEventRequest {
    "RegionId"?: string;
    /**
    * 事件名称。
    * @example `Agent_Status_Stopped`
    */ "EventName": string;
    /**
    * 产品名称。
    * @example `CloudMonitor`
    */ "Product": string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId"?: string;
    /**
    * 事件内容。
    * @example `{"product":"CloudMonitor","resourceId":"acs:ecs:cn-hongkong:173651113438****:instance/{instanceId}","level":"CRITICAL","instanceName":"instanceName","regionId":"cn-hangzhou","name":"Agent_Status_Stopped","content":{"ipGroup":"0.0.0.0,0.0.0.1","tianjimonVersion":"1.2.11"},"status":"stopped"}`
    */ "EventContent"?: string;
}
export { SendDryRunSystemEventRequest };