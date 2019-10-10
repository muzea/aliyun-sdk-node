// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.LogoBoundary
export interface LogoBoundary {
	Width: number;
	Height: number;
	Top: number;
	Left: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.LogosItem
export interface LogosItem {
	LogoName: string;
	LogoConfidence: number;
	LogoBoundary: LogoBoundary;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.DetectImageLogosResponse
export interface DetectImageLogosResponse {
	RequestId: string;
	ImageUri: string;
	Logos: LogosItem[];
}

