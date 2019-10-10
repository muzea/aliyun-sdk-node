import { DescribeAsyncTaskStatusRequest } from "./DescribeAsyncTaskStatus/req";
import { DescribeAsyncTaskStatusResponse } from "./DescribeAsyncTaskStatus/res";
import { ModifyProtectionRuleCacheStatusRequest } from "./ModifyProtectionRuleCacheStatus/req";
import { ModifyProtectionRuleCacheStatusResponse } from "./ModifyProtectionRuleCacheStatus/res";
import { DeleteAclRuleRequest } from "./DeleteAclRule/req";
import { DeleteAclRuleResponse } from "./DeleteAclRule/res";
import { CreateDomainConfigRequest } from "./CreateDomainConfig/req";
import { CreateDomainConfigResponse } from "./CreateDomainConfig/res";
import { CreateProtectionModuleRuleRequest } from "./CreateProtectionModuleRule/req";
import { CreateProtectionModuleRuleResponse } from "./CreateProtectionModuleRule/res";
import { DescribeAclRulesRequest } from "./DescribeAclRules/req";
import { DescribeAclRulesResponse } from "./DescribeAclRules/res";
import { DeleteDomainConfigRequest } from "./DeleteDomainConfig/req";
import { DeleteDomainConfigResponse } from "./DeleteDomainConfig/res";
import { ModifyDomainConfigRequest } from "./ModifyDomainConfig/req";
import { ModifyDomainConfigResponse } from "./ModifyDomainConfig/res";
import { CreateAclRuleRequest } from "./CreateAclRule/req";
import { CreateAclRuleResponse } from "./CreateAclRule/res";
import { CreateCertAndKeyRequest } from "./CreateCertAndKey/req";
import { CreateCertAndKeyResponse } from "./CreateCertAndKey/res";
import { ModifyAclRuleRequest } from "./ModifyAclRule/req";
import { ModifyAclRuleResponse } from "./ModifyAclRule/res";
import { DescribeDomainNamesRequest } from "./DescribeDomainNames/req";
import { DescribeDomainNamesResponse } from "./DescribeDomainNames/res";
import { DescribeProtectionModuleRulesRequest } from "./DescribeProtectionModuleRules/req";
import { DescribeProtectionModuleRulesResponse } from "./DescribeProtectionModuleRules/res";
import { ModifyWafSwitchRequest } from "./ModifyWafSwitch/req";
import { ModifyWafSwitchResponse } from "./ModifyWafSwitch/res";
import { DescribeDomainConfigRequest } from "./DescribeDomainConfig/req";
import { DescribeDomainConfigResponse } from "./DescribeDomainConfig/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeDomainConfigStatusRequest } from "./DescribeDomainConfigStatus/req";
import { DescribeDomainConfigStatusResponse } from "./DescribeDomainConfigStatus/res";
import { DescribePayInfoRequest } from "./DescribePayInfo/req";
import { DescribePayInfoResponse } from "./DescribePayInfo/res";
import { ModifyProtectionRuleStatusRequest } from "./ModifyProtectionRuleStatus/req";
import { ModifyProtectionRuleStatusResponse } from "./ModifyProtectionRuleStatus/res";
import { DescribeWafSourceIpSegmentRequest } from "./DescribeWafSourceIpSegment/req";
import { DescribeWafSourceIpSegmentResponse } from "./DescribeWafSourceIpSegment/res";
import { DescribeInstanceInfoRequest } from "./DescribeInstanceInfo/req";
import { DescribeInstanceInfoResponse } from "./DescribeInstanceInfo/res";
import { ModifyProtectionModuleStatusRequest } from "./ModifyProtectionModuleStatus/req";
import { ModifyProtectionModuleStatusResponse } from "./ModifyProtectionModuleStatus/res";

interface WAF_OPENAPI {
    /**
    * 调用DescribeAsyncTaskStatus接口查询WAF任务执行状态。
    */ DescribeAsyncTaskStatus(query: DescribeAsyncTaskStatusRequest): Promise<DescribeAsyncTaskStatusResponse>;
    /**
    * 调用ModifyProtectionRuleCacheStatus接口更新指定网站防篡改规则所防护的页面的缓存。
    */ ModifyProtectionRuleCacheStatus(query: ModifyProtectionRuleCacheStatusRequest): Promise<ModifyProtectionRuleCacheStatusResponse>;
    /**
    * 调用DeleteAclRule接口删除指定精准访问控制规则。
    */ DeleteAclRule(query: DeleteAclRuleRequest): Promise<DeleteAclRuleResponse>;
    /**
    * 调用CreateDomainConfig接口添加域名配置信息。
    */ CreateDomainConfig(query: CreateDomainConfigRequest): Promise<CreateDomainConfigResponse>;
    /**
    * 调用CreateProtectionModuleRule接口新增一条防护规则。
    */ CreateProtectionModuleRule(query: CreateProtectionModuleRuleRequest): Promise<CreateProtectionModuleRuleResponse>;
    /**
    * 调用DescribeAclRules接口获取指定域名的精准访问控制规则列表。
    */ DescribeAclRules(query: DescribeAclRulesRequest): Promise<DescribeAclRulesResponse>;
    /**
    * 调用DeleteDomainConfig接口删除指定域名配置信息。
    */ DeleteDomainConfig(query: DeleteDomainConfigRequest): Promise<DeleteDomainConfigResponse>;
    /**
    * 调用ModifyDomainConfig接口修改指定域名配置信息。
    */ ModifyDomainConfig(query: ModifyDomainConfigRequest): Promise<ModifyDomainConfigResponse>;
    /**
    * 调用CreateAclRule接口为指定域名添加精准访问控制规则。
    */ CreateAclRule(query: CreateAclRuleRequest): Promise<CreateAclRuleResponse>;
    /**
    * 调用CreateCertAndKey接口为已添加的域名配置记录上传证书及私钥信息。
    */ CreateCertAndKey(query: CreateCertAndKeyRequest): Promise<CreateCertAndKeyResponse>;
    /**
    * 调用ModifyAclRule接口修改指定精准访问控制规则。
    */ ModifyAclRule(query: ModifyAclRuleRequest): Promise<ModifyAclRuleResponse>;
    /**
    * 调用DescribeDomainNames接口获取指定WAF实例中已添加的域名名称列表。
    */ DescribeDomainNames(query: DescribeDomainNamesRequest): Promise<DescribeDomainNamesResponse>;
    /**
    * 调用DescribeProtectionModuleRules接口查询所有网站防篡改规则的信息。
    */ DescribeProtectionModuleRules(query: DescribeProtectionModuleRulesRequest): Promise<DescribeProtectionModuleRulesResponse>;
    /**
    * 调用ModifyWafSwitch接口打开或关闭Web攻击防护功能开关。
    */ ModifyWafSwitch(query: ModifyWafSwitchRequest): Promise<ModifyWafSwitchResponse>;
    /**
    * 调用DescribeDomainConfig接口获取指定域名的转发配置信息。
    */ DescribeDomainConfig(query: DescribeDomainConfigRequest): Promise<DescribeDomainConfigResponse>;
    /**
    * 调用DescribeRegions接口获取当前WAF支持的地域信息。
    */ DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
    * 调用DescribeDomainConfigStatus接口查询指定域名的转发配置是否生效。
    */ DescribeDomainConfigStatus(query: DescribeDomainConfigStatusRequest): Promise<DescribeDomainConfigStatusResponse>;
    /**
    * 调用DescribePayInfo接口获取指定地域的WAF实例当前信息。
    */ DescribePayInfo(query: DescribePayInfoRequest): Promise<DescribePayInfoResponse>;
    /**
    * 调用ModifyProtectionRuleStatus接口启用或关闭指定的网站防篡改规则。
    */ ModifyProtectionRuleStatus(query: ModifyProtectionRuleStatusRequest): Promise<ModifyProtectionRuleStatusResponse>;
    /**
    * 调用DescribeWafSourceIpSegment接口获取WAF实例的回源IP网段列表。
    */ DescribeWafSourceIpSegment(query: DescribeWafSourceIpSegmentRequest): Promise<DescribeWafSourceIpSegmentResponse>;
    DescribeInstanceInfo(query: DescribeInstanceInfoRequest): Promise<DescribeInstanceInfoResponse>;
    ModifyProtectionModuleStatus(query: ModifyProtectionModuleStatusRequest): Promise<ModifyProtectionModuleStatusResponse>;
}
export default WAF_OPENAPI;
