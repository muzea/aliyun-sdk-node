import { CompleteLifecycleActionRequest } from "./CompleteLifecycleAction/req";
import { CompleteLifecycleActionResponse } from "./CompleteLifecycleAction/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeScalingActivitiesRequest } from "./DescribeScalingActivities/req";
import { DescribeScalingActivitiesResponse } from "./DescribeScalingActivities/res";
import { RebalanceInstancesRequest } from "./RebalanceInstances/req";
import { RebalanceInstancesResponse } from "./RebalanceInstances/res";
import { SetInstancesProtectionRequest } from "./SetInstancesProtection/req";
import { SetInstancesProtectionResponse } from "./SetInstancesProtection/res";
import { EnterStandbyRequest } from "./EnterStandby/req";
import { EnterStandbyResponse } from "./EnterStandby/res";
import { DescribeNotificationTypesRequest } from "./DescribeNotificationTypes/req";
import { DescribeNotificationTypesResponse } from "./DescribeNotificationTypes/res";
import { ExitStandbyRequest } from "./ExitStandby/req";
import { ExitStandbyResponse } from "./ExitStandby/res";
import { DescribeScalingRulesRequest } from "./DescribeScalingRules/req";
import { DescribeScalingRulesResponse } from "./DescribeScalingRules/res";
import { DescribeScheduledTasksRequest } from "./DescribeScheduledTasks/req";
import { DescribeScheduledTasksResponse } from "./DescribeScheduledTasks/res";
import { EnableScalingGroupRequest } from "./EnableScalingGroup/req";
import { EnableScalingGroupResponse } from "./EnableScalingGroup/res";
import { DescribeScalingInstancesRequest } from "./DescribeScalingInstances/req";
import { DescribeScalingInstancesResponse } from "./DescribeScalingInstances/res";
import { AttachInstancesRequest } from "./AttachInstances/req";
import { AttachInstancesResponse } from "./AttachInstances/res";
import { DeleteLifecycleHookRequest } from "./DeleteLifecycleHook/req";
import { DeleteLifecycleHookResponse } from "./DeleteLifecycleHook/res";
import { CreateNotificationConfigurationRequest } from "./CreateNotificationConfiguration/req";
import { CreateNotificationConfigurationResponse } from "./CreateNotificationConfiguration/res";
import { ModifyNotificationConfigurationRequest } from "./ModifyNotificationConfiguration/req";
import { ModifyNotificationConfigurationResponse } from "./ModifyNotificationConfiguration/res";
import { RecordLifecycleActionHeartbeatRequest } from "./RecordLifecycleActionHeartbeat/req";
import { RecordLifecycleActionHeartbeatResponse } from "./RecordLifecycleActionHeartbeat/res";
import { DescribeNotificationConfigurationsRequest } from "./DescribeNotificationConfigurations/req";
import { DescribeNotificationConfigurationsResponse } from "./DescribeNotificationConfigurations/res";
import { DeleteScheduledTaskRequest } from "./DeleteScheduledTask/req";
import { DeleteScheduledTaskResponse } from "./DeleteScheduledTask/res";
import { DescribeLifecycleHooksRequest } from "./DescribeLifecycleHooks/req";
import { DescribeLifecycleHooksResponse } from "./DescribeLifecycleHooks/res";
import { DeleteNotificationConfigurationRequest } from "./DeleteNotificationConfiguration/req";
import { DeleteNotificationConfigurationResponse } from "./DeleteNotificationConfiguration/res";
import { RemoveInstancesRequest } from "./RemoveInstances/req";
import { RemoveInstancesResponse } from "./RemoveInstances/res";
import { ModifyScheduledTaskRequest } from "./ModifyScheduledTask/req";
import { ModifyScheduledTaskResponse } from "./ModifyScheduledTask/res";
import { ModifyLifecycleHookRequest } from "./ModifyLifecycleHook/req";
import { ModifyLifecycleHookResponse } from "./ModifyLifecycleHook/res";
import { CreateLifecycleHookRequest } from "./CreateLifecycleHook/req";
import { CreateLifecycleHookResponse } from "./CreateLifecycleHook/res";
import { CreateScalingRuleRequest } from "./CreateScalingRule/req";
import { CreateScalingRuleResponse } from "./CreateScalingRule/res";
import { DetachInstancesRequest } from "./DetachInstances/req";
import { DetachInstancesResponse } from "./DetachInstances/res";
import { AttachLoadBalancersRequest } from "./AttachLoadBalancers/req";
import { AttachLoadBalancersResponse } from "./AttachLoadBalancers/res";
import { DetachDBInstancesRequest } from "./DetachDBInstances/req";
import { DetachDBInstancesResponse } from "./DetachDBInstances/res";
import { DeleteScalingGroupRequest } from "./DeleteScalingGroup/req";
import { DeleteScalingGroupResponse } from "./DeleteScalingGroup/res";
import { DetachLoadBalancersRequest } from "./DetachLoadBalancers/req";
import { DetachLoadBalancersResponse } from "./DetachLoadBalancers/res";
import { ModifyScalingGroupRequest } from "./ModifyScalingGroup/req";
import { ModifyScalingGroupResponse } from "./ModifyScalingGroup/res";
import { CreateScalingGroupRequest } from "./CreateScalingGroup/req";
import { CreateScalingGroupResponse } from "./CreateScalingGroup/res";
import { DisableScalingGroupRequest } from "./DisableScalingGroup/req";
import { DisableScalingGroupResponse } from "./DisableScalingGroup/res";
import { ModifyScalingConfigurationRequest } from "./ModifyScalingConfiguration/req";
import { ModifyScalingConfigurationResponse } from "./ModifyScalingConfiguration/res";
import { DescribeScalingConfigurationsRequest } from "./DescribeScalingConfigurations/req";
import { DescribeScalingConfigurationsResponse } from "./DescribeScalingConfigurations/res";
import { DeleteScalingConfigurationRequest } from "./DeleteScalingConfiguration/req";
import { DeleteScalingConfigurationResponse } from "./DeleteScalingConfiguration/res";
import { ExecuteScalingRuleRequest } from "./ExecuteScalingRule/req";
import { ExecuteScalingRuleResponse } from "./ExecuteScalingRule/res";
import { DeleteScalingRuleRequest } from "./DeleteScalingRule/req";
import { DeleteScalingRuleResponse } from "./DeleteScalingRule/res";
import { CreateScheduledTaskRequest } from "./CreateScheduledTask/req";
import { CreateScheduledTaskResponse } from "./CreateScheduledTask/res";
import { ModifyScalingRuleRequest } from "./ModifyScalingRule/req";
import { ModifyScalingRuleResponse } from "./ModifyScalingRule/res";
import { AttachDBInstancesRequest } from "./AttachDBInstances/req";
import { AttachDBInstancesResponse } from "./AttachDBInstances/res";
import { CreateScalingConfigurationRequest } from "./CreateScalingConfiguration/req";
import { CreateScalingConfigurationResponse } from "./CreateScalingConfiguration/res";
import { DescribeScalingGroupsRequest } from "./DescribeScalingGroups/req";
import { DescribeScalingGroupsResponse } from "./DescribeScalingGroups/res";
import { DetachVServerGroupsRequest } from "./DetachVServerGroups/req";
import { DetachVServerGroupsResponse } from "./DetachVServerGroups/res";
import { AttachVServerGroupsRequest } from "./AttachVServerGroups/req";
import { AttachVServerGroupsResponse } from "./AttachVServerGroups/res";
import { DescribeScalingActivityDetailRequest } from "./DescribeScalingActivityDetail/req";
import { DescribeScalingActivityDetailResponse } from "./DescribeScalingActivityDetail/res";
import { DeactivateScalingConfigurationRequest } from "./DeactivateScalingConfiguration/req";
import { DeactivateScalingConfigurationResponse } from "./DeactivateScalingConfiguration/res";
import { DescribeLimitationRequest } from "./DescribeLimitation/req";
import { DescribeLimitationResponse } from "./DescribeLimitation/res";
import { VerifyAuthenticationRequest } from "./VerifyAuthentication/req";
import { VerifyAuthenticationResponse } from "./VerifyAuthentication/res";
import { VerifyUserRequest } from "./VerifyUser/req";
import { VerifyUserResponse } from "./VerifyUser/res";
import { CreateAlarmRequest } from "./CreateAlarm/req";
import { CreateAlarmResponse } from "./CreateAlarm/res";
import { DeleteAlarmRequest } from "./DeleteAlarm/req";
import { DeleteAlarmResponse } from "./DeleteAlarm/res";
import { DescribeAlarmsRequest } from "./DescribeAlarms/req";
import { DescribeAlarmsResponse } from "./DescribeAlarms/res";
import { DisableAlarmRequest } from "./DisableAlarm/req";
import { DisableAlarmResponse } from "./DisableAlarm/res";
import { EnableAlarmRequest } from "./EnableAlarm/req";
import { EnableAlarmResponse } from "./EnableAlarm/res";
import { ModifyAlarmRequest } from "./ModifyAlarm/req";
import { ModifyAlarmResponse } from "./ModifyAlarm/res";

interface ESS {
    /**
    * 调用CompleteLifecycleAction提前结束伸缩活动的等待状态。
    */ CompleteLifecycleAction(query: CompleteLifecycleActionRequest): Promise<CompleteLifecycleActionResponse>;
    /**
    * 调用DescribeRegions查询可以使用弹性伸缩服务的地域。
    */ DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
    * 调用DescribeScalingActivities查询伸缩活动。
    */ DescribeScalingActivities(query: DescribeScalingActivitiesRequest): Promise<DescribeScalingActivitiesResponse>;
    /**
    * 调用RebalanceInstances重新平衡多可用区伸缩组内ECS实例的分布。
    */ RebalanceInstances(query: RebalanceInstancesRequest): Promise<RebalanceInstancesResponse>;
    /**
    * 调用SetInstancesProtection保护或者停止保护伸缩组内的一台或者多台ECS实例。
    */ SetInstancesProtection(query: SetInstancesProtectionRequest): Promise<SetInstancesProtectionResponse>;
    /**
    * 调用EnterStandby将伸缩组内的ECS实例设置为备用状态。
    */ EnterStandby(query: EnterStandbyRequest): Promise<EnterStandbyResponse>;
    /**
    * 调用DescribeNotificationTypes查询弹性伸缩事件及资源变化通知的类型。
    */ DescribeNotificationTypes(query: DescribeNotificationTypesRequest): Promise<DescribeNotificationTypesResponse>;
    /**
    * 调用ExitStandby使伸缩组内处于备用状态的ECS实例进入运行状态。
    */ ExitStandby(query: ExitStandbyRequest): Promise<ExitStandbyResponse>;
    /**
    * 调用DescribeScalingRules查询伸缩组下的伸缩规则，并列出伸缩规则的信息。
    */ DescribeScalingRules(query: DescribeScalingRulesRequest): Promise<DescribeScalingRulesResponse>;
    /**
    * 调用DescribeScheduledTasks查询定时任务的信息。
    */ DescribeScheduledTasks(query: DescribeScheduledTasksRequest): Promise<DescribeScheduledTasksResponse>;
    /**
    * 调用EnableScalingGroup启用一个伸缩组。
    */ EnableScalingGroup(query: EnableScalingGroupRequest): Promise<EnableScalingGroupResponse>;
    /**
    * 调用DescribeScalingInstances查询伸缩组内ECS实例的列表，并列出ECS实例的信息。
    */ DescribeScalingInstances(query: DescribeScalingInstancesRequest): Promise<DescribeScalingInstancesResponse>;
    /**
    * 调用AttachInstances为伸缩组添加ECS实例。
    */ AttachInstances(query: AttachInstancesRequest): Promise<AttachInstancesResponse>;
    /**
    * 调用DeleteLifecycleHook删除一个生命周期挂钩。
    */ DeleteLifecycleHook(query: DeleteLifecycleHookRequest): Promise<DeleteLifecycleHookResponse>;
    /**
    * 调用CreateNotificationConfiguration创建弹性伸缩事件及资源变化通知。
    */ CreateNotificationConfiguration(query: CreateNotificationConfigurationRequest): Promise<CreateNotificationConfigurationResponse>;
    /**
    * 调用ModifyNotificationConfiguration修改一条弹性伸缩事件及资源变化通知的信息。
    */ ModifyNotificationConfiguration(query: ModifyNotificationConfigurationRequest): Promise<ModifyNotificationConfigurationResponse>;
    /**
    * 调用RecordLifecycleActionHeartbeat延长一个生命周期挂钩触发后被挂起的ECS实例的等待时间。
    */ RecordLifecycleActionHeartbeat(query: RecordLifecycleActionHeartbeatRequest): Promise<RecordLifecycleActionHeartbeatResponse>;
    /**
    * 调用DescribeNotificationConfigurations查询您创建的弹性伸缩事件及资源变化通知。
    */ DescribeNotificationConfigurations(query: DescribeNotificationConfigurationsRequest): Promise<DescribeNotificationConfigurationsResponse>;
    /**
    * 调用DeleteScheduledTask删除一个定时任务。
    */ DeleteScheduledTask(query: DeleteScheduledTaskRequest): Promise<DeleteScheduledTaskResponse>;
    /**
    * 调用DescribeLifecycleHooks查询生命周期挂钩。
    */ DescribeLifecycleHooks(query: DescribeLifecycleHooksRequest): Promise<DescribeLifecycleHooksResponse>;
    /**
    * 调用DeleteNotificationConfiguration删除一条弹性伸缩事件及资源变化通知。
    */ DeleteNotificationConfiguration(query: DeleteNotificationConfigurationRequest): Promise<DeleteNotificationConfigurationResponse>;
    /**
    * 调用RemoveInstances从一个伸缩组里移出ECS实例。
    */ RemoveInstances(query: RemoveInstancesRequest): Promise<RemoveInstancesResponse>;
    /**
    * 调用ModifyScheduledTask修改一个定时任务的信息。
    */ ModifyScheduledTask(query: ModifyScheduledTaskRequest): Promise<ModifyScheduledTaskResponse>;
    /**
    * 调用ModifyLifecycleHook修改一个生命周期挂钩的信息。
    */ ModifyLifecycleHook(query: ModifyLifecycleHookRequest): Promise<ModifyLifecycleHookResponse>;
    /**
    * 调用CreateLifecycleHook为伸缩组创建一个或多个生命周期挂钩。
    */ CreateLifecycleHook(query: CreateLifecycleHookRequest): Promise<CreateLifecycleHookResponse>;
    /**
    * 调用CreateScalingRule创建一条伸缩规则。
    */ CreateScalingRule(query: CreateScalingRuleRequest): Promise<CreateScalingRuleResponse>;
    /**
    * 调用DetachInstances从一个伸缩组分离一台或多台ECS实例。
    */ DetachInstances(query: DetachInstancesRequest): Promise<DetachInstancesResponse>;
    /**
    * 调用AttachLoadBalancers添加一个或多个负载均衡实例。
    */ AttachLoadBalancers(query: AttachLoadBalancersRequest): Promise<AttachLoadBalancersResponse>;
    /**
    * 调用DetachDBInstances移除一个或多个RDS实例。
    */ DetachDBInstances(query: DetachDBInstancesRequest): Promise<DetachDBInstancesResponse>;
    /**
    * 调用DeleteScalingGroup删除一个伸缩组。
    */ DeleteScalingGroup(query: DeleteScalingGroupRequest): Promise<DeleteScalingGroupResponse>;
    /**
    * 调用DetachLoadBalancers移除一个或多个负载均衡实例。
    */ DetachLoadBalancers(query: DetachLoadBalancersRequest): Promise<DetachLoadBalancersResponse>;
    /**
    * 调用ModifyScalingGroup修改一个伸缩组。
    */ ModifyScalingGroup(query: ModifyScalingGroupRequest): Promise<ModifyScalingGroupResponse>;
    /**
    * 调用CreateScalingGroup创建一个伸缩组。
    */ CreateScalingGroup(query: CreateScalingGroupRequest): Promise<CreateScalingGroupResponse>;
    /**
    * 调用DisableScalingGroup停用一个伸缩组。
    */ DisableScalingGroup(query: DisableScalingGroupRequest): Promise<DisableScalingGroupResponse>;
    /**
    * 调用ModifyScalingConfiguration修改一个伸缩配置。
    */ ModifyScalingConfiguration(query: ModifyScalingConfigurationRequest): Promise<ModifyScalingConfigurationResponse>;
    /**
    * 调用DescribeScalingConfigurations查询现有的伸缩配置。
    */ DescribeScalingConfigurations(query: DescribeScalingConfigurationsRequest): Promise<DescribeScalingConfigurationsResponse>;
    /**
    * 调用DeleteScalingConfiguration删除一个伸缩配置。
    */ DeleteScalingConfiguration(query: DeleteScalingConfigurationRequest): Promise<DeleteScalingConfigurationResponse>;
    /**
    * 调用ExecuteScalingRule执行一条伸缩规则。
    */ ExecuteScalingRule(query: ExecuteScalingRuleRequest): Promise<ExecuteScalingRuleResponse>;
    /**
    * 调用DeleteScalingRule删除一条伸缩规则。
    */ DeleteScalingRule(query: DeleteScalingRuleRequest): Promise<DeleteScalingRuleResponse>;
    /**
    * 调用CreateScheduledTask创建一个定时任务。
    */ CreateScheduledTask(query: CreateScheduledTaskRequest): Promise<CreateScheduledTaskResponse>;
    /**
    * 调用ModifyScalingRule修改一条伸缩规则。
    */ ModifyScalingRule(query: ModifyScalingRuleRequest): Promise<ModifyScalingRuleResponse>;
    /**
    * 调用AttachDBInstances添加一个或多个RDS实例。
    */ AttachDBInstances(query: AttachDBInstancesRequest): Promise<AttachDBInstancesResponse>;
    /**
    * 调用CreateScalingConfiguration创建一个伸缩配置。
    */ CreateScalingConfiguration(query: CreateScalingConfigurationRequest): Promise<CreateScalingConfigurationResponse>;
    /**
    * 调用DescribeScalingGroups查询伸缩组。
    */ DescribeScalingGroups(query: DescribeScalingGroupsRequest): Promise<DescribeScalingGroupsResponse>;
    /**
    * 调用DetachVServerGroups移除一个或者多个虚拟服务器组。
    */ DetachVServerGroups(query: DetachVServerGroupsRequest): Promise<DetachVServerGroupsResponse>;
    AttachVServerGroups(query: AttachVServerGroupsRequest): Promise<AttachVServerGroupsResponse>;
    DescribeScalingActivityDetail(query: DescribeScalingActivityDetailRequest): Promise<DescribeScalingActivityDetailResponse>;
    DeactivateScalingConfiguration(query: DeactivateScalingConfigurationRequest): Promise<DeactivateScalingConfigurationResponse>;
    DescribeLimitation(query: DescribeLimitationRequest): Promise<DescribeLimitationResponse>;
    VerifyAuthentication(query: VerifyAuthenticationRequest): Promise<VerifyAuthenticationResponse>;
    VerifyUser(query: VerifyUserRequest): Promise<VerifyUserResponse>;
    CreateAlarm(query: CreateAlarmRequest): Promise<CreateAlarmResponse>;
    DeleteAlarm(query: DeleteAlarmRequest): Promise<DeleteAlarmResponse>;
    DescribeAlarms(query: DescribeAlarmsRequest): Promise<DescribeAlarmsResponse>;
    DisableAlarm(query: DisableAlarmRequest): Promise<DisableAlarmResponse>;
    EnableAlarm(query: EnableAlarmRequest): Promise<EnableAlarmResponse>;
    ModifyAlarm(query: ModifyAlarmRequest): Promise<ModifyAlarmResponse>;
}
export default ESS;
