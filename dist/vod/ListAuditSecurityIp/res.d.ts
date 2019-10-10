// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.SecurityIp
export interface SecurityIp {
	SecurityGroupName: string;
	Ips: string;
	CreationTime: string;
	ModificationTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.ListAuditSecurityIpResponse
export interface ListAuditSecurityIpResponse {
	RequestId: string;
	SecurityIpList: SecurityIp[];
}

