// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ResultFacesItem
export interface ResultFacesItem {
	GroupId: string;
	User: string;
	ImageId: string;
	Score: number;
	ImageUri: string;
	Glasses: number;
	Hat: number;
	Axis: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.SearchFaceResponse
export interface SearchFaceResponse {
	RequestId: string;
	ImageUri: string;
	GroupName: string;
	Glasses: number;
	Hat: number;
	Score: number;
	Axis: string[];
	ResultFaces: ResultFacesItem[];
}

