// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.Area
export interface Area {
	AreaId: string;
	LocalName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.Areas
export interface Areas {
	Area: Area[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/uis.DescribeAreasResponse
export interface DescribeAreasResponse {
	RequestId: string;
	Areas: Areas;
}

