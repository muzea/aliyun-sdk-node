// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.VV
export interface VV {
	Android: string;
	iOS: string;
	Flash: string;
	HTML5: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.UV
export interface UV {
	Android: string;
	iOS: string;
	Flash: string;
	HTML5: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.UserPlayStatisTotal
export interface UserPlayStatisTotal {
	Date: string;
	PlayDuration: string;
	PlayRange: string;
	VV: VV;
	UV: UV;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.UserPlayStatisTotals
export interface UserPlayStatisTotals {
	UserPlayStatisTotal: UserPlayStatisTotal[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/vod.DescribePlayUserTotalResponse
export interface DescribePlayUserTotalResponse {
	RequestId: string;
	UserPlayStatisTotals: UserPlayStatisTotals;
}

