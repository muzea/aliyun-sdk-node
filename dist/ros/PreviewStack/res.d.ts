export interface PreviewStackResponse {
    /**
     * 请求ID。
     * @example `B288A0BE-D927-4888-B0F7-B35EF84B6E6F`
     */
    RequestId: string;
    /**
     * 资源栈预览数据。
     */
    Stack: {
        /**
         * 模板描述。
         * @example `One ECS instance.`
         */
        TemplateDescription: string;
        /**
         * 资源栈参数。
         */
        Parameters: {
            /**
             * 参数名称。
             * @example `ALIYUN::AccountId`
             */
            ParameterKey: string;
            /**
             * 参数值。
             * @example `151266687691****`
             */
            ParameterValue: string;
        }[];
        /**
         * 资源栈描述。
         * @example `One ECS instance.`
         */
        Description: string;
        /**
         * 是否禁用回滚。
         * @example `false`
         */
        DisableRollback: boolean;
        /**
         * 资源栈名称。
         * @example `MyStack`
         */
        StackName: string;
        /**
         * 超时时间。
         * 单位：分钟。
         * @example `60`
         */
        TimeoutInMinutes: number;
        /**
         * 资源栈策略内容。
         * @example `{   "Statement": [     {       "Action": "Update:*",       "Resource": "*",       "Effect": "Allow",       "Principal": "*"     },     {       "Action": "Update:*",       "Resource": "LogicalResourceId/apple1",       "Effect": "Deny",       "Principal": "*"     }   ] }`
         */
        StackPolicyBody: any;
        /**
         * 资源栈中的资源列表。
         */
        Resources: {
            /**
             * 资源逻辑ID。
             * @example `WebServer`
             */
            LogicalResourceId: string;
            /**
             * ACS资源类型。
             * @example `ACS::ECS::Instance`
             */
            AcsResourceType: string;
            /**
             * 资源类型。
             * @example `ALIYUN::ECS::Instance`
             */
            ResourceType: string;
            /**
             * 资源描述。
             * @example `ECS instance.`
             */
            Description: string;
            /**
             * 子资源栈信息。数据结构同整个返回值。
             * @example `{}`
             */
            Stack: any;
            /**
             * 资源栈依赖的资源。
             */
            RequiredBy: string[];
            /**
             * 资源属性。
             * @example `{   "DiskMappings": [     {       "Category": "cloud_ssd",       "Size": "20"     }   ],   "SystemDisk_Category": "cloud_ssd",   "InstanceChargeType": "PostPaid",   "AutoRenew": "False",   "WillReplace": true,   "ImageId": "centos_7",   "InstanceType": "ecs.g6.large",   "AllocatePublicIP": true,   "AutoRenewPeriod": 1,   "IoOptimized": "optimized",   "ZoneId": "cn-beijing-g",   "VSwitchId": "",   "SecurityGroupId": "",   "Period": 1,   "InternetChargeType": "PayByTraffic",   "SystemDiskCategory": "cloud_efficiency",   "InternetMaxBandwidthOut": 1,   "VpcId": "",   "InternetMaxBandwidthIn": 200,   "PeriodUnit": "Month" }`
             */
            Properties: any;
            /**
             * 资源行为。取值：
             * - Add：增加资源。
             * - Modify：修改资源。
             * - Remove：删除资源。
             * - None：无变化。
             * @example `Add`
             */
            Action: string;
            /**
             * 模板是否为替换更新。取值：
             * - True：替换更新。
             * - False：修改更新。
             * - Conditional：可能是替换更新，模板运行时才能确定。
             * > 仅当Action取值为Modify时，返回本参数。
             * @example `False`
             */
            Replacement: string;
            /**
             * 资源物理ID。
             * 当Action为Modify或Remove时，返回本参数。
             * @example `i-a1b2c3***`
             */
            PhysicalResourceId: string;
        }[];
        /**
         * 资源栈所在地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 资源栈相关输出日志。
         */
        Log: {
            /**
             * Terraform输出日志。仅Terraform类型资源栈返回该参数。
             * > 该参数表示预览资源栈的日志。
             */
            TerraformLogs: {
                /**
                 * 执行的Terraform命令名称。取值：
                 * - apply
                 * - plan
                 * - destroy
                 * - version
                 * 关于命令含义的更多信息，请参见[Command](https://www.terraform.io/cli/commands)。
                 * @example `apply`
                 */
                Command: string;
                /**
                 * 输出流。取值：
                 * - stdout：标准输出。
                 * - stderr：标准错误。
                 * @example `stdout`
                 */
                Stream: string;
                /**
                 * 当前命令在当前输出流中输出的内容。
                 * @example `Apply complete! Resources: 42 added, 0 changed, 0 destroyed.`
                 */
                Content: string;
            }[];
        };
    };
}
