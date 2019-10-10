// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.Entity
export interface Entity {
	Region: string;
	InWhite: number;
	LoginTypeName: string;
	Online: boolean;
	Account: number;
	CrackTimes: number;
	Uuid: string;
	LoginSourceIp: string;
	AttackType: number;
	InstanceId: string;
	Vul: number;
	LoginType: number;
	Health: number;
	Status: number;
	Ip: string;
	InstanceName: string;
	AttackTime: string;
	Suspicious: number;
	CrackSourceIp: string;
	Location: string;
	Patch: number;
	StatusName: string;
	GroupId: number;
	AttackTypeName: string;
	LoginTime: string;
	BuyVersion: string;
	UserName: string;
	Trojan: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.DataInGetStatisticsByUuid
export interface DataInGetStatisticsByUuid {
	Entity: Entity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/aegis.GetStatisticsByUuidResponse
export interface GetStatisticsByUuidResponse {
	requestId: string;
	Code: string;
	Success: boolean;
	Message: string;
	Data: DataInGetStatisticsByUuid;
}

