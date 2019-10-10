// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.AuthInfo
export interface AuthInfo {
	Key: string;
	Nonce: string;
	Timestamp: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/rtc.CreateConferenceResponse
export interface CreateConferenceResponse {
	RequestId: string;
	ConferenceId: string;
	AuthInfo: AuthInfo;
}

