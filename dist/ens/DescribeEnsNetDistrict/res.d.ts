// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.EnsNetDistrict
export interface EnsNetDistrict {
	NetDistrictCode: string;
	NetDistrictName: string;
	NetDistrictFatherCode: string;
	EnsRegionIdCount: string;
	NetDistrictLevel: string;
	NetDistrictEnName: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.EnsNetDistricts
export interface EnsNetDistricts {
	EnsNetDistrict: EnsNetDistrict[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ens.DescribeEnsNetDistrictResponse
export interface DescribeEnsNetDistrictResponse {
	RequestId: string;
	Code: number;
	EnsNetDistricts: EnsNetDistricts;
}

