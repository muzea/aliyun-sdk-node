// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.BodyBoundary
export interface BodyBoundary {
	Left: number;
	Top: number;
	Width: number;
	Height: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.BodiesItem
export interface BodiesItem {
	BodyConfidence: number;
	BodyBoundary: BodyBoundary;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.DetectImageBodiesResponse
export interface DetectImageBodiesResponse {
	RequestId: string;
	ImageUri: string;
	Bodies: BodiesItem[];
}

