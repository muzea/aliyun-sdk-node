import { DescribeBgpPackByIpRequest } from "./DescribeBgpPackByIp/req";
import { DescribeBgpPackByIpResponse } from "./DescribeBgpPackByIp/res";
import { DescribeCapRequest } from "./DescribeCap/req";
import { DescribeCapResponse } from "./DescribeCap/res";
import { DescribeDdosCountRequest } from "./DescribeDdosCount/req";
import { DescribeDdosCountResponse } from "./DescribeDdosCount/res";
import { DescribeDdosCreditRequest } from "./DescribeDdosCredit/req";
import { DescribeDdosCreditResponse } from "./DescribeDdosCredit/res";
import { DescribeDdosEventListRequest } from "./DescribeDdosEventList/req";
import { DescribeDdosEventListResponse } from "./DescribeDdosEventList/res";
import { DescribeDdosThresholdRequest } from "./DescribeDdosThreshold/req";
import { DescribeDdosThresholdResponse } from "./DescribeDdosThreshold/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { ModifyDefenseThresholdRequest } from "./ModifyDefenseThreshold/req";
import { ModifyDefenseThresholdResponse } from "./ModifyDefenseThreshold/res";
import { DescribeInstanceRequest } from "./DescribeInstance/req";
import { DescribeInstanceResponse } from "./DescribeInstance/res";
import { DescribeInstanceIpAddressRequest } from "./DescribeInstanceIpAddress/req";
import { DescribeInstanceIpAddressResponse } from "./DescribeInstanceIpAddress/res";
import { DescribeIpDdosThresholdRequest } from "./DescribeIpDdosThreshold/req";
import { DescribeIpDdosThresholdResponse } from "./DescribeIpDdosThreshold/res";
import { DescribeIpLocationServiceRequest } from "./DescribeIpLocationService/req";
import { DescribeIpLocationServiceResponse } from "./DescribeIpLocationService/res";
import { ModifyIpDefenseThresholdRequest } from "./ModifyIpDefenseThreshold/req";
import { ModifyIpDefenseThresholdResponse } from "./ModifyIpDefenseThreshold/res";

interface ANTIDDOS_PUBLIC {
    /**
     * 查询单个公网IP资产（云服务器ECS实例、负载均衡SLB实例、弹性公网IP实例）绑定的DDoS原生防护实例的配置。
     */
    DescribeBgpPackByIp(query: DescribeBgpPackByIpRequest): Promise<DescribeBgpPackByIpResponse>;
    /**
     * 获取DDoS攻击事件发生时抓取的流量数据的下载链接。
     */
    DescribeCap(query: DescribeCapRequest): Promise<DescribeCapResponse>;
    /**
     * 查询指定地域下正在遭受DDoS攻击的公网IP资产（云服务器ECS实例、负载均衡SLB实例、弹性公网IP实例）的数量。
     */
    DescribeDdosCount(query: DescribeDdosCountRequest): Promise<DescribeDdosCountResponse>;
    /**
     * 查询当前阿里云账号在指定地域的安全信誉分详情。
     */
    DescribeDdosCredit(query: DescribeDdosCreditRequest): Promise<DescribeDdosCreditResponse>;
    /**
     * 查询单个公网IP资产（云服务器ECS实例、负载均衡SLB实例、弹性公网IP实例）上发生的DDoS攻击事件的详情列表。
     */
    DescribeDdosEventList(query: DescribeDdosEventListRequest): Promise<DescribeDdosEventListResponse>;
    /**
     * 查询当前阿里云账号下指定公网IP资产（云服务器ECS实例、负载均衡SLB实例、弹性公网IP实例）的DDoS防护阈值或流量清洗阈值详情。
     */
    DescribeDdosThreshold(query: DescribeDdosThresholdRequest): Promise<DescribeDdosThresholdResponse>;
    /**
     * 查询DDoS基础防护支持的地域信息。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 修改单个公网IP资产（云服务器ECS实例、负载均衡SLB实例、弹性公网IP实例）的DDoS防护清洗阈值。
     */
    ModifyDefenseThreshold(query: ModifyDefenseThresholdRequest): Promise<ModifyDefenseThresholdResponse>;
    /**
     * 查询当前阿里云账号拥有的公网IP资产（云服务器ECS实例、负载均衡SLB实例、弹性公网IP实例）的实例详情，该接口已经过时，推荐使用新接口DescribeInstanceIpAddress。
     */
    DescribeInstance(query: DescribeInstanceRequest): Promise<DescribeInstanceResponse>;
    /**
     * 查询当前阿里云账号拥有的公网IP资产（云服务器ECS实例、负载均衡SLB实例、弹性公网IP实例）的DDoS防护信息以及所属原生防护实例的详情。
     */
    DescribeInstanceIpAddress(query: DescribeInstanceIpAddressRequest): Promise<DescribeInstanceIpAddressResponse>;
    /**
     * 查询当前阿里云账号下指定公网IP资产（云服务器ECS实例、负载均衡SLB实例、弹性公网IP实例）的DDoS防护阈值或流量清洗阈值详情。
     */
    DescribeIpDdosThreshold(query: DescribeIpDdosThresholdRequest): Promise<DescribeIpDdosThresholdResponse>;
    /**
     * 查询当前阿里云账号拥有的公网IP资产（云服务器ECS实例、负载均衡SLB实例、弹性公网IP实例）的IP归属地域。
     */
    DescribeIpLocationService(query: DescribeIpLocationServiceRequest): Promise<DescribeIpLocationServiceResponse>;
    /**
     * 修改单个公网IP资产（云服务器ECS实例、负载均衡SLB实例、弹性公网IP实例）的DDoS防护清洗阈值，该接口为同步接口，用于支持terraform。
     */
    ModifyIpDefenseThreshold(query: ModifyIpDefenseThresholdRequest): Promise<ModifyIpDefenseThresholdResponse>;
}
export default ANTIDDOS_PUBLIC;
