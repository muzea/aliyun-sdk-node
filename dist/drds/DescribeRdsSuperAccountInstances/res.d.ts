// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DbInstancesInDescribeRdsSuperAccountInstances
export interface DbInstancesInDescribeRdsSuperAccountInstances {
	DbInstance: string[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/drds.DescribeRdsSuperAccountInstancesResponse
export interface DescribeRdsSuperAccountInstancesResponse {
	RequestId: string;
	DbInstances: DbInstancesInDescribeRdsSuperAccountInstances;
}

