// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.LocationInfo
export interface LocationInfo {
	Location: string;
	RemoteType: string;
	Authentication: string;
	URL: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Locations
export interface Locations {
	LocationInfo: LocationInfo[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.Imagegw
export interface Imagegw {
	DefaultImageLocation: string;
	PullUpdateTimeout: number;
	MongoDBURI: string;
	ImageExpirationTimeout: string;
	UpdateDateTime: string;
	Locations: Locations;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/ehpc.DescribeImageGatewayConfigResponse
export interface DescribeImageGatewayConfigResponse {
	RequestId: string;
	Imagegw: Imagegw;
}

