interface ESS {
    /**
    * 调用CompleteLifecycleAction提前结束伸缩活动的等待状态。
    */ CompleteLifecycleAction(query: {
        "RegionId"?: string;
        /**
        * 生命周期挂钩的ID。
        * @example `ash-****`
        */ "LifecycleHookId": string;
        /**
        * 伸缩活动的等待状态标识符，您可以从生命周期挂钩指定的消息服务队列或主题中获取该值。
        * @example `aaaa-bbbbb-cccc-ddddd`
        */ "LifecycleActionToken": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 等待状态结束后的下一步动作，取值范围：
        * - CONTINUE：继续响应弹性扩张活动或者继续响应弹性收缩活动。
        * - ABANDON：直接释放弹性扩张活动创建出来的ECS实例或者直接将弹性收缩活动中的ECS实例从伸缩组移除。
        * 默认值：CONTINUE。
        * 当伸缩组发生弹性收缩活动（SCALE_IN）并触发多个生命周期挂钩时，DefaultResult为ABANDON的生命周期挂钩触发的等待状态结束时，会提前将其它对应的等待状态提前结束。其他情况下，下一步动作均以最后一个结束等待状态的下一步动作为准。
        * @example `CONTINUE`
        */ "LifecycleActionResult"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeRegions查询可以使用弹性伸缩服务的地域。
    */ DescribeRegions(query: {
        "RegionId"?: string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 根据所选语言筛选返回结果，更多详情请参见[RFC7231](https://tools.ietf.org/html/rfc7231)，取值范围：
        * - zh-CN：根据汉语筛选
        * - en-US：根据英语筛选
        * - ja：根据日语筛选
        * 默认值：zh-CN。
        * @example `zh-CN`
        */ "AcceptLanguage"?: string;
    }): Promise<{
        "RequestId": string;
        "Regions": {
            "Region": {
                "RegionId": string;
                "RegionEndpoint": string;
                "LocalName": string;
            }[];
        };
    }>;
    /**
    * 调用DescribeScalingActivities查询伸缩活动。
    */ DescribeScalingActivities(query: {
        /**
        * 伸缩活动所属伸缩组的地域ID。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 伸缩活动列表的页码，起始值：1。
        * 默认值：1 。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值：50。
        * 默认值：10 。
        * @example `50`
        */ "PageSize"?: number;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId"?: string;
        /**
        * 伸缩活动的状态，取值范围：
        *
        * - Successful：执行成功的伸缩活动。
        * - Warning：部分执行成功的伸缩活动。
        * - Failed：执行失败的伸缩活动。
        * - InProgress：正在执行的伸缩活动。
        * - Rejected：执行伸缩活动请求被拒绝。
        *
        * @example `Successful`
        */ "StatusCode"?: string;
        /**
        * ScalingActivityId.N为待查询伸缩活动的ID，N的取值范围：1～20。
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.1"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.2"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.3"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.4"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.5"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.6"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.7"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.8"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.9"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.10"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.11"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.12"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.13"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.14"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.15"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.16"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.17"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.18"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.19"?: string;
        /**
        * @example `ebta5WbUzC8gcwUWvfch****`
        */ "ScalingActivityId.20"?: string;
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageNumber": number;
        "PageSize": number;
        "ScalingActivities": {
            "ScalingActivity": {
                "ScalingActivityId": string;
                "StartTime": string;
                "EndTime": string;
                "Cause": string;
                "Description": string;
                "Progress": number;
                "ScalingGroupId": string;
                "StatusCode": string;
                "StatusMessage": string;
            }[];
        };
    }>;
    /**
    * 调用RebalanceInstances重新平衡多可用区伸缩组内ECS实例的分布。
    */ RebalanceInstances(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "ScalingActivityId": string;
    }>;
    /**
    * 调用SetInstancesProtection保护或者停止保护伸缩组内的一台或者多台ECS实例。
    */ SetInstancesProtection(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        "InstanceId": string[];
        /**
        * 伸缩组自动缩容时是否保护ECS实例，使其不被终止或移出伸缩组，取值范围：
        * - true
        * - false
        *
        * @example `true`
        */ "ProtectedFromScaleIn": boolean;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用EnterStandby将伸缩组内的ECS实例设置为备用状态。
    */ EnterStandby(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        "InstanceId": string[];
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeNotificationTypes查询弹性伸缩事件及资源变化通知的类型。
    */ DescribeNotificationTypes(query: {
        "RegionId"?: string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "notificationTypes": string[];
        "requestId": string;
    }>;
    /**
    * 调用ExitStandby使伸缩组内处于备用状态的ECS实例进入运行状态。
    */ ExitStandby(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        "InstanceId": string[];
        /**
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeScalingRules查询伸缩组下的伸缩规则，并列出伸缩规则的信息。
    */ DescribeScalingRules(query: {
        /**
        * 伸缩规则所属伸缩组的地域ID。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 伸缩规则列表的页码，起始值：1。
        * 默认值：1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值：50。
        * 默认值：10。
        * @example `50`
        */ "PageSize"?: number;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId"?: string;
        /**
        * 伸缩规则的类型，取值范围：
        * - SimpleScalingRule：简单伸缩规则。根据调整方式（AdjustmentType）和调整值（AdjustmentValue）调整ECS实例数量。
        * - TargetTrackingScalingRule：目标追踪伸缩规则。根据预定义监控（MetricName）项动态计算需要扩缩容的ECS实例数量，尽量将预定义监控项的指标值维持在目标值（TargetValue）附近。
        * - StepScalingRule： 步进伸缩规则，根据阈值和指标值提供分步扩展方式。
        * - PredictiveScalingRule：预测伸缩规则，基于机器学习能力分析伸缩组的历史监控数据预测未来监控指标值，并支持自动创建定时任务设置伸缩组边界。
        * 默认值：SimpleScalingRule。
        * @example `SimpleScalingRule`
        */ "ScalingRuleType"?: string;
        /**
        * 是否返回伸缩规则关联的云监控报警任务，取值范围：
        * - true：返回伸缩规则关联的云监控报警任务。
        * - false：不返回伸缩规则关联的云监控报警任务。
        * 默认值：false。
        * @example `false`
        */ "ShowAlarmRules"?: boolean;
        /**
        * ScalingRuleId.N为待查询伸缩规则的ID，N的取值范围：1～10。
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleId.1"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleId.2"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleId.3"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleId.4"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleId.5"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleId.6"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleId.7"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleId.8"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleId.9"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleId.10"?: string;
        /**
        * ScalingRuleName.N为待查询伸缩规则的名称，N的取值范围：1～10。
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleName.1"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleName.2"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleName.3"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleName.4"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleName.5"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleName.6"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleName.7"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleName.8"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleName.9"?: string;
        /**
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleName.10"?: string;
        /**
        * ScalingRuleAri.N为待查询伸缩规则的唯一标识符，N的取值范围：1～10。
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
        */ "ScalingRuleAri.1"?: string;
        /**
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
        */ "ScalingRuleAri.2"?: string;
        /**
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
        */ "ScalingRuleAri.3"?: string;
        /**
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
        */ "ScalingRuleAri.4"?: string;
        /**
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
        */ "ScalingRuleAri.5"?: string;
        /**
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
        */ "ScalingRuleAri.6"?: string;
        /**
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
        */ "ScalingRuleAri.7"?: string;
        /**
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
        */ "ScalingRuleAri.8"?: string;
        /**
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
        */ "ScalingRuleAri.9"?: string;
        /**
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/eMKWG8SRNb9dBLAjweNI1Ik`
        */ "ScalingRuleAri.10"?: string;
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageNumber": number;
        "PageSize": number;
        "ScalingRules": {
            "ScalingRule": {
                "ScalingRuleId": string;
                "ScalingRuleAri": string;
                "Cooldown": number;
                "ScalingGroupId": string;
                "AdjustmentType": string;
                "ScalingRuleName": string;
                "AdjustmentValue": number;
            }[];
        };
    }>;
    /**
    * 调用DescribeScheduledTasks查询定时任务的信息。
    */ DescribeScheduledTasks(query: {
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
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageSize": number;
        "PageNumber": number;
        "ScheduledTasks": {
            "ScheduledTask": {
                "TaskEnabled": boolean;
                "ScheduledTaskId": string;
                "Description": string;
                "ScheduledTaskName": string;
                "LaunchExpirationTime": number;
                "RecurrenceType": string;
                "RecurrenceEndTime": string;
                "LaunchTime": string;
                "RecurrenceValue": string;
                "ScheduledAction": string;
            }[];
        };
    }>;
    /**
    * 调用EnableScalingGroup启用一个伸缩组。
    */ EnableScalingGroup(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `dmIDKNcyWfzncX9MWX1****`
        */ "ScalingGroupId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 需要在伸缩组内激活的伸缩配置的ID。
        * @example `cGsGHrdMBa3DcDrrBVcc****`
        */ "ActiveScalingConfigurationId"?: string;
        /**
        * InstanceId.N为启用后需要加入伸缩组的ECS实例的ID，N的取值范围：1～20。
        * @example `i-283vv****`
        */ "InstanceId.1"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.2"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.3"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.4"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.5"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.6"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.7"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.8"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.9"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.10"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.11"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.12"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.13"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.14"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.15"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.16"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.17"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.18"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.19"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.20"?: string;
        /**
        * LoadBalancerWeight.N为对应ECS实例后端服务器的权重，N的取值范围：1～20，该参数取值范围：0~100。
        * 默认值：50。
        * @example `50`
        */ "LoadBalancerWeight.1"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.2"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.3"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.4"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.5"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.6"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.7"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.8"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.9"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.10"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.11"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.12"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.13"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.14"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.15"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.16"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.17"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.18"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.19"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.20"?: number;
        /**
        * 实例启动模板的ID，用于指定伸缩组从实例启动模板获取启动配置信息。
        * @example `lt-m5e3ofjr1zn1aw7****`
        */ "LaunchTemplateId"?: string;
        /**
        * 实例启动模板的版本，取值范围：
        * - 固定的模板版本号
        * - Default：始终使用模板默认版本
        * - Latest：始终使用模板最新版本
        *
        * @example `Default`
        */ "LaunchTemplateVersion"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeScalingInstances查询伸缩组内ECS实例的列表，并列出ECS实例的信息。
    */ DescribeScalingInstances(query: {
        /**
        * 伸缩组所属地域的ID。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 伸缩组的ID。
        * @example `asg-****`
        */ "ScalingGroupId"?: string;
        /**
        * 关联伸缩配置的ID。
        * @example `asc-****`
        */ "ScalingConfigurationId"?: string;
        /**
        * ECS实例在伸缩组中的健康状态，未处于运行中（Running）状态的ECS实例会被判定为不健康的ECS实例，取值范围：
        * - Healthy：健康的ECS实例。
        * - Unhealthy：不健康的ECS实例。
        * 弹性伸缩会自动移出伸缩组中不健康的ECS实例。弹性伸缩会停止和释放自动创建的ECS实例，但不会停止和释放手工添加的ECS实例。
        * @example `Healthy`
        */ "HealthStatus"?: string;
        /**
        * ECS实例在伸缩组中的生命周期状态，取值范围：
        *
        * - InService：已成功加入伸缩组并正常提供服务。
        * - Pending：正在加入伸缩组但还未完成相关配置，包括创建实例、加入负载均衡、添加RDS访问名单等过程。
        * - Removing：正在移出伸缩组。
        *
        * @example `InService`
        */ "LifecycleState"?: string;
        /**
        * ECS实例的创建类型，取值范围：
        * - AutoCreated：伸缩组根据伸缩配置和伸缩规则自动创建的ECS实例。
        * - Attached：不是通过弹性伸缩服务创建，而是手工添加到伸缩组中的ECS实例。
        * @example `AutoCreated`
        */ "CreationType"?: string;
        /**
        * ECS实例列表的页码，起始值：1。
        * 默认值：1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数，最大值：50。
        * 默认值：10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * InstanceId.N为ECS实例的ID，N的取值范围：1～20。返回查询结果时忽略失效的InstanceId，并且不报错。
        * @example `i-281vv****`
        */ "InstanceId.1"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.2"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.3"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.4"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.5"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.6"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.7"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.8"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.9"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.10"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.11"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.12"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.13"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.14"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.15"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.16"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.17"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.18"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.19"?: string;
        /**
        * @example `i-283vv****`
        */ "InstanceId.20"?: string;
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageNumber": number;
        "PageSize": number;
        "ScalingInstances": {
            "ScalingInstance": {
                "ScalingConfigurationId": string;
                "CreationType": string;
                "InstanceId": string;
                "CreationTime": string;
                "HealthStatus": string;
                "LifecycleState": string;
                "ScalingGroupId": string;
            }[];
        };
    }>;
    /**
    * 调用AttachInstances为伸缩组添加ECS实例。
    */ AttachInstances(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        /**
        * InstanceId.N为待添加ECS实例的ID，N的取值范围：1～20。
        * @example `i-28wt4****`
        */ "InstanceId.1": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.2"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.3"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.4"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.5"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.6"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.7"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.8"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.9"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.10"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.11"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.12"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.13"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.14"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.15"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.16"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.17"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.18"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.19"?: string;
        /**
        * @example `i-28wt4****`
        */ "InstanceId.20"?: string;
        /**
        * LoadBalancerWeight.N为对应ECS实例后端服务器的权重，N的取值范围：1～20，该参数取值范围：0~100。
        * 默认值：50。
        * @example `50`
        */ "LoadBalancerWeight.1"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.2"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.3"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.4"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.5"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.6"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.7"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.8"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.9"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.10"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.11"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.12"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.13"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.14"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.15"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.16"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.17"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.18"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.19"?: number;
        /**
        * @example `50`
        */ "LoadBalancerWeight.20"?: number;
    }): Promise<{
        "RequestId": string;
        "ScalingActivityId": string;
    }>;
    /**
    * 调用DeleteLifecycleHook删除一个生命周期挂钩。
    */ DeleteLifecycleHook(query: {
        "RegionId"?: string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 生命周期挂钩的ID。
        * @example `ash-****`
        */ "LifecycleHookId"?: string;
        /**
        * 伸缩组的ID。
        * @example `dP8VqSd9ENXPc0ciVmbc****`
        */ "ScalingGroupId"?: string;
        /**
        * 生命周期挂钩的名称。
        * @example `测试SCALE_IN`
        */ "LifecycleHookName"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateNotificationConfiguration创建弹性伸缩事件及资源变化通知。
    */ CreateNotificationConfiguration(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        /**
        * 通知对象标识符。格式为`acs:ess:{region}:{account-id}:{resource-relative-id}`，其中：
        * - region为伸缩组所在地域的ID。更多详情，请参见[地域和可用区](~~40654~~)。
        * - account-id为您账号的ID。
        * - resource-relative-id为通知方式，取值范围：
        *     - cloudmonitor：云监控
        *     - MNS队列：queue/{queuename}，其中topicname需要替换为具体的MNS队列名称。
        *     - MNS主题：topic/{topicname}，其中topicname需要替换为具体的MNS主题名称。
        * @example `acs:ess:cn-hangzhou:123456:cloudmonitor`
        */ "NotificationArn": string;
        "NotificationType": string[];
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用ModifyNotificationConfiguration修改一条弹性伸缩事件及资源变化通知的信息。
    */ ModifyNotificationConfiguration(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        /**
        * 通知对象标识符。格式为`acs:ess:{region}:{account-id}:{resource-relative-id}`，其中：
        * - region为伸缩组所在地域的ID。更多详情，请参见[地域和可用区](~~40654~~)。
        * - account-id为您账号的ID。
        * - resource-relative-id为通知方式，取值范围：
        *     - cloudmonitor：云监控
        *     - MNS队列：queue/{queuename}，其中topicname需要替换为具体的MNS队列名称。
        *     - MNS主题：topic/{topicname}，其中topicname需要替换为具体的MNS主题名称。
        * @example `acs:ess:cn-hangzhou:123456:cloudmonitor`
        */ "NotificationArn": string;
        "NotificationType": string[];
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用RecordLifecycleActionHeartbeat延长一个生命周期挂钩触发后被挂起的ECS实例的等待时间。
    */ RecordLifecycleActionHeartbeat(query: {
        "RegionId"?: string;
        /**
        * 生命周期挂钩的ID。
        * @example `ash-****`
        */ "lifecycleHookId": string;
        /**
        * 伸缩活动的等待状态标识符，您可以从生命周期挂钩指定的消息服务队列或主题中获取该值。
        * @example `aaaa-bbbbb-cccc-ddddd`
        */ "lifecycleActionToken": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 生命周期挂钩为伸缩组活动设置的等待时间，等待状态超时后会执行下一步动作。取值范围：30~21600，单位：秒。
        * 默认值：600。
        * 创建了生命周期挂钩后，您可以调用本接口延长ECS实例的等待时间，也可以调用[CompleteLifecycleAction](~~73847~~)提前结束伸缩活动的等待状态。
        * @example `600`
        */ "heartbeatTimeout"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeNotificationConfigurations查询您创建的弹性伸缩事件及资源变化通知。
    */ DescribeNotificationConfigurations(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "notificationConfigurationModels": {
            "notificationArn": string;
            "notificationTypes": string[];
            "scalingGroupId": string;
        }[];
        "requestId": string;
    }>;
    /**
    * 调用DeleteScheduledTask删除一个定时任务。
    */ DeleteScheduledTask(query: {
        "RegionId"?: string;
        /**
        * 定时任务的ID。
        * @example `edRtShc57WGXdt8TlPbr****`
        */ "ScheduledTaskId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DescribeLifecycleHooks查询生命周期挂钩。
    */ DescribeLifecycleHooks(query: {
        "RegionId"?: string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 伸缩组的ID。
        * @example `asg-****`
        */ "ScalingGroupId"?: string;
        /**
        * 生命周期挂钩的名称。
        * @example `Test`
        */ "LifecycleHookName"?: string;
        "LifecycleHookId"?: string[];
        /**
        * 实例状态列表的页码。起始值：1。
        * 默认值：1。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：50。
        * 默认值：50。
        * @example `50`
        */ "PageSize"?: number;
    }): Promise<{
        "lifecycleHooks": {
            "defaultResult": string;
            "heartbeatTimeout": number;
            "lifecycleHookId": string;
            "lifecycleHookName": string;
            "lifecycleTransition": string;
            "notificationArn": string;
            "notificationMetadata": string;
            "scalingGroupId": string;
        }[];
        "pageNumber": number;
        "pageSize": number;
        "requestId": string;
        "totalCount": number;
    }>;
    /**
    * 调用DeleteNotificationConfiguration删除一条弹性伸缩事件及资源变化通知。
    */ DeleteNotificationConfiguration(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        /**
        * 通知对象标识符。格式为`acs:ess:{region}:{account-id}:{resource-relative-id}`，其中：
        * - region为伸缩组所在地域的ID。
        * - account-id为您账号的ID。
        * - resource-relative-id为通知方式。
        * @example `acs:ess:cn-hangzhou:123456:cloudmonitor`
        */ "NotificationArn": string;
        /**
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用RemoveInstances从一个伸缩组里移出ECS实例。
    */ RemoveInstances(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        "InstanceId": string[];
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 指定被移出实例的动作，取值范围：
        * - recycle：实例进入停机不收费状态。
        *     > 仅在ScalingPolicy为recycle时生效。
        * - release：实例被释放。
        * 默认值：release。
        * @example `release`
        */ "RemovePolicy"?: string;
    }): Promise<{
        "ScalingActivityId": string;
        "RequestId": string;
    }>;
    /**
    * 调用ModifyScheduledTask修改一个定时任务的信息。
    */ ModifyScheduledTask(query: {
        "RegionId"?: string;
        /**
        * 定时任务的ID。
        * @example `edRtShc57WGXdt8TlPbr****`
        */ "ScheduledTaskId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 定时任务的名称。2~64个英文或中文字符，以数字、大小字母或中文开头，可包含数字、下划线（_）、连字符（-）或点号（.）。同一账号同一地域内唯一。
        * @example `scheduled****`
        */ "ScheduledTaskName"?: string;
        /**
        * 定时任务的描述信息。2~200个英文或中文字符。
        * @example `fortest`
        */ "Description"?: string;
        /**
        * 定时任务触发时需要执行的操作，填写伸缩规则的唯一标识符。
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/cCBpdYdQuBe2cUxOdu6****`
        */ "ScheduledAction"?: string;
        /**
        * 重复执行定时任务的结束时间。按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。不能填写自修改当天起365日后的时间。
        * 修改后，RecurrenceType、RecurrenceValue和RecurrenceEndTime需要同时有效。
        * @example `2014-08-20T16:55Z`
        */ "RecurrenceEndTime"?: string;
        /**
        * 定时任务触发的时间点。按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。不能填写自修改当天起90日后的时间。
        * 如果指定了RecurrenceType，则此属性指定的时间点，默认为循环执行的时间点。
        * 如果未指定RecurrenceType，则按指定的日期和时间执行一次。
        * @example `2014-08-18T10:52Z`
        */ "LaunchTime"?: string;
        /**
        * 重复执行定时任务的类型，取值范围：
        *
        * - Daily：每多少天重复执行一次定时任务。
        * - Weekly：每周指定几天重复执行一次定时任务。
        * - Monthly：每月内指定几天重复执行一次定时任务。
        * - Cron：按照指定的Cron表达式执行定时任务。
        * 修改后，RecurrenceType、RecurrenceValue和RecurrenceEndTime需要同时有效。
        * @example `Daily`
        */ "RecurrenceType"?: string;
        /**
        * 重复执行定时任务的数值。
        * - RecurrenceType取Daily时，只能填一个值，取值范围：1~31。
        * - RecurrenceType取Weekly时，可以填入多个值，填多个值时使用英文逗号（,）分隔。比如，周日、周一、周二、周三、周四、周五、周六的值依次为：0,1,2,3,4,5,6。
        * - RecurrenceType取Monthly时，格式为A-B。A、B的取值范围为1~31，并且B必须大于等于A。
        * - RecurrenceType取Cron时，表示UTC时间，支持分、时、日、月、星期的5域表达式，支持通配符英文逗号（,）、英文问号（?）、连字符（-）、星号（*）、井号（#）、斜线（/）、L和W。
        * 修改后，RecurrenceType、RecurrenceValue和RecurrenceEndTime需要同时有效。
        * @example `2`
        */ "RecurrenceValue"?: string;
        /**
        * 是否启动定时任务。
        * - true：启动定时任务。
        * - false：停止定时任务。
        * @example `true`
        */ "TaskEnabled"?: boolean;
        /**
        * 定时任务触发操作失败后，在此时间内重试。单位为秒，取值范围：0~21600。
        * @example `600`
        */ "LaunchExpirationTime"?: number;
        /**
        * @example `1`
        */ "MinValue"?: number;
        /**
        * @example `2`
        */ "MaxValue"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyLifecycleHook修改一个生命周期挂钩的信息。
    */ ModifyLifecycleHook(query: {
        "RegionId"?: string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 待修改生命周期挂钩的ID，用于指定生命周期挂钩。
        * @example `ash-***`
        */ "LifecycleHookId"?: string;
        /**
        * 伸缩组的ID，用于指定生命周期挂钩。
        * @example `AG6CQdPU8OKdwLjgZcJ2***`
        */ "ScalingGroupId"?: string;
        /**
        * 待修改生命周期挂钩的名称，用于指定生命周期挂钩。
        * @example `test_SCALE_IN`
        */ "LifecycleHookName"?: string;
        /**
        * 等待状态结束后的下一步动作，取值范围：
        * - CONTINUE：继续响应弹性扩张活动或者继续响应弹性收缩活动。
        * - ABANDON：直接释放弹性扩张活动创建出来的ECS实例或者直接将弹性收缩活动中的ECS实例从伸缩组移除。
        * 当伸缩组发生弹性收缩活动（SCALE_IN）并触发多个生命周期挂钩时，DefaultResult为ABANDON的生命周期挂钩触发的等待状态结束时，会提前将其它对应的等待状态提前结束。其他情况下，下一步动作均以最后一个结束等待状态的下一步动作为准。
        * @example `CONTINUE`
        */ "DefaultResult"?: string;
        /**
        * 生命周期挂钩为伸缩组活动设置的等待时间，等待状态超时后会执行下一步动作。取值范围：30~21600，单位：秒。
        * 您可以调用[RecordLifecycleActionHeartbeat](~~73846~~)延长ECS实例的等待时间，也可以调用[CompleteLifecycleAction](~~73847~~)提前结束伸缩活动的等待状态。
        * @example `600`
        */ "HeartbeatTimeout"?: number;
        /**
        * 生命周期挂钩适用的伸缩活动类型，取值范围：
        * - SCALE_OUT：伸缩组弹性扩张活动
        * - SCALE_IN：伸缩组弹性收缩活动
        * @example `SCALE_IN`
        */ "LifecycleTransition"?: string;
        /**
        * 伸缩活动的等待状态的固定字符串信息。参数长度不能超过128个字符。
        * 弹性伸缩每次推送消息到通知对象时，会同时发送您预先指定的NotificationMetadata参数值，便于管理和标记不同类别的通知信息。当您同时指定了NotificationArn参数时，NotificationMetadata参数方可生效。
        * @example `Test`
        */ "NotificationMetadata"?: string;
        /**
        * 生命周期挂钩通知对象标识符。支持消息服务MNS队列和主题，参数取值格式：acs:ess:{region}:{account-id}:{resource-relative-id}。
        * - region：伸缩组所在的地域
        * - account-id：阿里云账号ID
        * 例如：
        * - MNS队列：acs:ess:{region}:{account-id}:queue/{queuename}
        * - MNS主题：acs:ess:{region}:{account-id}:topic/{topicname}
        * @example `acs:ess:cn-hangzhou:1111111111:queue/queue2`
        */ "NotificationArn"?: string;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateLifecycleHook为伸缩组创建一个或多个生命周期挂钩。
    */ CreateLifecycleHook(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        /**
        * 生命周期挂钩适用的伸缩活动类型，取值范围：
        *
        * - SCALE_OUT：伸缩组弹性扩张活动
        * - SCALE_IN：伸缩组弹性收缩活动
        *
        * @example `SCALE_OUT`
        */ "LifecycleTransition": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 生命周期挂钩的名称。不能与当前伸缩组其他生命周期挂钩重名，长度为2~40个英文或中文字符，以数字、大小字母或中文开头，可包含数字、下划线（_）、连字符（-）和点号（.）。
        * 默认值为生命周期挂钩ID。
        * @example `test_SCALE_OUT`
        */ "LifecycleHookName"?: string;
        /**
        * 等待状态结束后的下一步动作，取值范围：
        * - CONTINUE：继续响应弹性扩张活动或者继续响应弹性收缩活动。
        * - ABANDON：直接释放弹性扩张活动创建出来的ECS实例或者直接将弹性收缩活动中的ECS实例从伸缩组移除。
        * 默认值：CONTINUE。
        * 当伸缩组发生弹性收缩活动（SCALE_IN）并触发多个生命周期挂钩时，DefaultResult为ABANDON的生命周期挂钩触发的等待状态结束时，会提前将其它对应的等待状态提前结束。其他情况下，下一步动作均以最后一个结束等待状态的下一步动作为准。
        * @example `CONTINUE`
        */ "DefaultResult"?: string;
        /**
        * 生命周期挂钩为伸缩组活动设置的等待时间，等待状态超时后会执行下一步动作。取值范围：30~21600，单位：秒。
        * 默认值：600。
        * 创建了生命周期挂钩后，您可以调用[RecordLifecycleActionHeartbeat](~~73846~~)延长ECS实例的等待时间，也可以调用[CompleteLifecycleAction](~~73847~~)提前结束伸缩活动的等待状态。
        * @example `600`
        */ "HeartbeatTimeout"?: number;
        /**
        * 伸缩活动的等待状态的固定字符串信息。参数长度不能超过128个字符。
        * 弹性伸缩每次推送消息到通知对象时，会同时发送您预先指定的NotificationMetadata参数值，便于管理和标记不同类别的通知信息。当您同时指定了NotificationArn参数时，NotificationMetadata参数方可生效。
        * @example `Test`
        */ "NotificationMetadata"?: string;
        /**
        * 生命周期挂钩通知对象标识符。支持消息服务MNS队列和主题，参数取值格式：acs:ess:{region}:{account-id}:{resource-relative-id}。
        * - region：伸缩组所在的地域
        * - account-id：阿里云账号ID
        * 例如：
        * - MNS队列：acs:ess:{region}:{account-id}:queue/{queuename}
        * - MNS主题：acs:ess:{region}:{account-id}:topic/{topicname}
        *
        * @example `acs:ess:cn-hangzhou:1111111111:queue/queue1`
        */ "NotificationArn"?: string;
        "LifecycleHook"?: string[];
    }): Promise<{
        "RequestId": string;
        "LifecycleHookId": string;
    }>;
    /**
    * 调用CreateScalingRule创建一条伸缩规则。
    */ CreateScalingRule(query: {
        "RegionId"?: string;
        /**
        * 伸缩规则所属伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 伸缩规则的名称，2~40个英文或中文字符，以数字、大小字母或中文开头，可包含数字、下划线（_）、连字符（-）或点号（.）。同一用户账号同一地域同一伸缩组内唯一。
        * 如果没有指定该参数，默认值为ScalingRuleId的值。
        * @example `测试sr`
        */ "ScalingRuleName"?: string;
        /**
        * 伸缩规则的冷却时间，仅适用于简单伸缩规则。 取值范围：0~86400，单位：秒。
        * 默认值：空。
        * @example `60`
        */ "Cooldown"?: number;
        /**
        * 伸缩规则最小调整实例数，仅当伸缩规则类型为SimpleScalingRule或StepScalingRule，且AdjustmentType为PercentChangeInCapacity时生效。
        * @example `1`
        */ "MinAdjustmentMagnitude"?: number;
        /**
        * 伸缩规则的调整方式， 仅适用于简单伸缩规则，且此时该项必选。可选值：
        * - QuantityChangeInCapacity：增加或减少指定数量的ECS实例。
        * - PercentChangeInCapacity：增加或减少指定比例的ECS实例。
        * - TotalCapacity： 将当前伸缩组的ECS实例数量调整到指定数量。
        *
        * @example `QuantityChangeInCapacity`
        */ "AdjustmentType"?: string;
        /**
        * 伸缩规则的调整值， 仅适用于简单伸缩规则，且此时该项必选。任何情况下，单次调整的ECS实例台数都不能超过500。不同调整方式对应的取值范围：
        * - QuantityChangeInCapacity：-500~500
        * - PercentChangeInCapacity：-100~10000
        * - TotalCapacity：0~1000
        *
        * @example `100`
        */ "AdjustmentValue"?: number;
        /**
        * 伸缩规则类型，取值范围：
        * - SimpleScalingRule：简单伸缩规则。根据调整方式（AdjustmentType）和调整值（AdjustmentValue）调整ECS实例数量。
        * - TargetTrackingScalingRule：目标追踪伸缩规则。根据预定义监控（MetricName）项动态计算需要扩缩容的ECS实例数量，尽量将预定义监控项的指标值维持在目标值（TargetValue）附近。
        * - StepScalingRule： 步进伸缩规则，根据阈值和指标值提供分步扩展方式。
        * - PredictiveScalingRule：预测伸缩规则，基于机器学习能力分析伸缩组的历史监控数据预测未来监控指标值，并支持自动创建定时任务设置伸缩组边界。
        * 默认值：SimpleScalingRule。
        * @example `SimpleScalingRule`
        */ "ScalingRuleType"?: string;
        /**
        * 实例预热时间，适用于目标追踪伸缩规则和步进伸缩规则。处于预热状态的ECS实例将正常的加入伸缩组，但是期间将不会向云监控上报监控数据。
        * > 动态计算需要扩缩容的ECS实例数量时，处于预热状态的实例不计入现有实例数量。
        *
        * 取值范围：0~86400，单位：秒。
        * 默认值：300。
        * @example `300`
        */ "EstimatedInstanceWarmup"?: number;
        /**
        * 预定义监控项，适用于目标追踪伸缩规则和预测规则，且此时该项必选。
        * 目标追踪伸缩规则取值范围：
        * - CpuUtilization：平均CPU使用率
        * - ClassicInternetRx：经典网络公网入流量平均值
        * - ClassicInternetTx：经典网络公网出流量平均值
        * - VpcInternetRx：VPC网络公网入流量平均值
        * - VpcInternetTx：VPC网络公网出流量平均值
        * - IntranetRx：内网入流量平均值
        * - IntranetTx ：内网出流量平均值
        * 预测规则取值范围：
        * - CpuUtilization：平均CPU使用率
        * - IntranetRx：内网入流量平均值
        * - IntranetTx ：内网出流量平均值
        * @example `CpuUtilization`
        */ "MetricName"?: string;
        /**
        * 目标值，适用于目标追踪伸缩规则和预测规则，且此时该项必选。TargetValue最多保留小数点后三位，且必须大于0。
        * @example `0.125`
        */ "TargetValue"?: number;
        /**
        * 是否禁用缩容，仅适用于目标追踪伸缩规则。
        * 默认值：false。
        * @example `false`
        */ "DisableScaleIn"?: boolean;
        "StepAdjustment"?: string[];
        /**
        * 预测规则的模式，取值范围：
        * -  PredictAndScale：产生预测结果并创建预测任务。
        * -  PredictOnly：产生预测结果，但不会创建预测任务。
        * 默认值：PredictAndScale。
        * @example `PredictAndScale`
        */ "PredictiveScalingMode"?: string;
        /**
        * 预测规则最大值处理方式，取值范围：
        * - MaxOverridePredictiveValue：初始最大值会覆盖预测值。预测值大于初始最大值时，预测任务的最大值采用初始最大值。
        * - PredictiveValueOverrideMax：预测值会覆盖初始最大值。预测值大于初始最大值时， 预测任务的最大值采用预测值。
        * - PredictiveValueOverrideMaxWithBuffer：预测值会附加一定比例。预测值会按照PredictiveValueBuffer比例增加，当增加后的值大于初始最大值时，会采用增加后的值。
        * 默认值：MaxOverridePredictiveValue。
        * @example `MaxOverridePredictiveValue`
        */ "PredictiveValueBehavior"?: string;
        /**
        * PredictiveValueBehavior为PredictiveValueOverrideMaxWithBuffer时生效，预测值会按照该比例增加，当增加后的值大于初始最大值时，会采用增加后的值。取值范围：0~100。
        * 默认值：0。
        * @example `50`
        */ "PredictiveValueBuffer"?: number;
        /**
        * 预测规则自动创建的预测任务默认均在整点执行，您可以设置预启动时间提前执行预测任务，预先准备资源。取值范围：0~60，单位：分钟。
        * 默认值：0。
        * @example `30`
        */ "PredictiveTaskBufferTime"?: number;
        /**
        * 伸缩组实例数上限，和PredictiveValueBehavior结合使用。
        * 默认值为伸缩组最大实例数（MaxSize的值）。
        * @example `100`
        */ "InitialMaxSize"?: number;
    }): Promise<{
        "RequestId": string;
        "ScalingRuleId": string;
        "ScalingRuleAri": string;
    }>;
    /**
    * 调用DetachInstances从一个伸缩组分离一台或多台ECS实例。
    */ DetachInstances(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        "InstanceId": string[];
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
        "ScalingActivityId": string;
    }>;
    /**
    * 调用AttachLoadBalancers添加一个或多个负载均衡实例。
    */ AttachLoadBalancers(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        "LoadBalancer": string[];
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 是否把当前伸缩组内的实例全部添加到负载均衡后端服务器，取值范围：
        *
        * - true：添加
        * - false：不添加
        * 默认值：false。
        * @example `false`
        */ "ForceAttach"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DetachDBInstances移除一个或多个RDS实例。
    */ DetachDBInstances(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        "DBInstance": string[];
        /**
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 是否移除RDS实例IP白名单中属于伸缩组内实例的私网IP：
        * - true：移除
        * - false：不移除
        * 默认值：false。
        * @example `false`
        */ "ForceDetach"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DeleteScalingGroup删除一个伸缩组。
    */ DeleteScalingGroup(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `dmIDKNcyWfzncX9MWX1****`
        */ "ScalingGroupId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 如伸缩组存在ECS实例或正在进行伸缩活动，是否强制删除伸缩组并移出和释放ECS实例。取值范围：
        * - true：强制删除伸缩组。
        * - false：不强制删除伸缩组。
        * 默认值：false。
        * @example `false`
        */ "ForceDelete"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用DetachLoadBalancers移除一个或多个负载均衡实例。
    */ DetachLoadBalancers(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        "LoadBalancer": string[];
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 是否移除负载均衡实例后端服务器中属于伸缩组的实例：
        * - true：移除
        * - false：不移除
        * 默认值：false。
        * @example `false`
        */ "ForceDetach"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyScalingGroup修改一个伸缩组。
    */ ModifyScalingGroup(query: {
        "RegionId"?: string;
        /**
        * 待修改伸缩组的ID。
        * @example `cqS5QbbhmvGLcJbWoDbW****`
        */ "ScalingGroupId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 伸缩组的名称，同一地域下伸缩组名称唯一。长度为2~40个英文或中文字符，以数字、大小英文字母或中文开头，可以包含数字、下划线（_）、连字符（-）和小数点（.）。
        * @example `Scaling****`
        */ "ScalingGroupName"?: string;
        /**
        * 伸缩组内ECS实例台数的最小值，取值范围：0~1000 。当伸缩组内ECS实例数小于MinSize时，弹性伸缩会自动创建ECS实例。
        * @example `1`
        */ "MinSize"?: number;
        /**
        * 伸缩组内ECS实例台数的最大值，取值范围：0~1000。 当伸缩组内ECS实例数大于MaxSize时，弹性伸缩会自动移出ECS实例。
        * @example `99`
        */ "MaxSize"?: number;
        "VSwitchIds"?: string[];
        /**
        * 一次伸缩活动（添加或移出ECS实例）结束后的一段冷却时间。取值范围：0~86400，单位：秒。
        * 冷却时间内，该伸缩组不执行其它的伸缩活动，仅针对[云监控](~~35170~~)报警任务触发的伸缩活动有效。
        * @example `600`
        */ "DefaultCooldown"?: number;
        /**
        * RemovalPolicy.N指定移出ECS实例的伸缩组策略，N的取值范围：1~2。更多详情，请参见[移出策略](~~25910~~)。取值范围：
        * - OldestInstance：移出最早加入伸缩组的ECS实例
        * - NewestInstance：移出最新加入伸缩组的ECS实例
        * - OldestScalingConfiguration：移出最早伸缩配置创建的ECS实例
        * @example `OldestScalingConfiguration`
        */ "RemovalPolicy.1"?: string;
        /**
        * @example `NewestInstance`
        */ "RemovalPolicy.2"?: string;
        /**
        * 伸缩组内生效的伸缩配置的ID。
        * @example `bU5uZHcAgtzwcL4IeDea****`
        */ "ActiveScalingConfigurationId"?: string;
        /**
        * 伸缩组的健康检查方式，取值范围：
        * - NONE：不做健康检查。
        * - ECS：对伸缩组内的ECS实例做健康检查。
        * @example `ECS`
        */ "HealthCheckType"?: string;
        /**
        * 实例启动模板ID，用于指定伸缩组从实例启动模板获取启动配置信息。
        * @example `lt-m5e3ofjr1zn1aw7****`
        */ "LaunchTemplateId"?: string;
        /**
        * 实例启动模板的版本，取值范围：
        *
        * - 固定的模板版本号
        * - Default：始终使用模板默认版本
        * - Latest：始终使用模板最新版本
        * @example `Default`
        */ "LaunchTemplateVersion"?: string;
        /**
        * 伸缩组所需要按量实例个数的最小值，取值范围：0~1000。当按量实例个数少于该值时，将优先创建按量实例。
        * @example `30`
        */ "OnDemandBaseCapacity"?: number;
        /**
        * 伸缩组满足最小按量实例数（OnDemandBaseCapacity）要求后，超出的实例中按量实例应占的比例，取值范围：0～100。
        * @example `20`
        */ "OnDemandPercentageAboveBaseCapacity"?: number;
        /**
        * 是否开启补齐抢占式实例。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。
        * @example `true`
        */ "SpotInstanceRemedy"?: boolean;
        /**
        * 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：0~10。
        * @example `5`
        */ "SpotInstancePools"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateScalingGroup创建一个伸缩组。
    */ CreateScalingGroup(query: {
        /**
        * 伸缩组所属的地域ID。更多详情，请参见[地域与可用区](~~40654~~)。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * 伸缩组内ECS实例台数的最小值，取值范围：0~1000 。当伸缩组内ECS实例数小于MinSize时，弹性伸缩会自动创建ECS实例。
        * @example `2`
        */ "MinSize": number;
        /**
        * 伸缩组内ECS实例台数的最大值，取值范围：0~1000。 当伸缩组内ECS实例数大于MaxSize时，弹性伸缩会自动移出ECS实例。
        * @example `20`
        */ "MaxSize": number;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 伸缩组的名称，同一地域下伸缩组名称唯一。长度为2~40个英文或中文字符，以数字、大小英文字母或中文开头，可以包含数字、下划线（_）、连字符（-）和小数点（.）。
        * 默认值为伸缩组ID。
        * @example `测试sg`
        */ "ScalingGroupName"?: string;
        /**
        * 实例启动模板ID，用于指定伸缩组从实例启动模板获取启动配置信息。
        * @example `lt-m5e3ofjr1zn1aw7****`
        */ "LaunchTemplateId"?: string;
        /**
        * 实例启动模板的版本，取值范围：
        *
        * - 固定的模板版本号
        * - Default：始终使用模板默认版本
        * - Latest：始终使用模板最新版本
        * @example `Default`
        */ "LaunchTemplateVersion"?: string;
        "InstanceId"?: string;
        /**
        *  一次伸缩活动（添加或移出ECS实例）结束后的一段冷却时间。取值范围：0~86400，单位：秒。
        * 默认值：300。
        * 冷却时间内，该伸缩组不执行其它的伸缩活动，仅针对[云监控](~~35170~~)报警任务触发的伸缩活动有效。
        * @example `300`
        */ "DefaultCooldown"?: number;
        /**
        * 负载均衡实例ID。取值可以是由多台负载均衡实例ID组成一个JSON数组，最多支持5个ID，ID之间用半角逗号（,）隔开。
        * @example `["lb-idx", "lb-idy", "lb-idz"]`
        */ "LoadBalancerIds"?: string;
        /**
        * RDS实例ID。取值可以是由多台RDS实例ID组成一个JSON数组，最多支持8个ID，ID之间用半角逗号（,）隔开。
        * @example `["rm-idx", "rm-idy", "rm-idz"]`
        */ "DBInstanceIds"?: string;
        /**
        * RemovalPolicy.N指定移出ECS实例的伸缩组策略，N的取值范围：1~2。更多详情，请参见[移出策略](~~25910~~)。取值范围：
        * - OldestInstance：移出最早加入伸缩组的ECS实例
        * - NewestInstance：移出最新加入伸缩组的ECS实例
        * - OldestScalingConfiguration：移出最早伸缩配置创建的ECS实例
        * RemovalPolicy.1的默认值：OldestScalingConfiguration。
        * RemovalPolicy.2的默认值：OldestInstance。
        * @example `OldestScalingConfiguration`
        */ "RemovalPolicy.1"?: string;
        /**
        * @example `OldestInstance`
        */ "RemovalPolicy.2"?: string;
        /**
        * 创建VPC类型的伸缩组时，指定的虚拟交换机ID。
        * @example `vsw-****`
        */ "VSwitchId"?: string;
        "VSwitchIds"?: string[];
        /**
        *  多可用区伸缩组ECS实例扩缩容策略。取值范围：
        *
        * - PRIORITY：根据您定义的虚拟交换机（VSwitchIds.N）扩缩容。当优先级较高的虚拟交换机所在可用区无法创建ECS实例时，自动使用下一优先级的虚拟交换机创建ECS实例。
        * - COST_OPTIMIZED：按vCPU单价从低到高进行尝试创建。当伸缩配置设置了抢占式计费方式的多实例规格时，优先创建对应抢占式计费实例。当抢占式计费实例由于库存等原因无法创建时，自动尝试以按量付费的方式创建。
        *     > COST_OPTIMIZED仅在伸缩配置设置了多实例规格或者选用了抢占式实例的情况下生效。
        * - BALANCE：在伸缩组指定的多可用区之间均匀分配ECS实例。如果由于库存不足等原因可用区之间变得不平衡，您可以通过API [RebalanceInstance](~~71516~~)平衡资源。
        * 默认值：PRIORITY 。
        * @example `PRIORITY`
        */ "MultiAZPolicy"?: string;
        /**
        * 伸缩组的健康检查方式，取值范围：
        * - NONE：不做健康检查。
        * - ECS：对伸缩组内的ECS实例做健康检查。
        * @example `ECS`
        */ "HealthCheckType"?: string;
        "LifecycleHook"?: string[];
        "VServerGroup"?: string[];
        /**
        * 指定伸缩组的回收模式，取值范围：
        *
        * - recycle：伸缩组的回收模式为停机回收模式
        * - release：伸缩组的回收模式为释放模式
        * 关于被移出实例的动作，请参见[RemoveInstances](~~25955~~)。
        * @example `recycle`
        */ "ScalingPolicy"?: string;
        /**
        * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
        * @example `123e4567-e89b-12d3-a456-42665544****`
        */ "ClientToken"?: string;
        /**
        * 伸缩组所需要按量实例个数的最小值，取值范围：0~1000。当按量实例个数少于该值时，将优先创建按量实例。
        * @example `30`
        */ "OnDemandBaseCapacity"?: number;
        /**
        * 伸缩组满足最小按量实例数（OnDemandBaseCapacity）要求后，超出的实例中按量实例应占的比例，取值范围：0～100。
        * @example `20`
        */ "OnDemandPercentageAboveBaseCapacity"?: number;
        /**
        * 是否开启补齐抢占式实例。开启后，当收到抢占式实例将被回收的系统消息时，伸缩组将尝试创建新的实例，替换掉将被回收的抢占式实例。
        * @example `true`
        */ "SpotInstanceRemedy"?: boolean;
        /**
        * 指定可用实例规格的个数，伸缩组将按成本最低的多个规格均衡创建抢占式实例。取值范围：0~10。
        * @example `5`
        */ "SpotInstancePools"?: number;
    }): Promise<{
        "RequestId": string;
        "ScalingGroupId": string;
    }>;
    /**
    * 调用DisableScalingGroup停用一个伸缩组。
    */ DisableScalingGroup(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `dmIDKNcyWfzncX9MWX1****`
        */ "ScalingGroupId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ModifyScalingConfiguration修改一个伸缩配置。
    */ ModifyScalingConfiguration(query: {
        "RegionId"?: string;
        /**
        * 待修改伸缩配置的ID。
        * @example `asc-****`
        */ "ScalingConfigurationId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 是否为I/O优化实例。取值范围：
        * - none：非I/O优化实例。
        * - optimized：I/O优化实例。
        * @example `none`
        */ "IoOptimized"?: string;
        "DataDisk"?: string[];
        /**
        * 后付费实例的抢占策略。取值范围：
        *
        * - NoSpot：普通的按量付费实例。
        * - SpotWithPriceLimit：设置上限价格的抢占式实例。
        * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
        * @example `NoSpot`
        */ "SpotStrategy"?: string;
        "SpotPriceLimit"?: string[];
        /**
        * 伸缩配置的名称，2~40个英文或中文字符，以数字、大小写字母或中文开头，可包含数字、下划线（_）、连字符（-）或点号（.）。
        * 在同一地域下同一伸缩组内伸缩配置名称唯一。如果您没有指定该参数，则默认使用伸缩配置的ID。
        * @example `test-modify`
        */ "ScalingConfigurationName"?: string;
        /**
        * 使用本伸缩配置自动创建的ECS实例的名称。
        * @example `Joshu****`
        */ "InstanceName"?: string;
        /**
        * 云服务器的主机名。点号（.）或连字符（-）不能作为首尾字符，不能连续使用点号（.）或连字符（-）。另外，不同类型实例的命名要求如下：
        * - Windows实例：主机名长度为2~15，可以包含大小写字母、数字和连字符（-）。不能包含点号（.），不能全是数字。
        * - 其他类型实例（Linux等）：主机名长度为2~64，可以包含多个点号（.）。两个点号（.）之间为一段，每段可以包含大小写字母、数字和连字符（-）。
        * @example `Joshu****`
        */ "HostName"?: string;
        /**
        * 镜像文件ID，自动创建实例时使用的镜像资源。
        * @example `centos6u5_64_20G_aliaegis_20140703.vhd`
        */ "ImageId"?: string;
        /**
        * 镜像文件名称，同一个地域内镜像名称唯一。如果设置了ImageId， ImageName将被忽略。
        * 不支持通过ImageName设置镜像市场镜像。
        * @example `suse11sp3_64_20G_aliaegis_20150428.vhd`
        */ "ImageName"?: string;
        "InstanceTypes"?: string[];
        /**
        * vCPU个数。
        * 同时指定CPU和Memory可以定义实例规格范围，例如，CPU=2且Memory=16可以定义配置为2 vCPU和16 GiB的所有实例规格。弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。
        * >该区间配置效果仅在成本优化模式下且伸缩配置未设置实例规格时生效。
        * @example `2`
        */ "Cpu"?: number;
        /**
        * 内存大小。
        * 同时指定CPU和Memory可以定义实例规格范围，例如，CPU=2且Memory=16可以定义配置为2 vCPU和16 GiB的所有实例规格。弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。
        * >该区间配置效果仅在成本优化模式下且伸缩配置未设置实例规格时生效。
        * @example `16`
        */ "Memory"?: number;
        /**
        * 网络计费类型，取值范围：
        * - PayByBandwidth：按带宽计费。此时InternetMaxBandwidthOut即为所选的固定带宽值。
        * - PayByTraffic：按流量计费。此时InternetMaxBandwidthOut只是一个带宽上限，计费以实际产生的网络流量为依据。
        * @example `PayByBandwidth`
        */ "InternetChargeType"?: string;
        /**
        * 公网出带宽最大值，单位为Mbps (Mega bit per second)，取值范围：
        * - 按带宽计费：0~100，如果您没有指定该参数，则出带宽将自动被设置为0Mbps。
        * - 按流量计费：0~100，如果您没有指定该参数，则会出现报错。
        * @example `50`
        */ "InternetMaxBandwidthOut"?: number;
        /**
        * 系统盘的磁盘种类。取值范围：
        * - cloud：普通云盘
        * - cloud_efficiency：高效云盘
        * - cloud_ssd：SSD云盘
        * - ephemeral_ssd：本地SSD盘
        * - cloud_essd：ESSD云盘
        * @example `cloud_efficiency`
        */ "SystemDisk.Category"?: string;
        /**
        * 系统盘的大小，单位：GiB。取值范围：
        * - cloud：40~500
        * - cloud_efficiency：40~500
        * - cloud_ssd：40~500
        * - ephemeral_ssd：40~500
        * 指定该参数后，系统盘大小必须 ≥ max{40, ImageSize}。
        * @example `50`
        */ "SystemDisk.Size"?: number;
        /**
        * 系统盘的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * @example `cloud_ssdSystem`
        */ "SystemDisk.DiskName"?: string;
        /**
        * 系统盘的描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。
        * @example `FinanceDept`
        */ "SystemDisk.Description"?: string;
        /**
        * 后端服务器的权重，取值范围：0~100。
        * @example `50`
        */ "LoadBalancerWeight"?: number;
        /**
        * ECS实例的自定义数据，需要以Base64方式编码，编码前的原始数据最多为16KB。
        * @example `echo hello ecs!`
        */ "UserData"?: string;
        /**
        * 登录ECS实例时使用的密钥对的名称。
        *
        * - 对Windows实例，该参数将被忽略，默认为空。
        * - 对Linux实例，密码登录方式会被初始化成禁止。
        * @example `null`
        */ "KeyPairName"?: string;
        /**
        * ECS实例的RAM角色名称。RAM角色名称由RAM提供和维护，您可调用[ListRoles](~~28713~~)查询可用的RAM角色。创建RAM角色的方法请参见[CreateRole](~~28710~~)。
        * @example `RamRoleTest`
        */ "RamRoleName"?: string;
        /**
        * 是否使用镜像预设的密码。使用该参数时，您需要确保使用的镜像已经设置了密码。
        * @example `false`
        */ "PasswordInherit"?: boolean;
        /**
        * ECS实例的标签。标签以键值对方式传入，最多可以使用5组标签。Key和Value的使用要求如下：
        *
        * - Key最多支持64个字符，不能以aliyun和acs:开头，不能包含 http:// 或者 https:// 。一旦使用标签，Key不允许为空字符串。
        * - Value最多支持128个字符，不能以aliyun和acs:开头，不能包含 http:// 或者 https:// 。Value可以为空字符串。
        * @example `“key1”:”value1”`
        */ "Tags"?: string;
        /**
        * ECS实例所属的部署集的ID。
        * @example `ds-bp13v7bjnj9gis****`
        */ "DeploymentSetId"?: string;
        /**
        * ECS实例所属的安全组的ID，同一个安全组内的ECS实例可以互相访问。
        * @example `sg-F876F****`
        */ "SecurityGroupId"?: string;
        /**
        * 是否覆盖。取值范围：
        * - true
        * - false
        * @example `true`
        */ "Override"?: boolean;
        /**
        * ECS实例所属资源组的ID。
        * @example `abcd1234abcd****`
        */ "ResourceGroupId"?: string;
        "SecurityGroupIds"?: string[];
        /**
        * ECS实例所属的EHPC集群的ID。
        * @example `hpc-clusterid`
        */ "HpcClusterId"?: string;
        /**
        * ECS实例的描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。
        * @example `FinaceDept`
        */ "InstanceDescription"?: string;
    }): Promise<{
        "requestId": string;
    }>;
    /**
    * 调用DescribeScalingConfigurations查询现有的伸缩配置。
    */ DescribeScalingConfigurations(query: {
        /**
        * 伸缩配置所属伸缩组的地域ID。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 伸缩配置列表的页码。起始值：1。
        * 默认值：1 。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：50。
        * 默认值：10。
        * @example `50`
        */ "PageSize"?: number;
        /**
        * 伸缩组的ID，您可以查询该伸缩组下所有的伸缩配置。
        * @example `dE9YbOdCHqaFdFZHXVdD****`
        */ "ScalingGroupId"?: string;
        /**
        * ScalingConfigurationId.N为待查询伸缩配置的ID，N的取值范围：1～10。查询结果包括生效和失效的伸缩配置，并通过返回参数LifecycleState进行标识。
        * @example `bU5uZHcAgtzwcL4IeDea****`
        */ "ScalingConfigurationId.1"?: string;
        /**
        * @example `bU5uZHcAgtzwcL4IeDea****`
        */ "ScalingConfigurationId.2"?: string;
        /**
        * @example `bU5uZHcAgtzwcL4IeDea****`
        */ "ScalingConfigurationId.3"?: string;
        /**
        * @example `bU5uZHcAgtzwcL4IeDea****`
        */ "ScalingConfigurationId.4"?: string;
        /**
        * @example `bU5uZHcAgtzwcL4IeDea****`
        */ "ScalingConfigurationId.5"?: string;
        /**
        * @example `bU5uZHcAgtzwcL4IeDea****`
        */ "ScalingConfigurationId.6"?: string;
        /**
        * @example `bU5uZHcAgtzwcL4IeDea****`
        */ "ScalingConfigurationId.7"?: string;
        /**
        * @example `bU5uZHcAgtzwcL4IeDea****`
        */ "ScalingConfigurationId.8"?: string;
        /**
        * @example `bU5uZHcAgtzwcL4IeDea****`
        */ "ScalingConfigurationId.9"?: string;
        /**
        * @example `bU5uZHcAgtzwcL4IeDea****`
        */ "ScalingConfigurationId.10"?: string;
        /**
        * ScalingConfigurationName.N为待查询伸缩配置的名称，N的取值范围：1～20。查询结果会忽略失效的伸缩配置名称，并且不报错。
        * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
        */ "ScalingConfigurationName.1"?: string;
        /**
        * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
        */ "ScalingConfigurationName.2"?: string;
        /**
        * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
        */ "ScalingConfigurationName.3"?: string;
        /**
        * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
        */ "ScalingConfigurationName.4"?: string;
        /**
        * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
        */ "ScalingConfigurationName.5"?: string;
        /**
        * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
        */ "ScalingConfigurationName.6"?: string;
        /**
        * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
        */ "ScalingConfigurationName.7"?: string;
        /**
        * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
        */ "ScalingConfigurationName.8"?: string;
        /**
        * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
        */ "ScalingConfigurationName.9"?: string;
        /**
        * @example `c1908dd1-690f-4c9b-ab73-350f1f06****`
        */ "ScalingConfigurationName.10"?: string;
    }): Promise<{
        "RequestId": string;
        "TotalCount": string;
        "PageNumber": string;
        "PageSize": string;
        "ScalingConfigurations": {
            "ScalingConfiguration": {
                "CreationTime": string;
                "ImageId": string;
                "InstanceType": string;
                "InternetChargeType": string;
                "InternetMaxBandwidthIn": string;
                "InternetMaxBandwidthOut": string;
                "LifecycleState": string;
                "ScalingConfigurationId": string;
                "ScalingConfigurationName": string;
                "ScalingGroupId": string;
                "SecurityGroupId": string;
                "SystemDiskCategory": string;
                "DataDisks": {
                    "DataDisk": {
                        "Size": string;
                        "Category": string;
                        "SnapshotId": string;
                        "Device": string;
                    };
                };
            };
        };
    }>;
    /**
    * 调用DeleteScalingConfiguration删除一个伸缩配置。
    */ DeleteScalingConfiguration(query: {
        "RegionId"?: string;
        /**
        * 待删除伸缩配置的ID。
        * @example `eOs27Kb0oXvQcUYjEGel****`
        */ "ScalingConfigurationId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用ExecuteScalingRule执行一条伸缩规则。
    */ ExecuteScalingRule(query: {
        "RegionId"?: string;
        /**
        * 伸缩规则唯一标识符。
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/cCBpdYdQuBe2cUxOdu6****`
        */ "ScalingRuleAri": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。详情请参见[如何保证幂等性](~~25965~~)。
        * @example `123e4567-e89b-12d3-a456-426655440000`
        */ "ClientToken"?: string;
        /**
        * 执行步进伸缩规则时指定的当前阈值，取值范围：-9.999999E18~9.999999E18。
        * @example `1.0`
        */ "BreachThreshold"?: number;
        /**
        * 执行步进伸缩规则时指定的当前指标值，取值范围：-9.999999E18~9.999999E18。
        * @example `1.0`
        */ "MetricValue"?: number;
    }): Promise<{
        "RequestId": string;
        "ScalingActivityId": string;
    }>;
    /**
    * 调用DeleteScalingRule删除一条伸缩规则。
    */ DeleteScalingRule(query: {
        "RegionId"?: string;
        /**
        * 待删除伸缩规则的ID。
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateScheduledTask创建一个定时任务。
    */ CreateScheduledTask(query: {
        /**
        * 定时任务所属地域的ID。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * 定时任务触发时需要执行的操作，填写伸缩规则的唯一标识符。
        * @example `ari:acs:ess:cn-qingdao:1344371:scalingRule/cCBpdYdQuBe2cUxOdu6****`
        */ "ScheduledAction": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 定时任务的显示名称。2~64个英文或中文字符，以数字、大小字母或中文开头，可包含数字、下划线（_）、连字符（-）或点号（.）。同一账号同一地域内唯一。
        * 默认值：ScheduledScalingTaskId。
        * @example `scheduled****`
        */ "ScheduledTaskName"?: string;
        /**
        * 定时任务的描述信息。2~200个英文或中文字符。
        * @example `fortest`
        */ "Description"?: string;
        /**
        * 重复执行定时任务的结束时间。 按照ISO8601标准表示，并需要使用UTC时间。
        * 格式为：YYYY-MM-DDThh:mmZ。不能填写自创建当天起365日后的时间。
        * 您需要同时指定RecurrenceType、RecurrenceValue和RecurrenceEndTime。
        * @example `2014-08-17T16:55Z`
        */ "RecurrenceEndTime"?: string;
        /**
        * 定时任务触发的时间点。 按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。不能填写自创建当天起90日后的时间。
        * 如果指定了RecurrenceType，则此属性指定的时间点，默认为循环执行的时间点。
        * 如果未指定RecurrenceType，则按指定的日期和时间执行一次。
        * @example `2014-08-17T16:52Z`
        */ "LaunchTime"?: string;
        /**
        * 重复执行定时任务的类型，取值范围：
        * - Daily：每多少天重复执行一次定时任务。
        * - Weekly：每周指定几天重复执行一次定时任务。
        * - Monthly：每月内指定几天重复执行一次定时任务。
        * - Cron：按照指定的Cron表达式执行定时任务。
        * 您需要同时指定RecurrenceType、RecurrenceValue和RecurrenceEndTime。
        * @example `Daily`
        */ "RecurrenceType"?: string;
        /**
        * 重复执行定时任务的数值。
        * - RecurrenceType取Daily时，只能填一个值，取值范围：1~31。
        * - RecurrenceType取Weekly时，可以填入多个值，填多个值时使用英文逗号（,）分隔。比如，周日、周一、周二、周三、周四、周五、周六的值依次为：0,1,2,3,4,5,6。
        * - RecurrenceType取Monthly时，格式为A-B。A、B的取值范围为1~31，并且B必须大于等于A。
        * - RecurrenceType取Cron时，表示UTC时间，支持分、时、日、月、星期的5域表达式，支持通配符英文逗号（,）、英文问号（?）、连词符（-）、星号（*）、井号（#）、斜线（/）、L和W。
        * 您需要同时指定RecurrenceType、RecurrenceValue和RecurrenceEndTime。
        * @example `1`
        */ "RecurrenceValue"?: string;
        /**
        * 是否启动定时任务。
        * - true：启动任务。
        * - false：停止任务 。
        * 默认值：true。
        * @example `true`
        */ "TaskEnabled"?: boolean;
        /**
        * 定时任务触发操作失败后，在此时间内重试。单位为秒，取值范围：0~21600。
        * 默认值：600。
        * @example `600`
        */ "LaunchExpirationTime"?: number;
    }): Promise<{
        "RequestId": string;
        "ScheduledTaskId": string;
    }>;
    /**
    * 调用ModifyScalingRule修改一条伸缩规则。
    */ ModifyScalingRule(query: {
        "RegionId"?: string;
        /**
        * 待修改伸缩规则的ID。
        * @example `eMKWG8SRNb9dBLAjweN****`
        */ "ScalingRuleId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 伸缩规则的显示名称，2~40 个英文或中文字符，以数字、大小字母或中文开头，可包含数字、下划线（_）、连字符（-）或点号（.）。同一用户账号同一地域同一伸缩组内唯一。
        * @example `测试sr`
        */ "ScalingRuleName"?: string;
        /**
        * 伸缩规则的冷却时间，仅适用于简单伸缩规则。
        * 取值范围：0~86400，单位：秒。
        * @example `60`
        */ "Cooldown"?: number;
        /**
        * 伸缩规则最小调整实例数，仅当伸缩规则类型为SimpleScalingRule或StepScalingRule，且AdjustmentType为PercentChangeInCapacity时生效。
        * @example `1`
        */ "MinAdjustmentMagnitude"?: number;
        /**
        * 伸缩规则的调整方式， 仅适用于简单伸缩规则。可选值：
        * - QuantityChangeInCapacity：增加或减少指定数量的 ECS 实例。
        * - PercentChangeInCapacity：增加或减少指定比例的 ECS 实例。
        * - TotalCapacity： 将当前伸缩组的 ECS 实例数量调整到指定数量。
        *
        * @example `QuantityChangeInCapacity`
        */ "AdjustmentType"?: string;
        /**
        * 伸缩规则的调整值， 仅适用于简单伸缩规则。任何情况下，单次调整的ECS实例台数都不能超过500。不同调整方式对应的取值范围：
        * - QuantityChangeInCapacity：-500~500
        * - PercentChangeInCapacity：-100~10000
        * - TotalCapacity：0~1000
        *
        * @example `100`
        */ "AdjustmentValue"?: number;
        /**
        * 实例预热时间，适用于目标追踪伸缩规则和步进伸缩规则。处于预热状态的ECS实例将正常的加入伸缩组，但是期间将不会向云监控上报监控数据。
        * > 动态计算需要扩缩容的ECS实例数量时，处于预热状态的实例不计入现有实例数量。
        * 取值范围：0~86400，单位：秒。
        * @example `60`
        */ "EstimatedInstanceWarmup"?: number;
        /**
        * 预定义监控项，适用于目标追踪伸缩规则和预测规则，且此时该项必选。
        * 目标追踪伸缩规则取值范围：
        * - CpuUtilization：平均CPU使用率
        * - ClassicInternetRx：经典网络公网入流量平均值
        * - ClassicInternetTx：经典网络公网出流量平均值
        * - VpcInternetRx：VPC网络公网入流量平均值
        * - VpcInternetTx：VPC网络公网出流量平均值
        * - IntranetRx：内网入流量平均值
        * - IntranetTx ：内网出流量平均值
        * 预测规则取值范围：
        * - CpuUtilization：平均CPU使用率
        * - IntranetRx：内网入流量平均值
        * - IntranetTx ：内网出流量平均值
        * @example `CpuUtilization`
        */ "MetricName"?: string;
        /**
        * 目标值，适用于目标追踪伸缩规则和预测规则。TargetValue最多保留小数点后三位，且必须大于0。
        * @example `0.125`
        */ "TargetValue"?: number;
        /**
        * 是否禁用缩容，仅适用于目标追踪伸缩规则。
        * @example `true`
        */ "DisableScaleIn"?: boolean;
        "StepAdjustment"?: string[];
        /**
        * 预测规则的模式，取值范围：
        * -  PredictAndScale：产生预测结果并创建预测任务。
        * -  PredictOnly：产生预测结果，但不会创建预测任务。
        * @example `PredictAndScale`
        */ "PredictiveScalingMode"?: string;
        /**
        * 预测规则最大值处理方式，取值范围：
        * - MaxOverridePredictiveValue：初始最大值会覆盖预测值。预测值大于初始最大值时，预测任务的最大值采用初始最大值。
        * - PredictiveValueOverrideMax：预测值会覆盖初始最大值。预测值大于初始最大值时， 预测任务的最大值采用预测值。
        * - PredictiveValueOverrideMaxWithBuffer：预测值会附加一定比例。预测值会按照PredictiveValueBuffer比例增加，当增加后的值大于初始最大值时，会采用增加后的值。
        * @example `MaxOverridePredictiveValue`
        */ "PredictiveValueBehavior"?: string;
        /**
        * PredictiveValueBehavior为PredictiveValueOverrideMaxWithBuffer时生效，预测值会按照该比例增加，当增加后的值大于初始最大值时，会采用增加后的值。取值范围：0~100。
        * @example `50`
        */ "PredictiveValueBuffer"?: number;
        /**
        * 预测规则自动创建的预测任务默认均在整点执行，您可以设置预启动时间提前执行预测任务，预先准备资源。取值范围：0~60。
        * @example `30`
        */ "PredictiveTaskBufferTime"?: number;
        /**
        * 伸缩组实例数上限，和PredictiveValueBehavior结合使用。
        * @example `100`
        */ "InitialMaxSize"?: number;
    }): Promise<{
        "RequestId": string;
        "ScalingRuleId": string;
        "ScalingRuleAri": string;
    }>;
    /**
    * 调用AttachDBInstances添加一个或多个RDS实例。
    */ AttachDBInstances(query: {
        "RegionId"?: string;
        /**
        * 伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        "DBInstance": string[];
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 是否把当前伸缩组内实例的私网IP全部添加到RDS实例IP白名单中：
        * -  true：添加
        * - false：不添加
        * 默认值：false。
        * @example `false`
        */ "ForceAttach"?: boolean;
    }): Promise<{
        "RequestId": string;
    }>;
    /**
    * 调用CreateScalingConfiguration创建一个伸缩配置。
    */ CreateScalingConfiguration(query: {
        "RegionId"?: string;
        /**
        * 伸缩配置所属的伸缩组的ID。
        * @example `AG6CQdPU8OKdwLjgZcJ****`
        */ "ScalingGroupId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 镜像文件ID，自动创建实例时使用的镜像资源。
        * @example `centos6u5_64_20G_aliaegis****.vhd`
        */ "ImageId"?: string;
        /**
        * 镜像文件名称，同一个地域内镜像名称唯一。如果设置了ImageId， ImageName将被忽略。
        * 不支持通过ImageName设置镜像市场镜像。
        * @example `myimage`
        */ "ImageName"?: string;
        /**
        * ECS实例的实例规格，更多信息请参见[实例规格族](~~25378~~)。
        * @example `ecs.t1.xsmall`
        */ "InstanceType"?: string;
        /**
        * vCPU个数。
        * 同时指定CPU和Memory可以定义实例规格范围，例如，CPU=2且Memory=16可以定义配置为2 vCPU和16 GiB的所有实例规格。弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。
        * >该区间配置效果仅在成本优化模式下且伸缩配置未设置实例规格时生效。
        * @example `2`
        */ "Cpu"?: number;
        /**
        * 内存大小。
        * 同时指定CPU和Memory可以定义实例规格范围，例如，CPU=2且Memory=16可以定义配置为2 vCPU和16 GiB的所有实例规格。弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。
        * >该区间配置效果仅在成本优化模式下且伸缩配置未设置实例规格时生效。
        * @example `16`
        */ "Memory"?: number;
        /**
        * ECS实例所属的部署集的ID。
        * @example `ds-bp1frxuzdg87zh4pz****`
        */ "DeploymentSetId"?: string;
        "InstanceTypes"?: string[];
        /**
        * ECS实例所属的安全组的ID，同一个安全组内的ECS实例可以互相访问。
        * @example `sg-280ih****`
        */ "SecurityGroupId"?: string;
        /**
        * 是否为I/O优化实例。[已停售的实例规格](~~55263~~)实例默认值是none，其他实例规格默认值是optimized。取值范围：
        * - none：非I/O优化实例。
        * - optimized：I/O优化实例。
        * @example `optimized`
        */ "IoOptimized"?: string;
        /**
        * - PayByBandwidth：按带宽计费。此时InternetMaxBandwidthOut即为所选的固定带宽值。
        * 如果未指定该参数，经典网络下默认值为PayByBandwidth，专有网络VPC下默认值为PayByTraffic。
        * @example `PayByTraffic`
        */ "InternetChargeType"?: string;
        /**
        * 公网入带宽最大值，单位为Mbps (Mega bit per second)，取值范围：1~200。
        * 如果您没有指定该参数，则入带宽将自动被设置为200Mbps。实例的入数据流量免费，该参数在任何情况下都不涉及计费。
        * @example `100`
        */ "InternetMaxBandwidthIn"?: number;
        /**
        * - 按带宽计费：0~100，如果您没有指定该参数，则出带宽将自动被设置为0Mbps。
        * @example `50`
        */ "InternetMaxBandwidthOut"?: number;
        /**
        * 系统盘的磁盘种类。取值范围：
        * - cloud：普通云盘
        * - cloud_efficiency：高效云盘
        * - cloud_ssd：SSD云盘
        * - ephemeral_ssd：本地SSD盘
        * - cloud_essd：ESSD云盘
        * InstanceType为系列I的实例规格且实例属于非I/O优化实例时，默认值：cloud。否则，默认值：cloud_efficiency。
        * @example `cloud_ssd`
        */ "SystemDisk.Category"?: string;
        /**
        * 系统盘的大小，单位：GiB。取值范围：
        * - cloud：40~500
        * - cloud_efficiency：40~500
        * - cloud_ssd：40~500
        * - ephemeral_ssd：40~500
        * 默认值：max{40, ImageSize}。
        * 指定该参数后，系统盘大小必须 ≥ max{40, ImageSize}。
        * @example `100`
        */ "SystemDisk.Size"?: number;
        /**
        * 系统盘的名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
        * 默认值：空。
        * @example `cloud_ssdSystem`
        */ "SystemDisk.DiskName"?: string;
        /**
        * 系统盘的描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。
        * @example `FinanceDept`
        */ "SystemDisk.Description"?: string;
        /**
        * 伸缩配置的名称，2~40个英文或中文字符，以数字、大小写字母或中文开头，可包含数字、下划线（_）、连字符（-）或点号（.）。
        * 在同一地域下同一伸缩组内伸缩配置名称唯一。如果您没有指定该参数，则默认使用伸缩配置的ID。
        * @example `测试_sc`
        */ "ScalingConfigurationName"?: string;
        "DataDisk"?: string[];
        /**
        * 后端服务器的权重，取值范围：0~100。
        * 默认值：50。
        * @example `50`
        */ "LoadBalancerWeight"?: number;
        /**
        * ECS实例的标签。标签以键值对方式传入，最多可以使用5组标签。Key和Value的使用要求如下：
        *
        * - Key最多支持64个字符，不能以aliyun和acs:开头，不能包含 http:// 或者 https:// 。一旦使用标签，Key不允许为空字符串。
        * - Value最多支持128个字符，不能以aliyun和acs:开头，不能包含 http:// 或者 https:// 。Value可以为空字符串。
        * @example `{"key1":"value1","key2":"value2", ... "key5":"value5"}`
        */ "Tags"?: string;
        /**
        * ECS实例的自定义数据，需要以Base64方式编码，编码前的原始数据最多为16KB。
        * @example `echo hello ecs!`
        */ "UserData"?: string;
        /**
        * 登录ECS实例时使用的密钥对的名称。
        *
        * - 对Windows实例，该参数将被忽略，默认为空。
        * - 对Linux实例，密码登录方式会被初始化成禁止。
        * @example `KeyPairTest`
        */ "KeyPairName"?: string;
        /**
        * ECS实例的RAM角色名称。RAM角色名称由RAM提供和维护，您可调用[ListRoles](~~28713~~)查询可用的RAM角色。创建RAM角色的方法请参见[CreateRole](~~28710~~)。
        * @example `RamRoleTest`
        */ "RamRoleName"?: string;
        /**
        * 是否开启安全加固。取值范围：
        * - Active：启用安全加固，只对公共镜像生效。
        * - Deactive：不启用安全加固，对所有镜像类型生效。
        * @example `Active`
        */ "SecurityEnhancementStrategy"?: string;
        /**
        * 使用本伸缩配置自动创建的ECS实例的名称。
        * @example `Instance****`
        */ "InstanceName"?: string;
        /**
        * 云服务器的主机名。点号（.）或连字符（-）不能作为首尾字符，不能连续使用点号（.）或连字符（-）。另外，不同类型实例的命名要求如下：
        * - Windows实例：主机名长度为2~15，可以包含大小写字母、数字和连字符（-）。不能包含点号（.），不能全是数字。
        * - 其他类型实例（Linux等）：主机名长度为2~64，可以包含多个点号（.）。两个点号（.）之间为一段，每段可以包含大小写字母、数字和连字符（-）。
        * @example `Host****`
        */ "HostName"?: string;
        /**
        * 后付费实例的抢占策略。取值范围：
        *
        * - NoSpot：普通的按量付费实例。
        * - SpotWithPriceLimit：设置上限价格的抢占式实例。
        * - SpotAsPriceGo：系统自动出价，跟随当前市场实际价格。
        * 默认值：NoSpot。
        * @example `NoSpot`
        */ "SpotStrategy"?: string;
        /**
        * 是否使用镜像预设的密码。使用该参数时，您需要确保使用的镜像已经设置了密码。
        * @example `false`
        */ "PasswordInherit"?: boolean;
        "SpotPriceLimit"?: string[];
        /**
        * ECS实例的密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
        * ```()` ~!@#$%^&*-_+=\|{}[]:;'<>,.?/```
        * 其中，Windows实例不能以斜线号（/）为密码首字符。
        * > 如果传入Password参数，建议您使用HTTPS协议发送请求，避免密码泄露。
        * @example `123-abcABC`
        */ "Password"?: string;
        /**
        * ECS实例所属资源组的ID。
        * @example `rg-resource****`
        */ "ResourceGroupId"?: string;
        "SecurityGroupIds"?: string[];
        /**
        * ECS实例所属的EHPC集群的ID。
        * @example `hpc-clusterid`
        */ "HpcClusterId"?: string;
        /**
        * ECS实例的描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。
        * @example `FinaceDept`
        */ "InstanceDescription"?: string;
        "ClientToken"?: string;
    }): Promise<{
        "RequestId": string;
        "ScalingConfigurationId": string;
    }>;
    /**
    * 调用DescribeScalingGroups查询伸缩组。
    */ DescribeScalingGroups(query: {
        /**
        * 伸缩组所属地域的ID。
        * @example `cn-qingdao`
        */ "RegionId": string;
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 伸缩组列表的页码。起始值：1。
        * 默认值：1 。
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 分页查询时设置的每页行数。最大值：50。
        * 默认值：10。
        * @example `10`
        */ "PageSize"?: number;
        /**
        * ScalingGroupId.N为待查询伸缩组的ID，N的取值范围：1～20。查询结果会忽略失效的伸缩组ID，并且不报错。
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.1"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.2"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.3"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.4"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.5"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.6"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.7"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.8"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.9"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.10"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.12"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.13"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.14"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.15"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.16"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.17"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.18"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.19"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupId.20"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName"?: string;
        /**
        * ScalingGroupName.N为待查询伸缩组的名称，N的取值范围：1～20。查询结果会忽略失效的伸缩组名称，并且不报错。
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.1"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.2"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.3"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.4"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.5"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.6"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.7"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.8"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.9"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.10"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.11"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.12"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.13"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.14"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.15"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.16"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.17"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.18"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.19"?: string;
        /**
        * @example `dyrSuvBOtO1dEdIlIbp****`
        */ "ScalingGroupName.20"?: string;
    }): Promise<{
        "RequestId": string;
        "TotalCount": number;
        "PageSize": number;
        "PageNumber": number;
        "ScalingGroups": {
            "ScalingGroup": {
                "ScalingGroupId": string;
                "ScalingGroupName": string;
                "RegionId": string;
                "RemovingCapacity": number;
                "DefaultCooldown": number;
                "MinSize": number;
                "MaxSize": number;
                "LifecycleState": string;
                "ActiveScalingConfigurationId": string;
                "LoadBalancerIds": {
                    "LoadBalancerId": string[];
                };
                "PendingCapacity": number;
                "TotalCapacity": number;
                "ActiveCapacity": number;
                "CreationTime": string;
                "DBInstanceIds": {
                    "DBInstanceId": string[];
                };
                "VSwitchId": string;
                "RemovalPolicies": {
                    "RemovalPolicy": string[];
                };
            }[];
        };
    }>;
    /**
    * 调用DetachVServerGroups移除一个或者多个虚拟服务器组。
    */ DetachVServerGroups(query: {
        /**
        * 伸缩组所属地域的ID，如cn-hangzhou、cn-shanghai。更多详情，请参见[地域和可用区](~~40654~~)。
        * @example `cn-hangzhou`
        */ "RegionId": string;
        /**
        * 伸缩组的ID。
        * @example `asg-****`
        */ "ScalingGroupId": string;
        "VServerGroup": string[];
        /**
        * @example `123456123456`
        */ "OwnerId"?: number;
        /**
        * 是否从待移除虚拟服务器组中移除当前伸缩组内的ECS实例。
        * - true：移除
        * - false：不移除
        * 默认值：false。
        * @example `false`
        */ "ForceDetach"?: boolean;
    }): Promise<{
        "requestId": string;
    }>;
    AttachVServerGroups(query: {
        "RegionId": string;
        "ScalingGroupId": string;
        "VServerGroup": string[];
        "OwnerId"?: number;
        "ForceAttach"?: boolean;
    }): Promise<{}>;
    DescribeScalingActivityDetail(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "ScalingActivityId"?: string;
    }): Promise<{}>;
    DeactivateScalingConfiguration(query: {
        "RegionId"?: string;
        "ScalingConfigurationId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeLimitation(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    VerifyAuthentication(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
        "Uid"?: number;
    }): Promise<{}>;
    VerifyUser(query: {
        "RegionId"?: string;
        "OwnerId"?: number;
    }): Promise<{}>;
    CreateAlarm(query: {
        "RegionId": string;
        "ScalingGroupId": string;
        "MetricName": string;
        "Threshold": number;
        "OwnerId"?: number;
        "Name"?: string;
        "Description"?: string;
        "AlarmAction"?: string[];
        "MetricType"?: string;
        "Period"?: number;
        "Statistics"?: string;
        "ComparisonOperator"?: string;
        "EvaluationCount"?: number;
        "Dimension"?: string[];
        "GroupId"?: number;
    }): Promise<{}>;
    DeleteAlarm(query: {
        "RegionId": string;
        "AlarmTaskId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DescribeAlarms(query: {
        "RegionId": string;
        "OwnerId"?: number;
        "ScalingGroupId"?: string;
        "AlarmTaskId"?: string;
        "State"?: string;
        "IsEnable"?: boolean;
        "MetricType"?: string;
        "PageSize"?: number;
        "PageNumber"?: number;
    }): Promise<{}>;
    DisableAlarm(query: {
        "RegionId": string;
        "AlarmTaskId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    EnableAlarm(query: {
        "RegionId": string;
        "AlarmTaskId": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    ModifyAlarm(query: {
        "RegionId": string;
        "AlarmTaskId": string;
        "OwnerId"?: number;
        "Name"?: string;
        "Description"?: string;
        "AlarmAction"?: string[];
        "MetricName"?: string;
        "MetricType"?: string;
        "Period"?: number;
        "Statistics"?: string;
        "Threshold"?: number;
        "ComparisonOperator"?: string;
        "EvaluationCount"?: number;
        "GroupId"?: number;
        "Dimension"?: string[];
    }): Promise<{}>;
}
export default ESS;
