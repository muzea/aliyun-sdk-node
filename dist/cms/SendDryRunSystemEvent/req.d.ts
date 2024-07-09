export interface SendDryRunSystemEventRequest {
    /**
     * 云服务名称。
     * >事件支持的云服务，详细信息请参见[云服务系统事件](~~167388~~)。
     * @example `ecs`
     */
    "Product": string;
    /**
     * 事件名称。
     * >详细信息请参见[DescribeSystemEventMetaList](~~114972~~)。
     * @example `Agent_Status_Stopped`
     */
    "EventName": string;
    /**
     * 应用分组ID。
     * @example `123456`
     */
    "GroupId"?: string;
    /**
     * 事件内容。
     * >该参数的取值可以为任意一个合法的JSON，建议JSON中包含关键字值`product`、`resourceId`和`regionId`。
     * @example `{"product":"CloudMonitor","resourceId":"acs:ecs:cn-hongkong:173651113438****:instance/{instanceId}","level":"CRITICAL","instanceName":"instanceName","regionId":"cn-hangzhou","name":"Agent_Status_Stopped","content":{"ipGroup":"0.0.0.0,0.0.0.1","tianjimonVersion":"1.2.11"},"status":"stopped"}`
     */
    "EventContent"?: string;
}
