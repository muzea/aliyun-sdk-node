// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.OpEntity
export interface OpEntity {
	EntityObject: string;
	EntityType: number;
	OpDesc: string;
	OpAccount: string;
	OpAction: number;
	GmtCreate: number;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ddosbgp.DescribeOpEntitiesResponse
export interface DescribeOpEntitiesResponse {
	RequestId: string;
	TotalCount: number;
	OpEntities: OpEntity[];
}

