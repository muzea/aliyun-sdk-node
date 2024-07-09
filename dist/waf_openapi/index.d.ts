import { CreateCertificateRequest } from "./CreateCertificate/req";
import { CreateCertificateResponse } from "./CreateCertificate/res";
import { CreateCertificateByCertificateIdRequest } from "./CreateCertificateByCertificateId/req";
import { CreateCertificateByCertificateIdResponse } from "./CreateCertificateByCertificateId/res";
import { CreateDomainRequest } from "./CreateDomain/req";
import { CreateDomainResponse } from "./CreateDomain/res";
import { DeleteDomainRequest } from "./DeleteDomain/req";
import { DeleteDomainResponse } from "./DeleteDomain/res";
import { CreateProtectionModuleRuleRequest } from "./CreateProtectionModuleRule/req";
import { CreateProtectionModuleRuleResponse } from "./CreateProtectionModuleRule/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { DescribeCertMatchStatusRequest } from "./DescribeCertMatchStatus/req";
import { DescribeCertMatchStatusResponse } from "./DescribeCertMatchStatus/res";
import { DeleteProtectionModuleRuleRequest } from "./DeleteProtectionModuleRule/req";
import { DeleteProtectionModuleRuleResponse } from "./DeleteProtectionModuleRule/res";
import { DescribeCertificatesRequest } from "./DescribeCertificates/req";
import { DescribeCertificatesResponse } from "./DescribeCertificates/res";
import { DescribeDomainRequest } from "./DescribeDomain/req";
import { DescribeDomainResponse } from "./DescribeDomain/res";
import { DescribeDomainAdvanceConfigsRequest } from "./DescribeDomainAdvanceConfigs/req";
import { DescribeDomainAdvanceConfigsResponse } from "./DescribeDomainAdvanceConfigs/res";
import { DescribeDomainBasicConfigsRequest } from "./DescribeDomainBasicConfigs/req";
import { DescribeDomainBasicConfigsResponse } from "./DescribeDomainBasicConfigs/res";
import { DescribeDomainNamesRequest } from "./DescribeDomainNames/req";
import { DescribeDomainNamesResponse } from "./DescribeDomainNames/res";
import { DescribeDomainRuleGroupRequest } from "./DescribeDomainRuleGroup/req";
import { DescribeDomainRuleGroupResponse } from "./DescribeDomainRuleGroup/res";
import { DescribeInstanceInfoRequest } from "./DescribeInstanceInfo/req";
import { DescribeInstanceInfoResponse } from "./DescribeInstanceInfo/res";
import { DescribeInstanceSpecInfoRequest } from "./DescribeInstanceSpecInfo/req";
import { DescribeInstanceSpecInfoResponse } from "./DescribeInstanceSpecInfo/res";
import { DescribeProtectionModuleModeRequest } from "./DescribeProtectionModuleMode/req";
import { DescribeProtectionModuleModeResponse } from "./DescribeProtectionModuleMode/res";
import { DescribeProtectionModuleRulesRequest } from "./DescribeProtectionModuleRules/req";
import { DescribeProtectionModuleRulesResponse } from "./DescribeProtectionModuleRules/res";
import { DescribeProtectionModuleStatusRequest } from "./DescribeProtectionModuleStatus/req";
import { DescribeProtectionModuleStatusResponse } from "./DescribeProtectionModuleStatus/res";
import { DescribeWafSourceIpSegmentRequest } from "./DescribeWafSourceIpSegment/req";
import { DescribeWafSourceIpSegmentResponse } from "./DescribeWafSourceIpSegment/res";
import { ModifyDomainIpv6StatusRequest } from "./ModifyDomainIpv6Status/req";
import { ModifyDomainIpv6StatusResponse } from "./ModifyDomainIpv6Status/res";
import { ModifyLogRetrievalStatusRequest } from "./ModifyLogRetrievalStatus/req";
import { ModifyLogRetrievalStatusResponse } from "./ModifyLogRetrievalStatus/res";
import { ModifyLogServiceStatusRequest } from "./ModifyLogServiceStatus/req";
import { ModifyLogServiceStatusResponse } from "./ModifyLogServiceStatus/res";
import { ModifyProtectionModuleModeRequest } from "./ModifyProtectionModuleMode/req";
import { ModifyProtectionModuleModeResponse } from "./ModifyProtectionModuleMode/res";
import { ModifyProtectionModuleRuleRequest } from "./ModifyProtectionModuleRule/req";
import { ModifyProtectionModuleRuleResponse } from "./ModifyProtectionModuleRule/res";
import { ModifyProtectionModuleStatusRequest } from "./ModifyProtectionModuleStatus/req";
import { ModifyProtectionModuleStatusResponse } from "./ModifyProtectionModuleStatus/res";
import { ModifyProtectionRuleCacheStatusRequest } from "./ModifyProtectionRuleCacheStatus/req";
import { ModifyProtectionRuleCacheStatusResponse } from "./ModifyProtectionRuleCacheStatus/res";
import { ModifyProtectionRuleStatusRequest } from "./ModifyProtectionRuleStatus/req";
import { ModifyProtectionRuleStatusResponse } from "./ModifyProtectionRuleStatus/res";
import { SetDomainRuleGroupRequest } from "./SetDomainRuleGroup/req";
import { SetDomainRuleGroupResponse } from "./SetDomainRuleGroup/res";
import { ModifyDomainRequest } from "./ModifyDomain/req";
import { ModifyDomainResponse } from "./ModifyDomain/res";
import { DescribeProtectionModuleCodeConfigRequest } from "./DescribeProtectionModuleCodeConfig/req";
import { DescribeProtectionModuleCodeConfigResponse } from "./DescribeProtectionModuleCodeConfig/res";
import { DescribeLogServiceStatusRequest } from "./DescribeLogServiceStatus/req";
import { DescribeLogServiceStatusResponse } from "./DescribeLogServiceStatus/res";
import { DescribeDomainListRequest } from "./DescribeDomainList/req";
import { DescribeDomainListResponse } from "./DescribeDomainList/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";
import { DescribeRulesRequest } from "./DescribeRules/req";
import { DescribeRulesResponse } from "./DescribeRules/res";
import { DescribeRuleGroupsRequest } from "./DescribeRuleGroups/req";
import { DescribeRuleGroupsResponse } from "./DescribeRuleGroups/res";

interface WAF_OPENAPI {
    /**
     * 为已添加的域名配置记录上传证书及私钥信息。
     */
    CreateCertificate(query: CreateCertificateRequest): Promise<CreateCertificateResponse>;
    /**
     * 调用CreateCertificateByCertificateId接口根据证书ID为指定域名创建证书。
     */
    CreateCertificateByCertificateId(query: CreateCertificateByCertificateIdRequest): Promise<CreateCertificateByCertificateIdResponse>;
    /**
     * 将域名接入WAF实例进行防护。
     */
    CreateDomain(query: CreateDomainRequest): Promise<CreateDomainResponse>;
    /**
     * 删除指定域名配置信息。
     */
    DeleteDomain(query: DeleteDomainRequest): Promise<DeleteDomainResponse>;
    /**
     * 在指定的WAF防护功能模块创建配置规则，如Web入侵防护、数据安全、高级防护、Bot、访问控制、限流。
     */
    CreateProtectionModuleRule(query: CreateProtectionModuleRuleRequest): Promise<CreateProtectionModuleRuleResponse>;
    /**
     * 释放Web应用防火墙（WAF）按量付费实例或者到期的包年包月实例。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 检查指定域名配置上传的证书和私钥信息是否匹配。
     */
    DescribeCertMatchStatus(query: DescribeCertMatchStatusRequest): Promise<DescribeCertMatchStatusResponse>;
    /**
     * 调用DeleteProtectionModuleRule删除指定防护模块中配置的规则。
     */
    DeleteProtectionModuleRule(query: DeleteProtectionModuleRuleRequest): Promise<DeleteProtectionModuleRuleResponse>;
    /**
     * 获取指定域名可选的已有证书，即已在SSL证书中进行管理的证书。
     */
    DescribeCertificates(query: DescribeCertificatesRequest): Promise<DescribeCertificatesResponse>;
    /**
     * 查询已添加到WAF防护的域名的配置信息。
     */
    DescribeDomain(query: DescribeDomainRequest): Promise<DescribeDomainResponse>;
    /**
     * 调用DescribeDomainAdvanceConfigs查询已添加到WAF防护的域名的详细配置。
     */
    DescribeDomainAdvanceConfigs(query: DescribeDomainAdvanceConfigsRequest): Promise<DescribeDomainAdvanceConfigsResponse>;
    /**
     * 调用DescribeDomainBasicConfigs查询已接入WAF防护的网站域名的基本配置。
     */
    DescribeDomainBasicConfigs(query: DescribeDomainBasicConfigsRequest): Promise<DescribeDomainBasicConfigsResponse>;
    /**
     * 获取指定WAF实例中已添加的域名名称列表。
     */
    DescribeDomainNames(query: DescribeDomainNamesRequest): Promise<DescribeDomainNamesResponse>;
    /**
     * 调用DescribeDomainRuleGroup查询域名绑定的防护规则组的ID及智能规则托管功能的启用状态。
     */
    DescribeDomainRuleGroup(query: DescribeDomainRuleGroupRequest): Promise<DescribeDomainRuleGroupResponse>;
    /**
     * 查询当前阿里云账号下WAF实例的详情。
     */
    DescribeInstanceInfo(query: DescribeInstanceInfoRequest): Promise<DescribeInstanceInfoResponse>;
    /**
     * 查询WAF实例的规格信息。
     */
    DescribeInstanceSpecInfo(query: DescribeInstanceSpecInfoRequest): Promise<DescribeInstanceSpecInfoResponse>;
    /**
     * 获取指定域名配置当前的防护模式，如正则防护引擎、大数据深度学习引擎、CC安全防护、数据风控、主动防御。
     */
    DescribeProtectionModuleMode(query: DescribeProtectionModuleModeRequest): Promise<DescribeProtectionModuleModeResponse>;
    /**
     * 查询WAF防护功能规则配置记录，如Web入侵防护、数据安全、Bot管理、访问控制或限流、网站白名单。
     */
    DescribeProtectionModuleRules(query: DescribeProtectionModuleRulesRequest): Promise<DescribeProtectionModuleRulesResponse>;
    /**
     * 查询WAF各防护功能的状态，包括Web入侵防护、数据安全、高级防护、Bot管理、访问控制或限流等模块。
     */
    DescribeProtectionModuleStatus(query: DescribeProtectionModuleStatusRequest): Promise<DescribeProtectionModuleStatusResponse>;
    /**
     * 查询WAF防护集群使用的回源IP网段。
     */
    DescribeWafSourceIpSegment(query: DescribeWafSourceIpSegmentRequest): Promise<DescribeWafSourceIpSegmentResponse>;
    /**
     * 开启或关闭指定域名配置的IPv6安全防护功能。
     */
    ModifyDomainIpv6Status(query: ModifyDomainIpv6StatusRequest): Promise<ModifyDomainIpv6StatusResponse>;
    /**
     * 为指定域名开启或关闭日志检索功能。
     */
    ModifyLogRetrievalStatus(query: ModifyLogRetrievalStatusRequest): Promise<ModifyLogRetrievalStatusResponse>;
    /**
     * 调用ModifyLogServiceStatus接口开启或关闭指定域名配置的日志采集功能。
     */
    ModifyLogServiceStatus(query: ModifyLogServiceStatusRequest): Promise<ModifyLogServiceStatusResponse>;
    /**
     * 修改WAF防护模式，如正则防护引擎、大数据深度学习引擎、CC安全防护、数据风控、主动防御等模块。
     */
    ModifyProtectionModuleMode(query: ModifyProtectionModuleModeRequest): Promise<ModifyProtectionModuleModeResponse>;
    /**
     * 修改WAF防护功能的配置规则，如Web入侵防护、数据安全、高级防护、Bot、访问控制、限流、白名单。
     */
    ModifyProtectionModuleRule(query: ModifyProtectionModuleRuleRequest): Promise<ModifyProtectionModuleRuleResponse>;
    /**
     * 打开或关闭指定的WAF防护功能，如Web入侵防护、数据安全、高级防护、Bot管理、访问控制或限流。
     */
    ModifyProtectionModuleStatus(query: ModifyProtectionModuleStatusRequest): Promise<ModifyProtectionModuleStatusResponse>;
    /**
     * 更新指定网站防篡改规则所防护的页面的缓存。
     */
    ModifyProtectionRuleCacheStatus(query: ModifyProtectionRuleCacheStatusRequest): Promise<ModifyProtectionRuleCacheStatusResponse>;
    /**
     * 启用或禁用域名WAF防护功能模块，如网站防篡改、合法爬虫、爬虫威胁情报、自定义防护策略、网站白名单。
     */
    ModifyProtectionRuleStatus(query: ModifyProtectionRuleStatusRequest): Promise<ModifyProtectionRuleStatusResponse>;
    /**
     * 为指定域名配置选择正则防护引擎使用的防护规则组，除系统默认的三种防护规则组外，也可以选择自定义规则组。
     */
    SetDomainRuleGroup(query: SetDomainRuleGroupRequest): Promise<SetDomainRuleGroupResponse>;
    /**
     * 修改已创建的域名配置。
     */
    ModifyDomain(query: ModifyDomainRequest): Promise<ModifyDomainResponse>;
    /**
     * 调用DescribeProtectionModuleCodeConfig查询WAF地域级IP黑名单中支持配置的地域代码。
     */
    DescribeProtectionModuleCodeConfig(query: DescribeProtectionModuleCodeConfigRequest): Promise<DescribeProtectionModuleCodeConfigResponse>;
    /**
     * 查询已接入WAF进行防护的域名的日志采集状态（是否开启日志采集）。
     */
    DescribeLogServiceStatus(query: DescribeLogServiceStatusRequest): Promise<DescribeLogServiceStatusResponse>;
    /**
     * 调用DescribeDomainList分页查询已添加到WAF防护的域名列表。
     */
    DescribeDomainList(query: DescribeDomainListRequest): Promise<DescribeDomainListResponse>;
    /**
     * 将一个WAF资源转移到其他资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
    DescribeRules(query: DescribeRulesRequest): Promise<DescribeRulesResponse>;
    DescribeRuleGroups(query: DescribeRuleGroupsRequest): Promise<DescribeRuleGroupsResponse>;
}
export default WAF_OPENAPI;
