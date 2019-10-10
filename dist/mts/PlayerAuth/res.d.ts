// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.Switch
export interface Switch {
	State: string;
	FunctionId: string;
	SwitchId: string;
	FunctionName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.SwitchList
export interface SwitchList {
	Switch: Switch[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PlayerAuthResponse
export interface PlayerAuthResponse {
	RequestId: string;
	LogURL: string;
	SwitchList: SwitchList;
}

