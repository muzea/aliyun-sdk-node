export interface ModifyNotificationConfigurationRequest {
    /**
     * 伸缩组的ID。
     * @example `asg-bp1igpak5ft1flyp****`
     */
    "ScalingGroupId": string;
    /**
     * 通知对象标识符，设置本参数时支持以下通知方式：
     * - 云监控，参数取值格式：`acs:ess:{region-id}:{account-id}:cloudmonitor`。
     * - 消息服务MNS队列，参数取值格式：`acs:mns:{region-id}:{account-id}:queue/{queuename}`。
     * - 消息服务MNS主题，参数取值格式：`acs:mns:{region-id}:{account-id}:topic/{topicname}`。
     * 参数格式中的变量含义如下：
     * - region-id：伸缩组所在的地域的ID。
     * - account-id：阿里云账号ID。
     * - queuename：MNS队列的名称。
     * - topicname：MNS主题的名称。
     * @example `acs:ess:cn-beijing:161456884340****:cloudmonitor`
     */
    "NotificationArn": string;
    /**
     * 一类或者多类弹性伸缩事件及资源变化通知类型。
     */
    "NotificationTypes": string[];
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
}
