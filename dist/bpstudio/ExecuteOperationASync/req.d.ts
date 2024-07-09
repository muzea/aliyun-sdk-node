export interface ExecuteOperationASyncRequest {
    /**
     * 云速搭应用ID
     * @example `BG**********UQ`
     */
    "ApplicationId"?: string;
    /**
     * 资源类型，如果需要修改ecs的相关参数请填写：ecs。
     * @example `ACK`
     */
    "ServiceType": string;
    /**
     * 本次操作类型，是修改产品的操作类型，有的操作类型是通用，有的是单独使用。
     * 下面为ecs的相关编配示例：
     * - ecs的名称：rename
     * - ecs的规格：modifyInstanceType
     * - ecs的启动：modifyInstanceType
     * - ecs的停止：modifyInstanceType
     * - ecs的重启：modifyInstanceType
     * - ecs添加标签：addTags
     * - ecs的删除：ecsDelete
     * - ecs的付费类型：modifyPayType
     * @example `addTags`
     */
    "Operation": string;
    /**
     * 操作相关参数，根据不同的Operation值，输入对应的参数，此次传值是以map的形式传参。
     * 以下为ecs的变配为例：
     * - ecs的需要传递的公共参数如下：
     * change_type,
     * regionId,
     * instanceId,
     * appId
     * - ecs变更规格的参数值示例：
     * {
     * 	"ServiceType": "ecs",
     * 	"Operation": "modifyInstanceType",
     * 	"Attributes": "{\"change_type\":\"modify_instance_type\",\"instance_type\":\"ecs.hfr7.2xlarge\",\"instanceId\":\"i-xxxxxxxxx\",\"regionId\":\"cn-beijing\",\"appId\":\"xxxxxxxxxxxxx\"}"
     * }
     * - ecs停止实例如下：
     * {
     * 	"ServiceType": "ecs",
     * 	"Operation": "modifyInstanceType",
     * 	"Attributes": "{\"change_type\":\"modify_status\",\"status\":\"Stopped\",\"instanceId\":\"i-xxxxxxxxx\",\"regionId\":\"cn-beijing\",\"appId\":\"xxxxxxxxxxxxx\"}"
     * }
     * - ecs启动的参数实例如下：
     * {
     * 	"ServiceType": "ecs",
     * 	"Operation": "modifyInstanceType",
     * 	"Attributes": "{\"change_type\":\"modify_status\",\"status\":\"Running\",\"instanceId\":\"i-xxxxxxxxx\",\"regionId\":\"cn-beijing\",\"appId\":\"xxxxxxxxxxxxx\"}"
     * }
     * - ecs重启的实例如下：
     * {
     * 	"ServiceType": "ecs",
     * 	"Operation": "modifyInstanceType",
     * 	"Attributes": "{\"change_type\":\"modify_status\",\"status\":\"Restart\",\"instanceId\":\"i-xxxxxxxxx\",\"regionId\":\"cn-beijing\",\"appId\":\"xxxxxxxxxxxxx\"}"
     * }
     */
    "Attributes"?: any;
    /**
     * 资源组ID，用于资源组权限校验
     * @example `ceshi`
     */
    "ResourceGroupId"?: string;
    /**
     * 幂等标记
     * @example `1600765710019`
     */
    "ClientToken"?: string;
}
