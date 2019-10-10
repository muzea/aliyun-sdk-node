// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.Terminal
export interface Terminal {
	Id: string;
	Code: number;
	Message: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.Terminals
export interface Terminals {
	Terminal: Terminal[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.RemoveTerminalsResponse
export interface RemoveTerminalsResponse {
	RequestId: string;
	Terminals: Terminals;
}

