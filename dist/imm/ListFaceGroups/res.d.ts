// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.FaceBoundary
export interface FaceBoundary {
	Width: number;
	Height: number;
	Top: number;
	Left: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.GroupCoverFace
export interface GroupCoverFace {
	FaceId: string;
	ImageUri: string;
	FaceBoundary: FaceBoundary;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.FaceGroupsItem
export interface FaceGroupsItem {
	GroupId: string;
	GroupName: string;
	FaceCount: number;
	CreateTime: string;
	ModifyTime: string;
	GroupCoverFace: GroupCoverFace;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/imm.ListFaceGroupsResponse
export interface ListFaceGroupsResponse {
	RequestId: string;
	NextMarker: string;
	FaceGroups: FaceGroupsItem[];
}

