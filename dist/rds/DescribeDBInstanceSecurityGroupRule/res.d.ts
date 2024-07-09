export interface DescribeDBInstanceSecurityGroupRuleResponse {
    /**
     * 请求ID。
     * @example `6BFF4136-10B9-130B-BF8E-D3504BCE4F43`
     */
    RequestId: string;
    /**
     * 响应码信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: string;
    /**
     * 安全组规则详情。
     * @example `{"dbInstanceName": "rm-2ze202******",
    "securityGroup": "{\"description\":\"RDS ONLINE SECURITY\",\"permissions\":[{\"rule\":{\"description\":\"SSAS\",\"ipProtocol\":\"TCP\",\"portRange\":\"23**​/23**\",\"sourceCidrIp\":\"0.0.0.0/0\"},\"securityGroupRuleId\":\"sgr-2ze17u******\"},{\"rule\":{\"description\":\"测试\",\"ipProtocol\":\"TCP\",\"portRange\":\"34/34\",\"sourceCidrIp\":\"42.XXX.XX.247\"},\"securityGroupRuleId\":\"sgr-2ze************\"}],\"regionId\":\"cn-beijing\",\"securityGroupId\":\"sg-2ze0ht******\",\"securityGroupName\":\"cn-beijing_msdtc_vpc-2ze******\"}"}`
     */
    Data: string;
}
