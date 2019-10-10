// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.ClusterStatHdfsCapacity
export interface ClusterStatHdfsCapacity {
	CapacityTotal: number;
	CapacityTotalGB: number;
	CapacityUsed: number;
	CapacityUsedGB: number;
	CapacityRemaining: number;
	CapacityRemainingGB: number;
	CapacityUsedNonDfs: number;
	ClusterBizId: string;
	DateTime: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.HdfsCapacityList
export interface HdfsCapacityList {
	ClusterStatHdfsCapacity: ClusterStatHdfsCapacity[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/emr.GetHdfsCapacityStatisticInfoResponse
export interface GetHdfsCapacityStatisticInfoResponse {
	RequestId: string;
	HdfsCapacityList: HdfsCapacityList;
}

