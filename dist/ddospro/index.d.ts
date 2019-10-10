import { DescribeCcEventsRequest } from "./DescribeCcEvents/req";
import { DescribeCcEventsResponse } from "./DescribeCcEvents/res";
import { DescribeBackSourceCidrRequest } from "./DescribeBackSourceCidr/req";
import { DescribeBackSourceCidrResponse } from "./DescribeBackSourceCidr/res";
import { UpdatePortRuleRequest } from "./UpdatePortRule/req";
import { UpdatePortRuleResponse } from "./UpdatePortRule/res";
import { CreateCcCustomedRuleRequest } from "./CreateCcCustomedRule/req";
import { CreateCcCustomedRuleResponse } from "./CreateCcCustomedRule/res";
import { ConfigSwitchPriorityRequest } from "./ConfigSwitchPriority/req";
import { ConfigSwitchPriorityResponse } from "./ConfigSwitchPriority/res";
import { ModifyTransmitLineRequest } from "./ModifyTransmitLine/req";
import { ModifyTransmitLineResponse } from "./ModifyTransmitLine/res";
import { DescribeDomainSecurityConfigRequest } from "./DescribeDomainSecurityConfig/req";
import { DescribeDomainSecurityConfigResponse } from "./DescribeDomainSecurityConfig/res";
import { ModifyPersistenceTimeOutRequest } from "./ModifyPersistenceTimeOut/req";
import { ModifyPersistenceTimeOutResponse } from "./ModifyPersistenceTimeOut/res";
import { DescribeDdosAttackEventSourceIpsRequest } from "./DescribeDdosAttackEventSourceIps/req";
import { DescribeDdosAttackEventSourceIpsResponse } from "./DescribeDdosAttackEventSourceIps/res";
import { DeleteCcCustomedRuleRequest } from "./DeleteCcCustomedRule/req";
import { DeleteCcCustomedRuleResponse } from "./DeleteCcCustomedRule/res";
import { DeleteTransmitLineRequest } from "./DeleteTransmitLine/req";
import { DeleteTransmitLineResponse } from "./DeleteTransmitLine/res";
import { UpdateCcCustomedRuleRequest } from "./UpdateCcCustomedRule/req";
import { UpdateCcCustomedRuleResponse } from "./UpdateCcCustomedRule/res";
import { ModifyDomainBlackWhiteListRequest } from "./ModifyDomainBlackWhiteList/req";
import { ModifyDomainBlackWhiteListResponse } from "./ModifyDomainBlackWhiteList/res";
import { ModifyRealServersRequest } from "./ModifyRealServers/req";
import { ModifyRealServersResponse } from "./ModifyRealServers/res";
import { CreateTransmitLineRequest } from "./CreateTransmitLine/req";
import { CreateTransmitLineResponse } from "./CreateTransmitLine/res";
import { ModifyCcTemplateRequest } from "./ModifyCcTemplate/req";
import { ModifyCcTemplateResponse } from "./ModifyCcTemplate/res";
import { ModifyCcStatusRequest } from "./ModifyCcStatus/req";
import { ModifyCcStatusResponse } from "./ModifyCcStatus/res";
import { DeleteDomainRequest } from "./DeleteDomain/req";
import { DeleteDomainResponse } from "./DeleteDomain/res";
import { ModifyDomainProxyRequest } from "./ModifyDomainProxy/req";
import { ModifyDomainProxyResponse } from "./ModifyDomainProxy/res";
import { DescribeDdosAttackTypeChartRequest } from "./DescribeDdosAttackTypeChart/req";
import { DescribeDdosAttackTypeChartResponse } from "./DescribeDdosAttackTypeChart/res";
import { ModifyCcCustomStatusRequest } from "./ModifyCcCustomStatus/req";
import { ModifyCcCustomStatusResponse } from "./ModifyCcCustomStatus/res";
import { ModifyIpCnameStatusRequest } from "./ModifyIpCnameStatus/req";
import { ModifyIpCnameStatusResponse } from "./ModifyIpCnameStatus/res";
import { DescribeDdosFlowProportionDiagramRequest } from "./DescribeDdosFlowProportionDiagram/req";
import { DescribeDdosFlowProportionDiagramResponse } from "./DescribeDdosFlowProportionDiagram/res";
import { DescribeDdosAttackEventsRequest } from "./DescribeDdosAttackEvents/req";
import { DescribeDdosAttackEventsResponse } from "./DescribeDdosAttackEvents/res";
import { DescribeDomainConfigPageRequest } from "./DescribeDomainConfigPage/req";
import { DescribeDomainConfigPageResponse } from "./DescribeDomainConfigPage/res";
import { ModifyHealthCheckConfigRequest } from "./ModifyHealthCheckConfig/req";
import { ModifyHealthCheckConfigResponse } from "./ModifyHealthCheckConfig/res";
import { DescribeHealthCheckConfigRequest } from "./DescribeHealthCheckConfig/req";
import { DescribeHealthCheckConfigResponse } from "./DescribeHealthCheckConfig/res";
import { ModifyDDoSProtectConfigRequest } from "./ModifyDDoSProtectConfig/req";
import { ModifyDDoSProtectConfigResponse } from "./ModifyDDoSProtectConfig/res";
import { DescribeBizFlowRequest } from "./DescribeBizFlow/req";
import { DescribeBizFlowResponse } from "./DescribeBizFlow/res";
import { DescribeDdosIpConfigRequest } from "./DescribeDdosIpConfig/req";
import { DescribeDdosIpConfigResponse } from "./DescribeDdosIpConfig/res";
import { DeletePortRuleRequest } from "./DeletePortRule/req";
import { DeletePortRuleResponse } from "./DeletePortRule/res";
import { ListCcCustomedRuleRequest } from "./ListCcCustomedRule/req";
import { ListCcCustomedRuleResponse } from "./ListCcCustomedRule/res";
import { CreateDomainRequest } from "./CreateDomain/req";
import { CreateDomainResponse } from "./CreateDomain/res";
import { DescribeInstancePageRequest } from "./DescribeInstancePage/req";
import { DescribeInstancePageResponse } from "./DescribeInstancePage/res";
import { DescribeDdosPeakFlowRequest } from "./DescribeDdosPeakFlow/req";
import { DescribeDdosPeakFlowResponse } from "./DescribeDdosPeakFlow/res";
import { DescribePortRulePageRequest } from "./DescribePortRulePage/req";
import { DescribePortRulePageResponse } from "./DescribePortRulePage/res";
import { CreatePortRuleRequest } from "./CreatePortRule/req";
import { CreatePortRuleResponse } from "./CreatePortRule/res";
import { DescribeCnameAutoStatusRequest } from "./DescribeCnameAutoStatus/req";
import { DescribeCnameAutoStatusResponse } from "./DescribeCnameAutoStatus/res";
import { ModifyElasticBandwidthRequest } from "./ModifyElasticBandwidth/req";
import { ModifyElasticBandwidthResponse } from "./ModifyElasticBandwidth/res";

interface DDOSPRO {
    /**
    * 调用DescribeCcEvents接口查询用户域名的CC攻击事件。
    */ DescribeCcEvents(query: DescribeCcEventsRequest): Promise<DescribeCcEventsResponse>;
    /**
    * 调用DescribeBackSourceCidr接口查询高防回源网段地址。
    */ DescribeBackSourceCidr(query: DescribeBackSourceCidrRequest): Promise<DescribeBackSourceCidrResponse>;
    /**
    * 调用UpdatePortRule接口更新非网站转发规则。
    */ UpdatePortRule(query: UpdatePortRuleRequest): Promise<UpdatePortRuleResponse>;
    /**
    * 调用CreateCcCustomedRule接口创建网站安全防护CC自定义规则。
    */ CreateCcCustomedRule(query: CreateCcCustomedRuleRequest): Promise<CreateCcCustomedRuleResponse>;
    /**
    * 调用ConfigSwitchPriority接口修改网站防护中高防IP的调度优先级。
    */ ConfigSwitchPriority(query: ConfigSwitchPriorityRequest): Promise<ConfigSwitchPriorityResponse>;
    /**
    * 调用ModifyTransmitLine接口修改网站防护转发线路。
    */ ModifyTransmitLine(query: ModifyTransmitLineRequest): Promise<ModifyTransmitLineResponse>;
    /**
    * 调用DescribeDomainSecurityConfig接口查询用户域名的安全防护配置。
    */ DescribeDomainSecurityConfig(query: DescribeDomainSecurityConfigRequest): Promise<DescribeDomainSecurityConfigResponse>;
    /**
    * 调用ModifyPersistenceTimeOut接口配置会话保持时间。
    */ ModifyPersistenceTimeOut(query: ModifyPersistenceTimeOutRequest): Promise<ModifyPersistenceTimeOutResponse>;
    /**
    * 调用DescribeDdosAttackEventSourceIps接口查询高防IP攻击事件的源攻击IP列表。
    */ DescribeDdosAttackEventSourceIps(query: DescribeDdosAttackEventSourceIpsRequest): Promise<DescribeDdosAttackEventSourceIpsResponse>;
    /**
    * 调用DeleteCcCustomedRule接口删除网站安全防护CC自定义规则。
    */ DeleteCcCustomedRule(query: DeleteCcCustomedRuleRequest): Promise<DeleteCcCustomedRuleResponse>;
    /**
    * 调用DeleteTransmitLine接口删除网站防护转发线路。
    */ DeleteTransmitLine(query: DeleteTransmitLineRequest): Promise<DeleteTransmitLineResponse>;
    /**
    * 调用UpdateCcCustomedRule接口修改网站安全防护CC自定义规则。
    */ UpdateCcCustomedRule(query: UpdateCcCustomedRuleRequest): Promise<UpdateCcCustomedRuleResponse>;
    /**
    * 调用ModifyDomainBlackWhiteList接口修改网站安全防护的黑白名单。
    */ ModifyDomainBlackWhiteList(query: ModifyDomainBlackWhiteListRequest): Promise<ModifyDomainBlackWhiteListResponse>;
    /**
    * 调用ModifyRealServers接口修改网站防护配置中线路对应的源站。
    */ ModifyRealServers(query: ModifyRealServersRequest): Promise<ModifyRealServersResponse>;
    /**
    * 调用CreateTransmitLine接口添加网站防护转发线路。
    */ CreateTransmitLine(query: CreateTransmitLineRequest): Promise<CreateTransmitLineResponse>;
    /**
    * 调用ModifyCcTemplate接口修改网站安全防护CC防护模式。
    */ ModifyCcTemplate(query: ModifyCcTemplateRequest): Promise<ModifyCcTemplateResponse>;
    /**
    * 调用ModifyCcStatus接口启用或禁用网站安全CC攻击防护功能。
    */ ModifyCcStatus(query: ModifyCcStatusRequest): Promise<ModifyCcStatusResponse>;
    /**
    * 调用DeleteDomain接口删除网站防护规则。
    */ DeleteDomain(query: DeleteDomainRequest): Promise<DeleteDomainResponse>;
    /**
    * 调用ModifyDomainProxy接口修改网站防护的转发协议。
    */ ModifyDomainProxy(query: ModifyDomainProxyRequest): Promise<ModifyDomainProxyResponse>;
    /**
    * 调用DescribeDdosAttackTypeChart接口查询高防IP的攻击类型概览图表。
    */ DescribeDdosAttackTypeChart(query: DescribeDdosAttackTypeChartRequest): Promise<DescribeDdosAttackTypeChartResponse>;
    /**
    * 调用ModifyCcCustomStatus接口启用或禁用网站安全防护CC自定义规则。
    */ ModifyCcCustomStatus(query: ModifyCcCustomStatusRequest): Promise<ModifyCcCustomStatusResponse>;
    /**
    * 调用ModifyIpCnameStatus接口修改网站防护中高防IP的Cname解析状态。
    */ ModifyIpCnameStatus(query: ModifyIpCnameStatusRequest): Promise<ModifyIpCnameStatusResponse>;
    /**
    * 调用DescribeDdosFlowProportionDiagram接口查询高防IP的攻击比例图表。
    */ DescribeDdosFlowProportionDiagram(query: DescribeDdosFlowProportionDiagramRequest): Promise<DescribeDdosFlowProportionDiagramResponse>;
    /**
    * 调用DescribeDdosAttackEvents接口查询高防IP的攻击事件。
    */ DescribeDdosAttackEvents(query: DescribeDdosAttackEventsRequest): Promise<DescribeDdosAttackEventsResponse>;
    /**
    * 调用DescribeDomainConfigPage接口分页查询用户的网站配置列表。
    */ DescribeDomainConfigPage(query: DescribeDomainConfigPageRequest): Promise<DescribeDomainConfigPageResponse>;
    /**
    * 调用ModifyHealthCheckConfig接口修改健康检查配置。
    */ ModifyHealthCheckConfig(query: ModifyHealthCheckConfigRequest): Promise<ModifyHealthCheckConfigResponse>;
    /**
    * 调用DescribeHealthCheckConfig接口查询非网站转发健康检查类配置。
    */ DescribeHealthCheckConfig(query: DescribeHealthCheckConfigRequest): Promise<DescribeHealthCheckConfigResponse>;
    /**
    * 调用ModifyDDoSProtectConfig接口修改DDoS防护配置。
    */ ModifyDDoSProtectConfig(query: ModifyDDoSProtectConfigRequest): Promise<ModifyDDoSProtectConfigResponse>;
    /**
    * 调用DescribeBizFlow接口查询高防IP上的业务流量信息，包括入方向和出方向流量。
    */ DescribeBizFlow(query: DescribeBizFlowRequest): Promise<DescribeBizFlowResponse>;
    /**
    * 调用DescribeDdosIpConfig接口分页查询高防IP防护配置。
    */ DescribeDdosIpConfig(query: DescribeDdosIpConfigRequest): Promise<DescribeDdosIpConfigResponse>;
    /**
    * 调用DeletePortRule接口删除非网站转发规则。
    */ DeletePortRule(query: DeletePortRuleRequest): Promise<DeletePortRuleResponse>;
    /**
    * 调用ListCcCustomedRule接口查询用户的自定义CC规则。
    */ ListCcCustomedRule(query: ListCcCustomedRuleRequest): Promise<ListCcCustomedRuleResponse>;
    /**
    * 调用CreateDomain接口创建网站防护规则。
    */ CreateDomain(query: CreateDomainRequest): Promise<CreateDomainResponse>;
    /**
    * 调用DescribeInstancePage接口查询高防IP的实例信息。
    */ DescribeInstancePage(query: DescribeInstancePageRequest): Promise<DescribeInstancePageResponse>;
    /**
    * 调用DescribeDdosPeakFlow接口查询高防IP的攻击峰值。
    */ DescribeDdosPeakFlow(query: DescribeDdosPeakFlowRequest): Promise<DescribeDdosPeakFlowResponse>;
    /**
    * 调用DescribePortRulePage接口分页查询非网站转发规则。
    */ DescribePortRulePage(query: DescribePortRulePageRequest): Promise<DescribePortRulePageResponse>;
    /**
    * 调用CreatePortRule接口创建非网站转发规则。
    */ CreatePortRule(query: CreatePortRuleRequest): Promise<CreatePortRuleResponse>;
    DescribeCnameAutoStatus(query: DescribeCnameAutoStatusRequest): Promise<DescribeCnameAutoStatusResponse>;
    ModifyElasticBandwidth(query: ModifyElasticBandwidthRequest): Promise<ModifyElasticBandwidthResponse>;
}
export default DDOSPRO;
