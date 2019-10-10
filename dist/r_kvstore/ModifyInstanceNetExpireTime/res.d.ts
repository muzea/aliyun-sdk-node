// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.NetInfoItem
export interface NetInfoItem {
	DBInstanceNetType: string;
	Port: string;
	ExpiredTime: string;
	ConnectionString: string;
	IPAddress: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.NetInfoItemsInModifyInstanceNetExpireTime
export interface NetInfoItemsInModifyInstanceNetExpireTime {
	NetInfoItem: NetInfoItem[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/r_kvstore.ModifyInstanceNetExpireTimeResponse
export interface ModifyInstanceNetExpireTimeResponse {
	RequestId: string;
	InstanceId: string;
	NetInfoItems: NetInfoItemsInModifyInstanceNetExpireTime;
}

