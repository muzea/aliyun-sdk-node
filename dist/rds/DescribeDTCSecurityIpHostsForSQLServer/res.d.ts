// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.WhiteListGroups
export interface WhiteListGroups {
	SecurityIpHosts: string;
	WhitelistGroupName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.ItemsInDescribeDTCSecurityIpHostsForSQLServer
export interface ItemsInDescribeDTCSecurityIpHostsForSQLServer {
	WhiteListGroups: WhiteListGroups[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rds.DescribeDTCSecurityIpHostsForSQLServerResponse
export interface DescribeDTCSecurityIpHostsForSQLServerResponse {
	RequestId: string;
	DBInstanceId: string;
	IpHostPairNum: string;
	Items: ItemsInDescribeDTCSecurityIpHostsForSQLServer;
}

