export interface DescribeNotificationConfigurationsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 弹性伸缩事件及资源变化通知的集合。
     */
    NotificationConfigurationModels: {
        /**
         * 通知对象标识符，参数格式如下：
         * - 云监控：acs:ess:{region-id}:{account-id}:cloudmonitor。
         * - 消息服务MNS队列：acs:mns:{region-id}:{account-id}:queue/{queuename}。
         * - 消息服务MNS主题：acs:mns:{region-id}:{account-id}:topic/{topicname}。
         * 参数格式中的变量含义如下：
         * - region-id：伸缩组所在的地域的ID。
         * - account-id：阿里云账号ID。
         * - queuename：MNS队列的名称。
         * - topicname：MNS主题的名称。
         * @example `acs:mns:cn-beijing:161456884340****:topic/modifyLifecycleHo****`
         */
        NotificationArn: string;
        /**
         * 伸缩组的ID。
         * @example `asg-bp1igpak5ft1flyp****`
         */
        ScalingGroupId: string;
        /**
         * 弹性伸缩事件及资源变化通知类型列表。
         */
        NotificationTypes: string[];
    }[];
}
