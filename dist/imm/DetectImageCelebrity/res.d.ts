// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.CelebrityBoundary
export interface CelebrityBoundary {
	Width: number;
	Height: number;
	Top: number;
	Left: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.CelebrityItem
export interface CelebrityItem {
	CelebrityConfidence: number;
	CelebrityName: string;
	CelebrityLibraryName: string;
	CelebrityNum: number;
	CelebrityGender: string;
	CelebrityBoundary: CelebrityBoundary;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.DetectImageCelebrityResponse
export interface DetectImageCelebrityResponse {
	RequestId: string;
	ImageUri: string;
	Celebrity: CelebrityItem[];
}

