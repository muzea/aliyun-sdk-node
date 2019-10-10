// this file was automatically generated, DO NOT EDIT
// structs
// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.IspCityNode
export interface IspCityNode {
	CityCode: string;
	DefaultSelected: boolean;
	IspName: string;
	CountryName: string;
	CityName: string;
	Mainland: boolean;
	CountryCode: string;
	IspCode: string;
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.IspCityNodesInDescribeGtmMonitorAvailableConfig
export interface IspCityNodesInDescribeGtmMonitorAvailableConfig {
	IspCityNode: IspCityNode[];
}

// struct2ts:github.com/aliyun/alibaba-cloud-sdk-go/services/alidns.DescribeGtmMonitorAvailableConfigResponse
export interface DescribeGtmMonitorAvailableConfigResponse {
	RequestId: string;
	IspCityNodes: IspCityNodesInDescribeGtmMonitorAvailableConfig;
}

