// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.NotFoundCDNDomain
export interface NotFoundCDNDomain {
	String: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PlayInfo
export interface PlayInfo {
	Url: string;
	duration: string;
	size: string;
	width: string;
	height: string;
	bitrate: string;
	fps: string;
	format: string;
	definition: string;
	encryption: string;
	rand: string;
	plaintext: string;
	complexity: string;
	activityName: string;
	encryptionType: string;
	downloadType: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PlayInfoList
export interface PlayInfoList {
	PlayInfo: PlayInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/mts.PlayInfoResponse
export interface PlayInfoResponse {
	RequestId: string;
	NotFoundCDNDomain: NotFoundCDNDomain;
	PlayInfoList: PlayInfoList;
}

